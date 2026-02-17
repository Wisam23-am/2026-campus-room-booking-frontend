import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("remember_email") || "";
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(
    !!localStorage.getItem("remember_email"),
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { user } = await authService.login(email, password);

      if (rememberMe) {
        localStorage.setItem("remember_email", email);
      }

      // Redirect after login
      navigate(user.role === 1 ? "/admin/dashboard" : "/dashboard");
    } catch (err: any) {
      setError(err.message || "Login gagal. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center font-display antialiased text-slate-800 dark:text-slate-100 transition-colors duration-300 relative">
      <div className="w-full max-w-6xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
        <div className="hidden md:flex flex-col flex-1 max-w-lg space-y-8">
          <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg group">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500 z-10"></div>
            <img
              alt="Interior perpustakaan kampus universitas modern dengan mahasiswa sedang belajar"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              data-alt="Modern university campus library interior with students studying"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkfxI4u1rncAzHl7gXGzlhVJ0XqT1J_RVTPKdZgPXGsib29De524rk3MvaHIWjDWOFgPv_MtcWBNihk2EiTgZk97EicMDnQH8OFG196noQxwZn2CJsL3D6ZpEJooLHcPUdcsT0Ar4zkn3P1nPhmjqVi66ifSAoshCJ2PpAgkwN4Bx7Nr2CySeE1LxXU5Bzyk8Rk2_SDWYHSYdMZYVLjm64ZSuL112o3bmrKMCnsSytfq7MZbeTFsnuAVMh7w4Uhd1T3eYB5U8uJGg"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h2 className="text-white text-2xl font-bold mb-1">
                Ruang Kampus
              </h2>
              <p className="text-white/90 text-sm">
                Kolaborasi, belajar, dan berinovasi di fasilitas premium.
              </p>
            </div>
          </div>
          <div className="space-y-4 pr-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Kelola <span className="text-primary">jadwal akademik</span> Anda
              dengan efisien.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Sistem Pemesanan Ruangan Kampus memberikan akses mudah bagi
              mahasiswa dan dosen ke ruang belajar, ruang kuliah, dan
              laboratorium.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <img
                  alt="Foto Mahasiswa"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover"
                  data-alt="Student portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRGVWmO4vpIUzJ0w2-mO9GXqjfPNPmZsdkT9KH8dMc74RindEOteWZwD0ZY4Mx1lIwyzqiLKQaFJQQkvw_Dbb2CrNXZBaHYxElRlwvyY37j6tyjMQaeE-zmKqRpKgRBZPhsZhSBnLPiMFP9hCT_TrIKauqHV-PqOZmOiJZiRy90L6SWqGT8j9_e6zlW3qBlD_Ee6C7OHMXF9cK2MzyKmSzkC6VMKecHTqA9c6cQYk1x1IGFMWtvb6X2V4DDY0JNuq2eXh-cGW5G2s"
                />
                <img
                  alt="Foto Dosen"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover"
                  data-alt="Faculty portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeRUiM_992Xbc3SSfTMp-yDbYH6N_iV6ZQ65poVNxFD5VO1Y1TakbFzp7PGmigT0S336KmtIdlnTS4lx4od0Y80KNZUWLBx1X-eYYWp1CrDx1GrOzNG33gJVZr257Doiz71lP8iB6Eg0B1MWOkUuNnYjkqJjOtqBIPR1KL-4VgejMHaBZQ_8PmOwrHA31M0hf7IPeL0ngbxLaOTkBGLvR3KCfd7toFIdeslMchoionqQ2bNiFOObsdoJUdWWt7A8-_6oxkEmLrMhI"
                />
                <img
                  alt="Foto Administrator"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover"
                  data-alt="Administrator portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKG-1DOQX4iw10YhxWUJuxxr6uWnuTIUFY8z3-kqL7jQs5nw4QkIrf62DI2XOIm13brjO6PPwbLvp6djoKfqdpwh2xmEF7oiq2Sb2fUrrzJ1XfLri38IfHmfkBb9z1VA2HhHoBfeP6IBaV6C0Xe045Mu8t8VJq0a8RRWjAF9LNgRjF6YsLnlx-08G8Nt2do9BNY_7B0zgPRdo4ARx7q7UvCZJkvXLZqf_0ygV5N8uKWUuiDmMcm_5R_chGhve3zBZcEndpv8yc_Y"
                />
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Dipercaya oleh 10.000+ pengguna
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto flex-1 max-w-[480px]">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
            <div className="mb-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-icons">school</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Booking Kampus
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Selamat Datang Kembali
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Silakan masukkan detail Anda untuk masuk.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    {error}
                  </p>
                </div>
              )}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="email"
                >
                  Email Institusi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-icons text-xl">mail_outline</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    id="email"
                    name="email"
                    placeholder="nama@universitas.ac.id"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="password"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-icons text-xl">lock_outline</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    id="password"
                    name="password"
                    placeholder="********"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer focus:outline-none transition-colors"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    <span className="material-icons text-xl">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-primary border-slate-300 rounded focus:ring-primary bg-slate-50 dark:bg-slate-700 dark:border-slate-600"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                  />
                  <label
                    className="ml-2 block text-sm text-slate-600 dark:text-slate-400 select-none cursor-pointer"
                    htmlFor="remember-me"
                  >
                    Ingat Saya
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    className="font-medium text-primary hover:text-primary-hover transition-colors"
                    to="/forgot-password"
                  >
                    Lupa Kata Sandi?
                  </Link>
                </div>
              </div>
              <button
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800 transition-all transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="material-icons text-sm mr-2 animate-spin">
                      refresh
                    </span>
                    Memproses...
                  </>
                ) : (
                  <>
                    Masuk
                    <span className="material-icons text-sm ml-2">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>
            <div className="mt-8 mb-6 relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">
                  Atau lanjutkan dengan
                </span>
              </div>
            </div>
            <div>
              <button
                className="w-full flex justify-center items-center gap-3 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm bg-white dark:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800 transition-colors"
                type="button"
                onClick={() => navigate("/register")}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4V12H20C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                  ></path>
                  <path d="M12 2V12H2" fill="currentColor"></path>
                </svg>
                Register
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Dilindungi oleh reCAPTCHA dan tunduk pada{" "}
                <Link
                  className="underline hover:text-slate-600 dark:hover:text-slate-400"
                  to="/login"
                >
                  Kebijakan Privasi
                </Link>{" "}
                dan{" "}
                <Link
                  className="underline hover:text-slate-600 dark:hover:text-slate-400"
                  to="/login"
                >
                  Syarat Layanan
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 md:hidden">
            <p>(c) 2024 Sistem Booking Kampus.</p>
            <div className="mt-2 space-x-4">
              <Link
                className="hover:text-primary transition-colors"
                to="/login"
              >
                Pusat Bantuan
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                to="/login"
              >
                Dukungan IT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="hidden md:flex absolute bottom-4 w-full justify-between px-8 text-xs text-slate-400 dark:text-slate-500">
        <div>
          (c) 2024 Sistem Booking Kampus. Hak cipta dilindungi undang-undang.
        </div>
        <div className="flex gap-6">
          <Link className="hover:text-primary transition-colors" to="/login">
            Kebijakan Privasi
          </Link>
          <Link className="hover:text-primary transition-colors" to="/login">
            Syarat Penggunaan
          </Link>
          <Link className="hover:text-primary transition-colors" to="/login">
            Hubungi Dukungan IT
          </Link>
        </div>
      </footer>
    </div>
  );
};
