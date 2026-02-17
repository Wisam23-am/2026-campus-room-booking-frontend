import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.register(fullName, email, password);
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Register gagal. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <main className="w-full max-w-[1000px] bg-white dark:bg-[#1a2632] rounded-xl shadow-2xl shadow-blue-900/10 overflow-hidden flex flex-col md:flex-row relative z-10 border border-gray-100 dark:border-gray-700">
        <div className="hidden md:flex md:w-5/12 bg-gradient-to-br from-primary via-blue-600 to-blue-800 p-12 flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern university campus building architecture"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              data-alt="Modern university campus building architecture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEILAFRAQFxH3EUbLtJ-RMXTgu0iwsr16uvLumj5Jf6f9JQ0h5bP_uIa8BGQ4oFqjPchZ00gYQpGO1nHJKj9nHEup4LieImbpXX4Qd9ravy2zwc24_weUBf6OS14Nm0g-1HReN2091s4AYGqPdTexSrSunfjNyT0nEF79WXXs9AOVL3juCTPJiPz1ArwVWo0B8OA_3t3CREugOfUz9VApU3nXaO_ksJTW-HhpFdnyOaKC5SvkabQWBAf6Qox0UwROg9thjxyvGZBY"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <span className="material-icons-round text-3xl">school</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Kampus Booking
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-4">
              Sistem Reservasi Ruangan Terpadu
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed opacity-90">
              Kelola jadwal kuliah, rapat, dan kegiatan organisasi Anda dengan
              mudah dalam satu platform.
            </p>
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3 text-sm font-medium bg-white/10 p-3 rounded-lg backdrop-blur-sm w-fit border border-white/10">
              <span className="material-icons-round text-green-300">
                check_circle
              </span>
              <span>Cek ketersediaan real-time</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium bg-white/10 p-3 rounded-lg backdrop-blur-sm w-fit border border-white/10">
              <span className="material-icons-round text-green-300">
                check_circle
              </span>
              <span>Persetujuan otomatis</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </div>

        <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-14 overflow-y-auto max-h-[90vh]">
          <div className="max-w-md mx-auto">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Buat Akun Baru
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Lengkapi data diri Anda untuk memulai reservasi.
              </p>
            </div>
            <form action="#" className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    {error}
                  </p>
                </div>
              )}
              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  htmlFor="fullname"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    className="valid-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary shadow-sm py-3 transition-colors duration-200"
                    id="fullname"
                    name="fullname"
                    placeholder="Contoh: Budi Santoso"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary shadow-sm py-3 transition-colors duration-200"
                  id="email"
                  name="email"
                  placeholder="nama@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  htmlFor="department"
                >
                  Departemen / Fakultas
                </label>
                <div className="relative">
                  <select
                    className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm py-3 pl-3 pr-10 appearance-none transition-colors duration-200"
                    defaultValue=""
                    id="department"
                    name="department"
                  >
                    <option disabled value="">
                      Pilih departemen Anda...
                    </option>
                    <option value="cs">Ilmu Komputer</option>
                    <option value="eng">Teknik Mesin</option>
                    <option value="eco">Ekonomi &amp; Bisnis</option>
                    <option value="art">Seni &amp; Desain</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <span className="material-icons-round">expand_more</span>
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  htmlFor="password"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary shadow-sm py-3 pr-10 transition-colors duration-200"
                    id="password"
                    name="password"
                    placeholder="Minimal 8 karakter"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                    type="button"
                  >
                    <span className="material-icons-round">visibility_off</span>
                  </button>
                </div>
                <div className="mt-2 flex gap-1 h-1">
                  <div className="flex-1 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Kekuatan sandi: Sedang
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    className="h-4 w-4 rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                    id="terms"
                    name="terms"
                    type="checkbox"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    className="font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="terms"
                  >
                    Saya menyetujui{" "}
                    <Link
                      className="text-primary hover:text-primary-hover underline decoration-primary/30 underline-offset-2"
                      to="/register"
                    >
                      Syarat &amp; Ketentuan
                    </Link>{" "}
                    yang berlaku.
                  </label>
                </div>
              </div>

              <button
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-lg shadow-blue-500/30 text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5"
                type="submit"
                disabled={loading}
              >
                {loading ? "Memproses..." : "Daftar Sekarang"}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-[#1a2632] text-gray-500">
                    Sudah punya akun?
                  </span>
                </div>
              </div>
              <div className="text-center">
                <Link
                  className="font-semibold text-primary hover:text-primary-hover transition-colors flex items-center justify-center gap-1 group"
                  to="/login"
                >
                  Masuk di sini
                  <span className="material-icons-round text-base transform group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-4 left-0 w-full text-center text-xs text-gray-400 dark:text-gray-600 pointer-events-none z-0 hidden md:block">
        © 2023 Universitas Teknologi - Sistem Booking Kampus
      </footer>
    </div>
  );
};
