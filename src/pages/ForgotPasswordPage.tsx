import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen flex flex-col font-display antialiased transition-colors duration-300">
      <header className="w-full px-6 py-4 absolute top-0 left-0 z-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-icons-round text-xl">school</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
            Booking<span className="text-primary">Kampus</span>
          </span>
        </div>
        <button
          className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
          onClick={() => document.documentElement.classList.toggle("dark")}
          type="button"
        >
          <span className="material-icons-round dark:hidden">dark_mode</span>
          <span className="material-icons-round hidden dark:block">
            light_mode
          </span>
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40rem] h-[40rem] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-[10%] -left-[5%] w-[30rem] h-[30rem] rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
        </div>

        <div className="w-full max-w-md z-10 animate-fade-in-up">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-xl border border-border-light dark:border-border-dark p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <span className="material-icons-round text-3xl">
                  lock_reset
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Lupa Kata Sandi?
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Jangan khawatir. Masukkan email kampus Anda dan kami akan
                mengirimkan link untuk mereset kata sandi.
              </p>
            </div>
            <form
              action="#"
              className="space-y-6"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  htmlFor="email"
                >
                  Email Kampus
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons-round text-slate-400 group-focus-within:text-primary transition-colors text-xl">
                      mail
                    </span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                    id="email"
                    name="email"
                    placeholder="nama@mahasiswa.kampus.ac.id"
                    required
                    type="email"
                  />
                </div>
              </div>
              <button
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:ring-offset-surface-dark transition-all duration-200 transform hover:-translate-y-0.5"
                type="submit"
              >
                Kirim Link Reset
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50 text-center">
              <Link
                className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors group"
                to="/login"
              >
                <span className="material-icons-round text-lg mr-1 group-hover:-translate-x-1 transition-transform">
                  arrow_back
                </span>
                Kembali ke Login
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Butuh bantuan teknis?{" "}
              <Link className="text-primary hover:underline" to="/login">
                Hubungi IT Support
              </Link>
            </p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 right-0 p-8 hidden xl:block opacity-20 pointer-events-none z-0">
        <img
          alt=""
          className="w-64 h-auto rounded-xl grayscale mask-image-gradient"
          data-alt="Abstract campus hallway or university architecture detail"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi8eku0hlCINIFLFnY1ruQ9nkJLZsmRD26wTPPhoADw-eIMUB4F2n3GCsIb9jZx-vg4Pq8dsWVZzKuC7EBR1J9MhEjA50crgysBfFs1aTzsw65LxWVGCz6B_HOA3NNi4l8FTXunjvro7Zkj4w3zoHA9dTet2jGjd7l1c6iZK_lVRqmxRpI39OSf0BJ1rmpOR7PBJLTthsM3hNb7ndl--hTQ8LeHVtpl2RKDb30vhYMMCXJsJ_Zexit471PJeSx7-YMI_qRjtFGzcU"
          style={{ maskImage: "linear-gradient(to top, black, transparent)" }}
        />
      </div>
    </div>
  );
};
