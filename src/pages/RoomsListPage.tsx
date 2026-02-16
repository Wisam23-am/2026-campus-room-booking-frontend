import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { roomService, RoomQueryParams } from "../services/room.service";
import { Room } from "../types";

export const RoomsListPage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      setError(null);

      const params: RoomQueryParams = {
        search: searchTerm || undefined,
        page: currentPage,
        pageSize: 12,
        sortBy: "name",
        sortOrder: "asc",
      };

      const response = await roomService.getRooms(params);
      setRooms(response.data);
      setTotalPages(response.totalPages);
      setTotalCount(response.totalCount);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch rooms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchRooms();
  };

  const statusColors = {
    active:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
    inactive:
      "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-200",
  };

  const statusLabels = {
    active: "Available",
    inactive: "Inactive",
  };

  if (loading && rooms.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading rooms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:text-3xl sm:truncate">
              Daftar Ruangan
            </h2>
            <nav aria-label="Breadcrumb" className="flex">
              <ol className="flex items-center space-x-2 mt-1">
                <li>
                  <Link
                    className="text-sm font-medium text-slate-500 hover:text-primary"
                    to="/dashboard"
                  >
                    Kampus
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-slate-400 text-base">
                    chevron_right
                  </span>
                  <Link
                    aria-current="page"
                    className="ml-2 text-sm font-medium text-primary"
                    to="/rooms"
                  >
                    Cari Ruangan
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 mb-6">
          <form onSubmit={handleSearch}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  htmlFor="search"
                >
                  Cari Ruangan
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-slate-400 text-lg">
                      search
                    </span>
                  </div>
                  <input
                    className="focus:ring-primary focus:border-primary block w-full pl-10 pr-3 py-2 sm:text-sm border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg"
                    id="search"
                    placeholder="Contoh: Lab, A 301, Gedung D4..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="material-icons text-red-600 dark:text-red-400">
                error
              </span>
              <p className="text-red-800 dark:text-red-200">{error}</p>
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing <span className="font-semibold">{rooms.length}</span> of{" "}
            <span className="font-semibold">{totalCount}</span> rooms
          </p>
        </div>

        {/* Rooms Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent mx-auto mb-2"></div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Loading...
            </p>
          </div>
        ) : rooms.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl">
            <span className="material-icons text-slate-400 text-6xl mb-4">
              search_off
            </span>
            <p className="text-slate-600 dark:text-slate-400">No rooms found</p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
              Try adjusting your search criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {room.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {room.building}
                        {room.floor && ` - Floor ${room.floor}`}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        statusColors[room.status || "active"]
                      }`}
                    >
                      {statusLabels[room.status || "active"]}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-icons text-base">people</span>
                      <span>Capacity: {room.capacity} people</span>
                    </div>
                    {room.category && (
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="material-icons text-base">
                          category
                        </span>
                        <span>{room.category}</span>
                      </div>
                    )}
                  </div>

                  {room.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {room.description}
                    </p>
                  )}

                  <div className="flex gap-2">
                    <Link
                      to={`/rooms/${room.id}/schedule`}
                      className="flex-1 text-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium"
                    >
                      View Schedule
                    </Link>
                    <Link
                      to={`/bookings/create?roomId=${room.id}`}
                      className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="material-icons text-sm">chevron_left</span>
            </button>

            <span className="text-sm text-slate-600 dark:text-slate-400">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
