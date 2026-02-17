import React, { useState, useEffect } from "react";
import { userService } from "../services/user.service";
import { User } from "../types";

export const AdminUserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<number | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    fetchUsers();
  }, [currentPage, searchQuery, roleFilter]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.getUsers({
        page: currentPage,
        pageSize,
        search: searchQuery,
        role: roleFilter,
      });
      setUsers(response.data);
      setTotalCount(response.totalCount);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Gagal memuat data pengguna");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleRoleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setRoleFilter(value ? parseInt(value) : undefined);
    setCurrentPage(1);
  };

  const getRoleBadge = (role: number) => {
    switch (role) {
      case 1: // Admin
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
            Admin
          </span>
        );
      case 0: // User
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
            User
          </span>
        );
      default:
        return null;
    }
  };

  const totalPages = Math.ceil(totalCount / pageSize);
  const adminCount = users.filter((u) => u.role === 1).length;
  const userCount = users.filter((u) => u.role === 0).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-neutral-light dark:border-neutral-dark shadow-sm">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Total Users
            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {totalCount}
            </h3>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-neutral-light dark:border-neutral-dark shadow-sm">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Admins
            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {adminCount}
            </h3>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-neutral-light dark:border-neutral-dark shadow-sm">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Regular Users
            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {userCount}
            </h3>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-neutral-light dark:border-neutral-dark shadow-sm">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Current Page
            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {users.length}
            </h3>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-neutral-light dark:border-neutral-dark shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                Cari User
              </label>
              <input
                className="block w-full rounded-lg border-neutral-light dark:border-neutral-dark bg-slate-50 dark:bg-slate-900/50 text-sm focus:border-primary focus:ring-primary dark:text-white shadow-sm"
                placeholder="Nama atau email..."
                type="text"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="md:col-span-4">
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                Peran
              </label>
              <select
                className="block w-full rounded-lg border-neutral-light dark:border-neutral-dark bg-slate-50 dark:bg-slate-900/50 text-sm focus:border-primary focus:ring-primary dark:text-white shadow-sm"
                value={roleFilter ?? ""}
                onChange={handleRoleFilter}
              >
                <option value="">Semua Peran</option>
                <option value="1">Admin</option>
                <option value="0">User</option>
              </select>
            </div>
            <div className="md:col-span-2 flex items-end">
              <button
                className="text-slate-500 hover:text-primary text-sm font-medium flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full justify-center h-[38px]"
                onClick={() => {
                  setSearchQuery("");
                  setRoleFilter(undefined);
                  setCurrentPage(1);
                }}
              >
                <span className="material-icons-round text-lg">
                  filter_list_off
                </span>
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-neutral-light dark:border-neutral-dark overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
              <span className="ml-3 text-slate-600 dark:text-slate-400">
                Loading users...
              </span>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <span className="text-red-500">{error}</span>
            </div>
          ) : users.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <span className="material-icons-round text-slate-300 text-6xl">
                people
              </span>
              <p className="mt-4 text-slate-500">No users found</p>
            </div>
          ) : (
            <>
              <div className="overflow-auto flex-1">
                <table className="min-w-full divide-y divide-neutral-light dark:divide-neutral-dark">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Nama & Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Peran
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Terdaftar
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-surface-light dark:bg-surface-dark divide-y divide-neutral-light dark:divide-neutral-dark">
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <span className="font-mono text-sm text-slate-500">
                            #{user.id}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                              {user.fullName.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-900 dark:text-white">
                                {user.fullName}
                              </p>
                              <p className="text-xs text-slate-500">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {new Date(user.createdAt).toLocaleDateString(
                              "id-ID",
                            )}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                              title="Edit"
                            >
                              <span className="material-icons-round text-lg">
                                edit
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                              title="View Details"
                            >
                              <span className="material-icons-round text-lg">
                                visibility
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
              <div className="px-6 py-4 border-t border-neutral-light dark:border-neutral-dark flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Showing {(currentPage - 1) * pageSize + 1} to{" "}
                  {Math.min(currentPage * pageSize, totalCount)} of {totalCount}{" "}
                  users
                </div>
                <div className="flex items-center gap-1">
                  <button
                    className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    <span className="material-icons-round text-lg">
                      chevron_left
                    </span>
                  </button>
                  <span className="px-3 text-sm text-slate-600 dark:text-slate-300">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 disabled:opacity-50"
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    <span className="material-icons-round text-lg">
                      chevron_right
                    </span>
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
