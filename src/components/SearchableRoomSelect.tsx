import React, { useState, useEffect, useRef } from "react";
import { roomService } from "../services/room.service";
import { Room } from "../types";

interface SearchableRoomSelectProps {
  value: number | null;
  onChange: (roomId: number | null, roomName: string) => void;
  error?: string;
  disabled?: boolean;
}

export const SearchableRoomSelect: React.FC<SearchableRoomSelectProps> = ({
  value,
  onChange,
  error,
  disabled = false,
}) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch all rooms on mount
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await roomService.getRooms({ pageSize: 100 });
        setRooms(response.data);
        setFilteredRooms(response.data);

        // Set selected room if value is provided
        if (value) {
          const room = response.data.find((r) => r.id === value);
          if (room) {
            setSelectedRoom(room);
            setSearchTerm(room.name);
          }
        }
      } catch (err) {
        console.error("Failed to fetch rooms:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [value]);

  // Filter rooms based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredRooms(rooms);
      return;
    }

    const search = searchTerm.toLowerCase();
    const filtered = rooms.filter(
      (room) =>
        room.name.toLowerCase().includes(search) ||
        room.building.toLowerCase().includes(search) ||
        (room.category && room.category.toLowerCase().includes(search)),
    );
    setFilteredRooms(filtered);
  }, [searchTerm, rooms]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    if (!e.target.value) {
      onChange(null, "");
      setSelectedRoom(null);
    }
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    setSearchTerm(room.name);
    onChange(room.id ?? null, room.name);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedRoom(null);
    onChange(null, "");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-icons text-slate-400 text-xl">
            meeting_room
          </span>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          disabled={disabled || loading}
          placeholder={loading ? "Loading rooms..." : "Type to search rooms..."}
          className={`block w-full pl-10 pr-10 py-2.5 border rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm placeholder-slate-400 dark:bg-[#0f172a] dark:text-white ${
            error
              ? "border-red-500 dark:border-red-500"
              : "border-slate-300 dark:border-slate-600"
          } ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        {searchTerm && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <span className="material-icons text-slate-400 hover:text-slate-600 text-xl">
              close
            </span>
          </button>
        )}
        {!searchTerm && !disabled && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="material-icons text-slate-400 text-xl">
              expand_more
            </span>
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

      {/* Dropdown */}
      {isOpen && !disabled && (
        <div className="absolute z-50 mt-1 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg max-h-60 overflow-auto">
          {loading ? (
            <div className="p-4 text-center text-sm text-slate-500">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent mx-auto mb-2"></div>
              Loading rooms...
            </div>
          ) : filteredRooms.length === 0 ? (
            <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400">
              No rooms found matching "{searchTerm}"
            </div>
          ) : (
            <ul className="py-1">
              {filteredRooms.map((room) => (
                <li key={room.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectRoom(room)}
                    className={`w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                      selectedRoom?.id === room.id
                        ? "bg-primary/10 dark:bg-primary/20"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {room.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {room.building}
                          {room.floor && ` - Floor ${room.floor}`} • Capacity:{" "}
                          {room.capacity}
                        </p>
                        {room.category && (
                          <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                            {room.category}
                          </span>
                        )}
                      </div>
                      {selectedRoom?.id === room.id && (
                        <span className="material-icons text-primary text-sm ml-2">
                          check_circle
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
