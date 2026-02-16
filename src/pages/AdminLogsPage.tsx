import React from "react";
import { Link } from "react-router-dom";
import { AdminLayout } from "../components/layouts/AdminLayout";

export const AdminLogsPage: React.FC = () => {
  return (
    <AdminLayout headerTitle="Log Aktivitas">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Page Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <nav className="flex items-center text-sm text-slate-500 mb-1">
              <Link
                className="hover:text-primary cursor-pointer"
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
              <span className="material-icons text-[14px] mx-1">
                chevron_right
              </span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Log Aktivitas
              </span>
            </nav>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Log Aktivitas Sistem
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Pantau semua aktivitas pengguna dan perubahan data sistem demi
              transparansi.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
              to="/admin/logs/export"
            >
              <span className="material-icons text-[18px]">download</span>
              Ekspor CSV
            </Link>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm shadow-primary/30 transition-colors"
              onClick={() => window.print()}
              type="button"
            >
              <span className="material-icons text-[18px]">print</span>
              Cetak Laporan
            </button>
          </div>
        </div>

        {/* Filter Card */}
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search */}
            <div className="md:col-span-4 relative">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase">
                Pencarian
              </label>
              <div className="relative">
                <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-[20px]">
                  search
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="Cari nama user atau ID..."
                  type="text"
                />
              </div>
            </div>

            {/* Date Range */}
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase">
                Rentang Tanggal
              </label>
              <div className="relative">
                <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-[20px]">
                  date_range
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all cursor-pointer"
                  type="text"
                  value="01 Okt 2023 - 12 Okt 2023"
                  readOnly
                />
              </div>
            </div>

            {/* Action Filter */}
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase">
                Kategori Aksi
              </label>
              <div className="relative">
                <select className="w-full pl-3 pr-10 py-2 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none appearance-none cursor-pointer">
                  <option value="">Semua Aksi</option>
                  <option value="approve">Penyetujuan</option>
                  <option value="create">Pembuatan</option>
                  <option value="modify">Perubahan</option>
                  <option value="reject">Penolakan</option>
                  <option value="login">Login Sistem</option>
                </select>
                <span className="material-icons absolute right-3 top-2.5 text-slate-400 text-[20px] pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Apply/Reset */}
            <div className="md:col-span-2 flex items-end gap-2">
              <button
                className="flex-1 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors border border-primary/20"
                type="button"
              >
                Terapkan
              </button>
              <button
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="Reset Filter"
                type="button"
              >
                <span className="material-icons text-[20px]">refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* Data Table Section */}
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-border-light dark:border-border-dark">
                  <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-48">
                    Waktu &amp; Tanggal
                  </th>
                  <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-40">
                    Tipe Aksi
                  </th>
                  <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Detail Aktivitas
                  </th>
                  <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-40">
                    IP Address
                  </th>
                  <th className="py-3 px-6 w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-border-dark">
                {/* Row 1 */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      12 Okt 2023
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      14:30:45 WIB
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                        BS
                      </div>
                      <div>
                        <Link
                          className="text-sm font-medium text-slate-900 dark:text-white"
                          to="/admin/users/1"
                        >
                          Budi Santoso
                        </Link>
                        <div className="text-xs text-slate-500">
                          Admin Staff
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Approval
                    </span>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Menyetujui Booking{" "}
                      <Link
                        className="text-primary hover:underline font-medium"
                        to="/bookings/102"
                      >
                        #BK-102
                      </Link>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Ruang Seminar A • Himpunan Mahasiswa TI
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block">
                      192.168.1.10
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      type="button"
                    >
                      <span className="material-icons text-[20px]">
                        visibility
                      </span>
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      12 Okt 2023
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      14:15:22 WIB
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-center gap-3">
                      <img
                        alt="User avatar"
                        className="h-8 w-8 rounded-full object-cover"
                        data-alt="Avatar of user Siti Aminah"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAxSoq6AEZ9qcSkTFvUytTsgu3yzRHuoqxAHzWlVxm4JU6bDlkQamIPW1pKk-Y2j_zTs3IuHXgDmOkr5gDSegTy2juLFP6kO68cDV0N9Wjs0-idWSrbS44sjbJCEYvvWzsBa6PW-t5ffssetic0rYnAPO8sstRan_wy4hJ0rN8UyB-VjQCzVQTsK6NFzxTjqQolj6C42kbFDTKKo73Ae1vnvzHFNoWHesf54oa8IR7nQHLJuHFOgKQCtGy7UqSReY3xLUcPFG1-BE"
                      />
                      <div>
                        <Link
                          className="text-sm font-medium text-slate-900 dark:text-white"
                          to="/admin/users/2"
                        >
                          Siti Aminah
                        </Link>
                        <div className="text-xs text-slate-500">Mahasiswa</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Create
                    </span>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Membuat Booking Baru{" "}
                      <Link
                        className="text-primary hover:underline font-medium"
                        to="/bookings/105"
                      >
                        #BK-105
                      </Link>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Lab Komputer Dasar • Peminjaman Individu
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block">
                      10.5.20.12
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      type="button"
                    >
                      <span className="material-icons text-[20px]">
                        visibility
                      </span>
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer bg-red-50/30 dark:bg-red-900/10">
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      12 Okt 2023
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      13:45:10 WIB
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-xs">
                        SA
                      </div>
                      <div>
                        <Link
                          className="text-sm font-medium text-slate-900 dark:text-white"
                          to="/admin/users/0"
                        >
                          System Auto
                        </Link>
                        <div className="text-xs text-slate-500">System</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Reject
                    </span>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Membatalkan Booking{" "}
                      <Link
                        className="text-primary hover:underline font-medium"
                        to="/bookings/99"
                      >
                        #BK-099
                      </Link>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Alasan: Bentrok jadwal dengan Maintenance Rutin
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block">
                      LOCALHOST
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      type="button"
                    >
                      <span className="material-icons text-[20px]">
                        visibility
                      </span>
                    </button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      12 Okt 2023
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      11:20:05 WIB
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs">
                        DK
                      </div>
                      <div>
                        <Link
                          className="text-sm font-medium text-slate-900 dark:text-white"
                          to="/admin/users/3"
                        >
                          Dosen Koordinator
                        </Link>
                        <div className="text-xs text-slate-500">Dosen</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      Update
                    </span>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Mengubah Status Fasilitas
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Ruang A1: &quot;Tersedia&quot; menjadi
                      &quot;Perbaikan&quot;
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block">
                      192.168.1.45
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      type="button"
                    >
                      <span className="material-icons text-[20px]">
                        visibility
                      </span>
                    </button>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      12 Okt 2023
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      09:05:01 WIB
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-center gap-3">
                      <img
                        alt="User avatar"
                        className="h-8 w-8 rounded-full object-cover"
                        data-alt="Avatar of user Rina Wati"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnDgHELmj2DIZkkRw1I6vHTbARp0H7ReBsBodaJhnTkggBs1aO_A1gpI7mAUz1PXRrm7tPFl3hkzPbVAtweTkmP1jE2xGgXQSyt0CzpECtYDFLtS737EH90CUNEqcjzhzpu4XPR_GLqIB3QRmgthdAjM70Cvy7m137Qq4dkynCb6gEtF_rECLU89EGunIyBpS9Nj1gO1XCe8-Q-kIu51G2mvD5JrpyoIaGTlfKrn_bG_OlN8BhYOR3hutjTBBzWtW2xSKioSlAw38"
                      />
                      <div>
                        <Link
                          className="text-sm font-medium text-slate-900 dark:text-white"
                          to="/admin/users/4"
                        >
                          Rina Wati
                        </Link>
                        <div className="text-xs text-slate-500">
                          Staff Akademik
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      Login
                    </span>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Login Berhasil
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Browser: Chrome 118 on Windows
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block">
                      192.168.1.18
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      type="button"
                    >
                      <span className="material-icons text-[20px]">
                        visibility
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-border-light dark:border-border-dark p-4 bg-surface-light dark:bg-surface-dark flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Menampilkan{" "}
              <span className="font-medium text-slate-800 dark:text-white">
                1
              </span>{" "}
              sampai{" "}
              <span className="font-medium text-slate-800 dark:text-white">
                5
              </span>{" "}
              dari{" "}
              <span className="font-medium text-slate-800 dark:text-white">
                1.240
              </span>{" "}
              hasil
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg border border-border-light dark:border-border-dark text-slate-400 cursor-not-allowed"
                disabled
                type="button"
              >
                <span className="material-icons text-[18px]">chevron_left</span>
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium shadow-sm shadow-primary/30"
                type="button"
              >
                1
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors"
                type="button"
              >
                2
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors"
                type="button"
              >
                3
              </button>
              <span className="text-slate-400 px-1">...</span>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors"
                type="button"
              >
                12
              </button>
              <button
                className="p-2 rounded-lg border border-border-light dark:border-border-dark text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                type="button"
              >
                <span className="material-icons text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
