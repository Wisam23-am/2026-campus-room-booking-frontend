import React from "react";

export const AdminRejectReasonModalPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-hidden text-slate-800 dark:text-slate-200">
      <div
        aria-hidden="true"
        className="flex-1 flex flex-col h-screen opacity-50 pointer-events-none"
      >
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">
              C
            </div>
            <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
              Campus Booking Admin
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Admin: Budi Santoso
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
              <img
                alt="Admin profile"
                className="w-full h-full object-cover"
                data-alt="Smiling man in business casual"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2KDMmADTgm9VCR4VxCgQay1vBLxtN8ScAEzB8g00B0yvosotMDZufzyTKw0IhF0Zn2fvntdZr2TYNXwZVM98YcQWlb_aI4IBddMhkr0GHhUWq0QthGLoAKQn4xDbbV3PvURD0O3PEtdNNhZX9CTgGZtxrvI6JzaCLj5CMBfebKxVtWAftiNkFOokgTs66hxRM0HzSUpgY2t5tN-pt_mzgAdqe8OpjsbcB4wgcievLUGrKgaimUCSW2rd5WTnaaQDZw1t8iuyOtRM"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Antrean Persetujuan
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Kelola permintaan peminjaman ruangan yang masuk.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Filter
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm shadow-primary/30">
                  Export Data
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-sm text-slate-500 font-medium">
                  Menunggu Persetujuan
                </div>
                <div className="text-3xl font-bold mt-2 text-primary">12</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-sm text-slate-500 font-medium">
                  Disetujui Hari Ini
                </div>
                <div className="text-3xl font-bold mt-2 text-emerald-500">
                  5
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-sm text-slate-500 font-medium">
                  Ditolak Hari Ini
                </div>
                <div className="text-3xl font-bold mt-2 text-slate-600">2</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                    <th className="px-6 py-4">Pemohon</th>
                    <th className="px-6 py-4">Ruangan</th>
                    <th className="px-6 py-4">Tanggal &amp; Waktu</th>
                    <th className="px-6 py-4">Keperluan</th>
                    <th className="px-6 py-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="bg-primary/5 dark:bg-primary/10">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                          AS
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">
                            Ahmad Supriyadi
                          </div>
                          <div className="text-xs text-slate-500">
                            Mahasiswa - TI
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                      Lab Komputer 3
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                      <div>12 Okt 2023</div>
                      <div className="text-xs text-slate-500">
                        09:00 - 11:00
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                      Workshop UI/UX
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded transition-colors">
                          <span className="material-icons text-xl">
                            check_circle
                          </span>
                        </button>
                        <button className="p-2 text-danger hover:bg-red-50 rounded transition-colors">
                          <span className="material-icons text-xl">cancel</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">
                          DL
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">
                            Diana Lestari
                          </div>
                          <div className="text-xs text-slate-500">Dosen</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                      Aula Utama
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                      <div>15 Okt 2023</div>
                      <div className="text-xs text-slate-500">
                        13:00 - 16:00
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                      Seminar Nasional
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded transition-colors">
                          <span className="material-icons text-xl">
                            check_circle
                          </span>
                        </button>
                        <button className="p-2 text-slate-400 hover:bg-slate-100 rounded transition-colors">
                          <span className="material-icons text-xl">cancel</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <div
        aria-labelledby="modal-title"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur transition-opacity"></div>
        <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl transform transition-all ring-1 ring-black/5 flex flex-col overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                <span className="material-icons text-danger dark:text-red-400">
                  warning
                </span>
              </div>
              <div>
                <h3
                  className="text-lg font-semibold text-slate-900 dark:text-white leading-6"
                  id="modal-title"
                >
                  Tolak Peminjaman
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Tindakan ini tidak dapat dibatalkan setelah dikonfirmasi.
                </p>
              </div>
            </div>
            <button
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
              type="button"
            >
              <span className="sr-only">Close</span>
              <span className="material-icons text-xl">close</span>
            </button>
          </div>

          <div className="px-6 py-6">
            <div className="mb-5 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
              <span className="material-icons text-slate-400 text-lg mt-0.5">
                info
              </span>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Anda menolak permohonan{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Lab Komputer 3
                </span>{" "}
                oleh{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Ahmad Supriyadi
                </span>
                .
              </div>
            </div>
            <label
              className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
              htmlFor="reject-reason"
            >
              Alasan Penolakan <span className="text-danger">*</span>
            </label>
            <div className="relative">
              <textarea
                className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 placeholder:text-slate-400 resize-none transition-shadow"
                id="reject-reason"
                placeholder="Masukkan alasan penolakan di sini... (contoh: Ruangan sedang dalam perbaikan)"
                rows={4}
              ></textarea>
              <div className="absolute bottom-2 right-2 text-xs text-slate-400 pointer-events-none">
                Min. 10 karakter
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <button
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-transparent"
                type="button"
              >
                Jadwal Bentrok
              </button>
              <button
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-transparent"
                type="button"
              >
                Pemeliharaan
              </button>
              <button
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-transparent"
                type="button"
              >
                Diluar Jam Operasional
              </button>
            </div>
          </div>

          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
            <button
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
              type="button"
            >
              Batalkan
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-danger hover:bg-danger-hover text-white text-sm font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-danger transition-all flex items-center gap-2"
              type="button"
            >
              <span className="material-icons text-base">block</span>
              Konfirmasi Penolakan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
