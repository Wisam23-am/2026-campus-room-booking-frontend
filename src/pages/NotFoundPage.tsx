import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-lexend antialiased min-h-screen flex flex-col transition-colors duration-200">
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              className="flex items-center gap-2 cursor-pointer"
              to="/dashboard"
            >
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <span className="material-icons text-primary text-xl">
                  school
                </span>
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                Campus<span className="text-primary">Room</span>
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                to="/rooms"
              >
                Cari Ruangan
              </Link>
              <Link
                className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                to="/rooms"
              >
                Jadwal Saya
              </Link>
              <Link
                className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                to="/dashboard"
              >
                Bantuan
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                aria-label="Notifications"
                className="p-2 text-slate-400 hover:text-primary dark:hover:text-white transition-colors relative"
                to="/notifications"
              >
                <span className="material-icons">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </Link>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Budi Santoso
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Mahasiswa Teknik
                  </p>
                </div>
                <img
                  alt="User Profile Avatar"
                  className="h-9 w-9 rounded-full ring-2 ring-primary/20 object-cover"
                  data-alt="Portrait of a male student smiling"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeWN8sE1EJ717O4QcQLD1CE1XLpp6uhwlNo496Et0SDvoVPttk73vM2iP5u72kl-AbFECRBWerBq9JuN9svdd3eIkdVAE7kNR-sZVzbZr_r9ZelvC2xJWrtNSGwIiaxPeKyZT8hqyRMyeuDT-EWq21gAaavazbeMe7WjvYDaH2s6BDKdmi4xkYCNEE90fdfdIYEUiE_jWyzG_ZaREYKKyjlHaePqmaF3mh1PZogMEDwyQDEXDTe0kGivFwWQsLlfC0E5gZJm1Xi-Y"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl w-full mx-auto text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <h1 className="text-[10rem] md:text-[14rem] font-bold text-primary/5 dark:text-white/5 leading-none select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              404
            </h1>
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl ring-8 ring-white dark:ring-slate-900">
              <img
                alt="Empty classroom or study hall"
                className="w-full h-full object-cover rounded-full opacity-90 mix-blend-overlay"
                data-alt="Empty modern classroom with chairs and desks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNqy0s6PnpLdk4ngZOwR3tAel7KvcXQvK3dLDr7jazrJq0iv-MWeVEEYgieMap6ysN1UK6KJIJHMEpsgDe0e3SyPHUMGvIgd3UWQv8IgqzO1ubgnGPD9aYdsQ75hp57kLV-2JzpOTvTI3K9mqtPP4c10twPyn0S1pi9ZvKOX7N_gxw2ncr8URCUn_3qsyNmaimLEbxz9BCzBOTutWWE8x2lNcmFqySU81W0uLX-T60tAcBPO3xuem8xAiahYxZHA-K0XhwxryLhXg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-icons text-8xl text-primary/80 drop-shadow-lg">
                  room_preferences
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Waduh! Halaman tidak ditemukan.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Sepertinya ruangan digital yang kamu cari sedang direnovasi,
              dipindahkan, atau memang tidak pernah ada di gedung ini.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                to="/dashboard"
              >
                <span className="material-icons mr-2 text-xl">home</span>
                Kembali ke Beranda
              </Link>
              <Link
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium rounded-xl transition-colors w-full sm:w-auto"
                to="/rooms"
              >
                <span className="material-icons mr-2 text-xl">search</span>
                Cari Ruangan Lain
              </Link>
            </div>
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 mt-8 max-w-md mx-auto">
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">
                Butuh bantuan segera?
              </p>
              <div className="flex justify-center gap-6">
                <Link
                  className="text-sm text-primary hover:text-blue-600 dark:hover:text-blue-400 font-medium flex items-center gap-1"
                  to="/dashboard"
                >
                  <span className="material-icons text-sm">support_agent</span>
                  Kontak Admin
                </Link>
                <Link
                  className="text-sm text-primary hover:text-blue-600 dark:hover:text-blue-400 font-medium flex items-center gap-1"
                  to="/rooms"
                >
                  <span className="material-icons text-sm">map</span>
                  Peta Kampus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">
            © 2023 CampusRoom System. Universitas Teknologi.
          </p>
        </div>
      </footer>
    </div>
  );
};
