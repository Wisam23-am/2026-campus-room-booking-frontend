import React from "react";
import { Link } from "react-router-dom";

export const NotificationsPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <nav className="bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-primary font-bold text-xl tracking-tight">
                  BookingKampus
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  className="border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/rooms/schedule"
                >
                  Kalender
                </Link>
                <Link
                  className="border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/rooms/schedule"
                >
                  Ruangan
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                aria-label="Notifications"
                className="p-1 rounded-full text-slate-400 hover:text-slate-500 focus:outline-none relative"
                to="/notifications"
              >
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-danger ring-2 ring-white dark:ring-surface-dark"></span>
                <span className="material-icons-round">notifications</span>
              </Link>
              <Link
                to="/profile"
                aria-label="Profile"
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden border border-primary/20"
              >
                <img
                  alt="Profile"
                  className="h-full w-full object-cover"
                  data-alt="Portrait of a young user"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTUyJctkn1SFAFa5EcUKfiS_xbUzMQWSCbvWYYt9wfBI5nrjfT9Qqb2wL_ozsgT2eDVOCagTNJ6hZBwtOAuXLVaysSrM30UANDFL9McmCB5VaJeEzVALd-ixUU7dL7I4sByxuK5vGLe88i5YxqrxTZF0eneGithpv02TicbeYeQUNdoFAgW-Lpl9veqBNQDduAwehEXKI1-i-g2rm0hvti-pSmzKx4bz8QqxodLEqR2asOPlgV2412VQLFkXK8dAYZGBEH5hHE_ss"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Notifikasi
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Pantau status booking dan pembaruan ruangan Anda.
              </p>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-surface-light dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              <span className="material-icons-round text-lg mr-2 text-slate-400">
                done_all
              </span>
              Tandai semua telah dibaca
            </button>
          </div>

          <div className="mb-6 border-b border-slate-200 dark:border-slate-700">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              <Link
                className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center"
                to="/notifications"
              >
                Semua
                <span className="ml-2 bg-primary/10 text-primary py-0.5 px-2 rounded-full text-xs font-semibold">
                  5
                </span>
              </Link>
              <Link
                className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                to="/notifications"
              >
                Belum Dibaca
              </Link>
              <Link
                className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                to="/notifications"
              >
                Pembaruan Booking
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 mt-6">
              Hari Ini
            </div>
            <div className="group relative bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4">
              <div className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-primary"></div>
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-success border border-green-200 dark:border-green-800">
                  <span className="material-icons-round">check_circle</span>
                </div>
              </div>
              <div className="flex-1 min-w-0 pr-6">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Booking Disetujui
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap ml-2">
                    Baru saja
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Pengajuan Anda untuk{" "}
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Ruang Sidang Utama
                  </span>{" "}
                  pada tanggal 12 Okt 2023, 09:00 - 11:00 telah disetujui oleh
                  Admin.
                </p>
                <div className="mt-2 flex gap-2">
                  <Link
                    className="text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                    to="/bookings/details"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4">
              <div className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-primary"></div>
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-danger border border-red-200 dark:border-red-800">
                  <span className="material-icons-round">cancel</span>
                </div>
              </div>
              <div className="flex-1 min-w-0 pr-6">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Booking Ditolak
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap ml-2">
                    2 jam yang lalu
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Permintaan{" "}
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Lab Komputer 1
                  </span>{" "}
                  ditolak.
                </p>
                <p className="mt-1 text-xs text-danger bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded inline-block border border-red-100 dark:border-red-800/50">
                  Alasan: Sedang dalam perbaikan teknis.
                </p>
              </div>
            </div>

            <div className="group relative bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4 opacity-75 hover:opacity-100">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary border border-blue-200 dark:border-blue-800">
                  <span className="material-icons-round">
                    notifications_active
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Pengingat Jadwal
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap ml-2">
                    4 jam yang lalu
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Jadwal penggunaan{" "}
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Aula Gedung B
                  </span>{" "}
                  akan dimulai dalam 1 jam. Silakan persiapkan perlengkapan
                  Anda.
                </p>
              </div>
            </div>

            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 mt-8">
              Kemarin
            </div>

            <div className="group relative bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4 opacity-75 hover:opacity-100">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-success border border-green-200 dark:border-green-800">
                  <span className="material-icons-round">check_circle</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Perubahan Jadwal Disetujui
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap ml-2">
                    Kemarin, 14:30
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Perubahan waktu untuk{" "}
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    R. Diskusi 3
                  </span>{" "}
                  berhasil diperbarui.
                </p>
              </div>
            </div>

            <div className="group relative bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4 opacity-75 hover:opacity-100">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 border border-slate-200 dark:border-slate-600">
                  <span className="material-icons-round">info</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Pemeliharaan Sistem
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap ml-2">
                    Kemarin, 09:00
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Sistem booking akan mengalami downtime untuk pemeliharaan pada
                  hari Minggu, 01:00 - 03:00 WIB.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="text-sm text-slate-500 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              Muat Lebih Banyak Notifikasi
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
