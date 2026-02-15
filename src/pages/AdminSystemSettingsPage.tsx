import React from "react";
import { Link } from "react-router-dom";

export const AdminSystemSettingsPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display antialiased selection:bg-primary/30 selection:text-primary">
      <div className="flex h-screen overflow-hidden">
        <aside className="hidden w-64 flex-col overflow-y-auto border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-[#15202b] md:flex">
          <div className="flex h-16 items-center justify-center border-b border-slate-200 px-6 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                <span className="material-icons text-sm">school</span>
              </span>
              CampusBook
            </div>
          </div>
          <nav className="flex-1 space-y-1 px-4 py-6">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              to="/admin/dashboard"
            >
              <span className="material-icons text-xl">dashboard</span>
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              to="/admin/rooms"
            >
              <span className="material-icons text-xl">calendar_today</span>
              Jadwal Ruangan
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              to="/admin/rooms"
            >
              <span className="material-icons text-xl">meeting_room</span>
              Daftar Ruangan
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              to="/admin/users"
            >
              <span className="material-icons text-xl">people</span>
              Pengguna
            </Link>
            <div className="my-4 border-t border-slate-200 dark:border-slate-800"></div>
            <div className="px-3 mb-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
              Konfigurasi
            </div>
            <Link
              className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-medium text-primary transition-colors dark:bg-primary/20"
              to="/admin/settings"
            >
              <span className="material-icons text-xl">settings</span>
              Pengaturan Sistem
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              to="/admin/users"
            >
              <span className="material-icons text-xl">
                admin_panel_settings
              </span>
              Akses Admin
            </Link>
          </nav>
          <div className="border-t border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <Link to="/profile" aria-label="Profile">
                <img
                  alt="User Profile"
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-white dark:ring-slate-700"
                  data-alt="Admin user avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQIY0fEd_jXyTC7Z6OMqF7Ko3fXoimYddJdMEkZc3FdEFlcwKiJvgibGij_EVy-QWs2JgQ0vkRvMe4RAiopWAeqqG0pF7DHUkwB9rs4cPzmSTZnnbOKm8KwcPjsOpfeL3oncwm9-5_3rarcspdFZ4Eban_nFqtaPX34ivFla0SlnZQvjSnRdmEAFuyahElpCKuQGyHtv5OkxJlkvNkX6YB5Rp5MVBC1ZWVPr9Gmn4SIwjUA2t6eiYC1V7ZRzn-ffV_82n7UM-wxIg"
                />
              </Link>
              <div className="flex-1 overflow-hidden">
                <h4 className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  Administrator
                </h4>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  admin@campus.ac.id
                </p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md dark:border-slate-800 dark:bg-[#15202b]/80">
            <div className="flex items-center gap-4">
              <button className="md:hidden rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-icons">menu</span>
              </button>
              <nav className="flex text-sm text-slate-500 dark:text-slate-400">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link
                      className="hover:text-primary transition-colors"
                      to="/admin/dashboard"
                    >
                      Admin
                    </Link>
                  </li>
                  <li>
                    <span className="material-icons text-sm">
                      chevron_right
                    </span>
                  </li>
                  <li className="font-medium text-slate-900 dark:text-white">
                    Pengaturan Sistem
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                aria-label="Notifications"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                to="/notifications"
              >
                <span className="material-icons text-[20px]">
                  notifications_none
                </span>
              </Link>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-6 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Pengaturan Sistem
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Konfigurasi global untuk operasional peminjaman ruangan kampus.
              </p>
            </div>

            <form className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15202b]">
                <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                      <span className="material-icons">schedule</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Waktu Operasional
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Tentukan jam buka dan tutup fasilitas kampus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        htmlFor="startTime"
                      >
                        Jam Buka (Mulai)
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="material-icons text-slate-400 text-lg">
                            wb_sunny
                          </span>
                        </div>
                        <input
                          className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
                          defaultValue="08:00"
                          id="startTime"
                          name="startTime"
                          type="time"
                        />
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        Waktu paling awal mahasiswa dapat memesan ruangan.
                      </p>
                    </div>
                    <div>
                      <label
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        htmlFor="endTime"
                      >
                        Jam Tutup (Selesai)
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="material-icons text-slate-400 text-lg">
                            nights_stay
                          </span>
                        </div>
                        <input
                          className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
                          defaultValue="21:00"
                          id="endTime"
                          name="endTime"
                          type="time"
                        />
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        Waktu paling akhir ruangan harus dikosongkan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15202b]">
                <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                      <span className="material-icons">gavel</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Aturan Peminjaman
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Batasan durasi dan frekuensi peminjaman.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="max-w-md">
                    <label
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      htmlFor="maxDuration"
                    >
                      Durasi Maksimal Booking (Jam)
                    </label>
                    <div className="flex items-center">
                      <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="material-icons text-slate-400 text-lg">
                            timer
                          </span>
                        </div>
                        <input
                          className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
                          defaultValue={4}
                          id="maxDuration"
                          max={12}
                          min={1}
                          name="maxDuration"
                          type="number"
                        />
                      </div>
                      <span className="ml-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                        Jam per sesi
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 bg-blue-50 dark:bg-slate-800/50 p-3 rounded-lg border border-blue-100 dark:border-slate-700 text-blue-800 dark:text-blue-300 flex gap-2">
                      <span className="material-icons text-sm mt-0.5">
                        info
                      </span>
                      Mahasiswa tidak akan bisa membuat reservasi melebihi
                      durasi ini dalam satu kali booking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15202b]">
                <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                      <span className="material-icons">auto_awesome</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Otomatisasi &amp; Workflow
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Pengaturan persetujuan otomatis sistem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-8 rounded-lg border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-700/50 dark:bg-slate-900/50">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                        Persetujuan Otomatis
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
                        Jika diaktifkan, semua permintaan peminjaman yang tidak
                        bentrok jadwal akan{" "}
                        <strong className="text-slate-700 dark:text-slate-300">
                          langsung disetujui
                        </strong>{" "}
                        tanpa menunggu konfirmasi manual dari admin.
                      </p>
                    </div>
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300"
                        id="autoApprove"
                        name="toggle"
                        type="checkbox"
                      />
                      <label
                        className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer"
                        htmlFor="autoApprove"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-6 z-20 flex items-center justify-end gap-3 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-[#15202b]/90">
                <button
                  className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-700 dark:focus:ring-slate-700"
                  type="button"
                >
                  Batal
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-blue-600 dark:focus:ring-blue-800 shadow-md shadow-blue-500/20"
                  type="submit"
                >
                  <span className="material-icons text-sm">save</span>
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>

          <footer className="mt-auto border-t border-slate-200 px-6 py-6 dark:border-slate-800">
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">
              © 2023 Campus Booking System. Versi 1.2.0 (Admin Panel)
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};
