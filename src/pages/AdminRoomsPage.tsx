import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { roomService } from "../services/room.service";
import { Room } from "../types";

export const AdminRoomsPage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    fetchRooms();
  }, [currentPage, searchQuery]);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await roomService.getRooms({
        page: currentPage,
        pageSize,
        search: searchQuery,
      });
      setRooms(response.data);
      setTotalCount(response.totalCount);
    } catch (err) {
      console.error("Failed to fetch rooms:", err);
      setError("Gagal memuat data ruangan");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadge = (status: number) => {
    switch (status) {
      case 0: // Active
        return (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Active
            </span>
          </div>
        );
      case 1: // Inactive
        return (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Inactive
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  const totalPages = Math.ceil(totalCount / pageSize);
  const activeRooms = rooms.filter((r) => r.status === 0).length;
  const inactiveRooms = rooms.filter((r) => r.status === 1).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Room Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">Kelola ruangan kampus</p>
          </div>
          <Link
            to="/admin/rooms/create"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <span className="material-icons">add</span>
            <span>Add Room</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Total Rooms
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {totalCount}
                </h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-icons">apartment</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Active
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeRooms}
                </h3>
              </div>
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
                <span className="material-icons">check_circle</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Inactive
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {inactiveRooms}
                </h3>
              </div>
              <div className="p-2 bg-slate-500/10 rounded-lg text-slate-600">
                <span className="material-icons">cancel</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Current Page
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {rooms.length}
                </h3>
              </div>
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-600">
                <span className="material-icons">view_list</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-4">
          <div className="relative w-full lg:w-96">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Search by Room Name or Building..."
              type="text"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
              <span className="ml-3 text-slate-600 dark:text-slate-400">
                Loading rooms...
              </span>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <span className="material-icons text-red-500 text-5xl mb-2">
                  error_outline
                </span>
                <p className="text-red-600 dark:text-red-400">{error}</p>
              </div>
            </div>
          ) : rooms.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <span className="material-icons text-slate-300 dark:text-slate-600 text-6xl mb-2">
                meeting_room
              </span>
              <p className="text-slate-500 dark:text-slate-400">
                Tidak ada ruangan ditemukan
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="py-3 px-6 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Room Name
                      </th>
                      <th className="py-3 px-6 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Building
                      </th>
                      <th className="py-3 px-6 text-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Capacity
                      </th>
                      <th className="py-3 px-6 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="py-3 px-6 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {rooms.map((room) => (
                      <tr
                        key={room.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
                            #{room.id}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              <span className="material-icons">
                                meeting_room
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white">
                                {room.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {room.category}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {room.building}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {room.capacity || "-"}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          {getStatusBadge(room.status)}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                              <span className="material-icons text-sm">
                                visibility
                              </span>
                            </button>
                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                              <span className="material-icons text-sm">
                                edit
                              </span>
                            </button>
                            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                              <span className="material-icons text-sm">
                                delete
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * pageSize + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(currentPage * pageSize, totalCount)}
                  </span>{" "}
                  of <span className="font-medium">{totalCount}</span> rooms
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => p - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                            currentPage === page
                              ? "bg-primary text-white"
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          {page}
                        </button>
                      ),
                    )}
                  </div>
                  <button
                    onClick={() => setCurrentPage((p) => p + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
