import React from "react";
import { Link } from "react-router-dom";

export const AdminUserManagementPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen font-display antialiased selection:bg-primary/20 selection:text-primary">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-neutral-light dark:border-neutral-dark flex-col hidden lg:flex z-20 shadow-sm">
          <div className="h-16 flex items-center px-6 border-b border-neutral-light dark:border-neutral-dark">
            <div className="flex items-center gap-2 text-primary font-bold text-xl">
              <span className="material-icons-round">school</span>
              <span>CampusBook</span>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            <Link
              className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              to="/admin/dashboard"
            >
              <span className="material-icons-round">dashboard</span>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              to="/admin/approvals"
            >
              <span className="material-icons-round">calendar_today</span>
              <span className="font-medium">Pemesanan</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              to="/admin/rooms"
            >
              <span className="material-icons-round">meeting_room</span>
              <span className="font-medium">Ruangan</span>
            </Link>
            <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Administrasi
            </div>
            <Link
              className="flex items-center gap-3 px-3 py-2 text-primary bg-primary/10 rounded-lg transition-colors"
              to="/admin/users"
            >
              <span className="material-icons-round">people</span>
              <span className="font-medium">Pengguna</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              to="/admin/settings"
            >
              <span className="material-icons-round">settings</span>
              <span className="font-medium">Pengaturan</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-neutral-light dark:border-neutral-dark">
            <div className="flex items-center gap-3">
              <img
                alt="Admin Profile"
                className="h-9 w-9 rounded-full object-cover border border-neutral-light dark:border-neutral-dark"
                data-alt="Profile picture of administrator"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMXSWxWsAd6I-Z5O4UFrTYAKpq88tLuZDZ0FsQc2gYrpudMMlA401Fw0ZjCvEbOLVgC6b1aygWJZ9zZpGAUsbO4ddAyuCNMU9eKBSXRi1HKF3zuoqfNhUSDBTn8qBLHDSNFpPk1slz7R25uUOnKlDByWEFEajbkihCRmFwKj0-pRQVeuqfnPtM4G4B5eCZ3N6kbB6vZNBvj4J4z7GpT5Ad7bufzKrwyTsaxMN8MroByoq-9nPUodBBA7i0Ve6Hgj_aN78PFmAuPyk"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                  Admin Kampus
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  admin@campus.ac.id
                </p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark relative">
          <header className="h-16 bg-surface-light dark:bg-surface-dark border-b border-neutral-light dark:border-neutral-dark flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-sm z-10">
            <div className="flex items-center gap-4 lg:hidden">
              <button className="text-slate-500 hover:text-primary">
                <span className="material-icons-round">menu</span>
              </button>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                CampusBook
              </span>
            </div>
            <h1 className="hidden lg:block text-xl font-bold text-slate-800 dark:text-white">
              Manajemen Pengguna
            </h1>
            <div className="flex items-center gap-3">
              <Link
                aria-label="Notifications"
                className="p-2 text-slate-400 hover:text-primary rounded-full hover:bg-primary/5 transition-colors relative"
                to="/notifications"
              >
                <span className="material-icons-round">notifications</span>
                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
              </Link>
              <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm shadow-primary/30 transition-all">
                <span className="material-icons-round text-base">add</span>
                <span>Tambah User</span>
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-neutral-light dark:border-neutral-dark p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-5 lg:col-span-4">
                  <label
                    className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
                    htmlFor="search"
                  >
                    Cari Pengguna
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <span className="material-icons-round text-lg">
                        search
                      </span>
                    </span>
                    <input
                      className="pl-10 block w-full rounded-lg border-neutral-light dark:border-neutral-dark bg-slate-50 dark:bg-slate-900/50 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder-slate-400 shadow-sm transition-shadow"
                      id="search"
                      placeholder="Nama, Email, atau NIM/NIP..."
                      type="text"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 lg:col-span-2">
                  <label
                    className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
                    htmlFor="department"
                  >
                    Departemen
                  </label>
                  <select
                    className="block w-full rounded-lg border-neutral-light dark:border-neutral-dark bg-slate-50 dark:bg-slate-900/50 text-sm focus:border-primary focus:ring-primary dark:text-white shadow-sm"
                    id="department"
                  >
                    <option value="">Semua Dept</option>
                    <option value="cs">Informatika</option>
                    <option value="eng">Teknik Elektro</option>
                    <option value="art">Desain Komunikasi</option>
                  </select>
                </div>
                <div className="md:col-span-2 lg:col-span-2">
                  <label
                    className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
                    htmlFor="role"
                  >
                    Peran
                  </label>
                  <select
                    className="block w-full rounded-lg border-neutral-light dark:border-neutral-dark bg-slate-50 dark:bg-slate-900/50 text-sm focus:border-primary focus:ring-primary dark:text-white shadow-sm"
                    id="role"
                  >
                    <option value="">Semua Peran</option>
                    <option value="student">Mahasiswa</option>
                    <option value="lecturer">Dosen</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
                <div className="md:col-span-2 lg:col-span-2">
                  <label
                    className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <select
                    className="block w-full rounded-lg border-neutral-light dark:border-neutral-dark bg-slate-50 dark:bg-slate-900/50 text-sm focus:border-primary focus:ring-primary dark:text-white shadow-sm"
                    id="status"
                  >
                    <option value="">Semua Status</option>
                    <option value="active">Aktif</option>
                    <option value="inactive">Nonaktif</option>
                    <option value="suspended">Ditangguhkan</option>
                  </select>
                </div>
                <div className="md:col-span-12 lg:col-span-2 flex justify-end md:justify-start">
                  <button className="text-slate-500 hover:text-primary text-sm font-medium flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full justify-center md:justify-start md:w-auto h-[38px]">
                    <span className="material-icons-round text-lg">
                      filter_list
                    </span>
                    <span>Reset Filter</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-neutral-light dark:border-neutral-dark overflow-hidden flex flex-col h-[calc(100vh-280px)] min-h-[500px]">
              <div className="px-6 py-4 border-b border-neutral-light dark:border-neutral-dark flex items-center justify-between">
                <h2 className="font-semibold text-slate-800 dark:text-white">
                  Daftar Pengguna{" "}
                  <span className="ml-2 text-xs font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                    1,248 Total
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    className="text-slate-500 hover:text-primary p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    title="Export CSV"
                  >
                    <span className="material-icons-round">file_download</span>
                  </button>
                  <button
                    className="text-slate-500 hover:text-primary p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    title="Print"
                  >
                    <span className="material-icons-round">print</span>
                  </button>
                </div>
              </div>

              <div className="overflow-auto flex-1">
                <table className="min-w-full divide-y divide-neutral-light dark:divide-neutral-dark">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 sticky top-0 z-10 backdrop-blur-sm">
                    <tr>
                      <th
                        className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-12"
                        scope="col"
                      >
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary bg-transparent"
                          type="checkbox"
                        />
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer group hover:text-primary"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          Nama &amp; Email
                          <span className="material-icons-round text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            arrow_downward
                          </span>
                        </div>
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden sm:table-cell"
                        scope="col"
                      >
                        NIM / NIP
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell cursor-pointer group hover:text-primary"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          Departemen
                          <span className="material-icons-round text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            unfold_more
                          </span>
                        </div>
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                        scope="col"
                      >
                        Peran
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                        scope="col"
                      >
                        Status
                      </th>
                      <th
                        className="px-6 py-3 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                        scope="col"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-surface-light dark:bg-surface-dark divide-y divide-neutral-light dark:divide-neutral-dark">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary bg-transparent"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              alt="Sarah Connor portrait"
                              className="h-10 w-10 rounded-full object-cover border border-neutral-light dark:border-neutral-dark"
                              data-alt="Portrait of Sarah Connor"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0wA0ztrutdjxo8XM8w1KvhzVkIMy9tkXMAAnRM6HAmX4RdtmDZOAx5iptBQNkt6FFUnkN43Ldku1JAWi-F5iMe_B_jd2h3qcVKVOoNBzImTIGhKx_WgadhNdaJ1XlPF-irR5uPXn1X3HUjMq4BhdfcI53ek-F9T2ApFKua1w9eBmzOoFgz3s-IPVtNZjKOXwD9UhOj71ebc35QHUiSeYRpAiIpJQ7JwWWaY-Ho5cTHjQHjSvVSH5n2i2GajrnEATH9W7ca7X0zRU"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">
                              Sarah Connor
                            </div>
                            <div className="text-sm text-primary hover:underline cursor-pointer">
                              sarah.c@student.campus.ac.id
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-slate-600 dark:text-slate-300 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded w-fit">
                          202100451
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          Teknik Informatika
                        </div>
                        <div className="text-xs text-slate-400">
                          Fakultas Ilmu Komputer
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                          Mahasiswa
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Aktif
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            className="text-slate-400 hover:text-primary p-1 rounded hover:bg-primary/10 transition-colors"
                            title="Edit User"
                          >
                            <span className="material-icons-round text-[20px]">
                              edit
                            </span>
                          </button>
                          <button
                            className="text-slate-400 hover:text-orange-500 p-1 rounded hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                            title="Change Role"
                          >
                            <span className="material-icons-round text-[20px]">
                              manage_accounts
                            </span>
                          </button>
                          <button
                            className="text-slate-400 hover:text-red-500 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            title="Delete User"
                          >
                            <span className="material-icons-round text-[20px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border-t border-neutral-light dark:border-neutral-dark bg-surface-light dark:bg-surface-dark px-4 py-3 flex items-center justify-between sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Menampilkan <span className="font-medium">1</span> sampai{" "}
                      <span className="font-medium">10</span> dari{" "}
                      <span className="font-medium">97</span> hasil
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-slate-500 dark:text-slate-400">
                        Baris per halaman:
                      </label>
                      <select className="form-select block w-16 py-1 pr-6 pl-2 text-sm border-neutral-light dark:border-neutral-dark rounded-lg bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                    </div>
                    <nav
                      aria-label="Pagination"
                      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    >
                      <Link
                        className="relative inline-flex items-center px-2 py-2 rounded-l-lg border border-neutral-light dark:border-neutral-dark bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                        to="/admin/users"
                      >
                        <span className="sr-only">Previous</span>
                        <span className="material-icons-round text-lg">
                          chevron_left
                        </span>
                      </Link>
                      <Link
                        aria-current="page"
                        className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        to="/admin/users"
                      >
                        1
                      </Link>
                      <Link
                        className="bg-white dark:bg-slate-800 border-neutral-light dark:border-neutral-dark text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        to="/admin/users"
                      >
                        2
                      </Link>
                      <Link
                        className="bg-white dark:bg-slate-800 border-neutral-light dark:border-neutral-dark text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        to="/admin/users"
                      >
                        3
                      </Link>
                      <span className="relative inline-flex items-center px-4 py-2 border border-neutral-light dark:border-neutral-dark bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300">
                        ...
                      </span>
                      <Link
                        className="bg-white dark:bg-slate-800 border-neutral-light dark:border-neutral-dark text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        to="/admin/users"
                      >
                        8
                      </Link>
                      <Link
                        className="bg-white dark:bg-slate-800 border-neutral-light dark:border-neutral-dark text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        to="/admin/users"
                      >
                        9
                      </Link>
                      <Link
                        className="bg-white dark:bg-slate-800 border-neutral-light dark:border-neutral-dark text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        to="/admin/users"
                      >
                        10
                      </Link>
                      <Link
                        className="relative inline-flex items-center px-2 py-2 rounded-r-lg border border-neutral-light dark:border-neutral-dark bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                        to="/admin/users"
                      >
                        <span className="sr-only">Next</span>
                        <span className="material-icons-round text-lg">
                          chevron_right
                        </span>
                      </Link>
                    </nav>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:hidden">
                  <Link
                    className="relative inline-flex items-center px-4 py-2 border border-neutral-light dark:border-neutral-dark text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700"
                    to="/admin/users"
                  >
                    Previous
                  </Link>
                  <Link
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-neutral-light dark:border-neutral-dark text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700"
                    to="/admin/users"
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
