import React from "react";
import { Link } from "react-router-dom";

export const VerifyEmailPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 min-h-screen flex flex-col antialiased">
      {/* Header / Navbar Minimal */}
      <header className="w-full py-6 absolute top-0 left-0 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
              <span className="material-icons text-primary">meeting_room</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Campus<span className="text-primary">Book</span>
            </span>
          </div>
          <Link
            className="text-sm font-medium text-slate-500 hover:text-primary transition-colors dark:text-slate-400"
            to="/login"
          >
            Butuh bantuan?
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative px-4 sm:px-6">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 pointer-events-none z-0"></div>

        {/* Central Card Container */}
        <div className="w-full max-w-md bg-surface-light dark:bg-surface-dark shadow-2xl shadow-slate-200/50 dark:shadow-black/30 rounded-xl overflow-hidden relative z-10 border border-slate-100 dark:border-slate-700/50">
          {/* Progress Indicator */}
          <div className="h-1 w-full bg-slate-100 dark:bg-slate-700">
            <div className="h-full w-3/4 bg-primary rounded-r-full"></div>
          </div>

          <div className="p-8 sm:p-10 flex flex-col items-center text-center">
            {/* Illustration Circle */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center border border-primary/20">
                <span className="material-icons text-5xl text-primary transform -rotate-6">
                  mark_email_unread
                </span>
              </div>
              {/* Decorative small icons */}
              <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-md border-2 border-white dark:border-surface-dark">
                <span className="material-icons text-sm font-bold">check</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Verifikasi Email Anda
            </h1>

            {/* Subheadline / Context */}
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Hampir selesai! Kami telah mengirimkan tautan verifikasi ke:{" "}
              <br />
              <span className="font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/50 px-2 py-0.5 rounded text-sm mt-1 inline-block">
                mahasiswa@student.university.edu
              </span>
            </p>

            {/* Instruction Body */}
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-8 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50 w-full text-left flex gap-3">
              <span className="material-icons text-primary text-xl flex-shrink-0 mt-0.5">
                info
              </span>
              <p>
                Silakan cek kotak masuk Anda dan klik tautan untuk mengaktifkan
                akun. Jika tidak ada, periksa folder <strong>Spam</strong> atau{" "}
                <strong>Junk</strong>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-3">
              <button
                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary font-semibold py-3 px-4 rounded-lg transition-all duration-200 group"
                onClick={() => window.location.reload()}
                type="button"
              >
                <span className="material-icons text-xl text-slate-400 group-hover:text-primary transition-colors">
                  refresh
                </span>
                Kirim Ulang Email
              </button>
              <Link
                className="block w-full text-center text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors py-2"
                to="/login"
              >
                Salah email?{" "}
                <span className="text-primary hover:underline">
                  Kembali ke Pendaftaran
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom Footer Area inside card */}
          <div className="bg-slate-50 dark:bg-slate-800/30 px-8 py-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-center">
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <span className="material-icons text-[14px]">lock</span>
              Koneksi aman &amp; terenkripsi
            </p>
          </div>
        </div>

        {/* Toast Notification (Hidden by default, simulated state) */}
        <div className="absolute bottom-8 right-8 z-50 transform transition-all duration-500 translate-y-20 opacity-0 pointer-events-none">
          <div className="bg-slate-800 text-white px-4 py-3 rounded shadow-lg flex items-center gap-3">
            <span className="material-icons text-green-400">check_circle</span>
            <div>
              <h4 className="font-medium text-sm">Email Terkirim</h4>
              <p className="text-xs text-slate-400">Cek inbox Anda sekarang.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full py-6 text-center text-slate-400 text-sm relative z-10">
        © 2023 Campus Room Booking System. All rights reserved.
      </footer>
    </div>
  );
};
