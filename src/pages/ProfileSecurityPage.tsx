import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

export const ProfileSecurityPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Calculate password strength
  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, label: "Lemah", color: "red" };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if (score === 1) return { score: 1, label: "Lemah", color: "red" };
    if (score === 2) return { score: 2, label: "Sedang", color: "yellow" };
    return { score: 3, label: "Kuat", color: "green" };
  };

  const passwordStrength = getPasswordStrength(newPassword);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Semua field harus diisi");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password baru harus minimal 8 karakter");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Password baru dan konfirmasi tidak cocok");
      return;
    }

    if (currentPassword === newPassword) {
      setError("Password baru harus berbeda dengan password lama");
      return;
    }

    try {
      setLoading(true);
      await authService.changePassword(currentPassword, newPassword);
      setSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      
      // Redirect after success
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengganti password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          {/* Sidebar Navigation */}
          <aside className="py-6 lg:col-span-3">
            <nav className="space-y-1">
              <Link
                className="text-text-muted hover:bg-primary/10 hover:text-primary group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                to="/profile"
              >
                <span className="material-icons mr-3 text-lg">person</span>
                Profil Saya
              </Link>
              <Link
                aria-current="page"
                className="bg-primary/10 text-primary group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                to="/profile/security"
              >
                <span className="material-icons mr-3 text-lg">lock</span>
                Keamanan &amp; Password
              </Link>
              <Link
                className="text-text-muted hover:bg-primary/10 hover:text-primary group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                to="/notifications"
              >
                <span className="material-icons mr-3 text-lg">
                  notifications
                </span>
                Notifikasi
              </Link>
              <Link
                className="text-text-muted hover:bg-primary/10 hover:text-primary group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                to="/bookings"
              >
                <span className="material-icons mr-3 text-lg">history</span>
                Riwayat Booking
              </Link>
            </nav>
          </aside>

          {/* Main Content Form */}
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            {/* Page Header */}
            <div className="border-b border-border-light dark:border-border-dark pb-6">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
                Keamanan Profil
              </h1>
              <p className="mt-1 text-sm text-text-muted">
                Kelola kata sandi dan pengaturan keamanan akun Anda.
              </p>
            </div>

            {/* Password Change Card */}
            <div className="bg-surface-light dark:bg-surface-dark shadow sm:rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="material-icons text-primary text-xl">
                    vpn_key
                  </span>
                  Ganti Kata Sandi
                </h3>
                <div className="mt-2 max-w-xl text-sm text-text-muted">
                  <p>
                    Pastikan akun Anda tetap aman dengan menggunakan kata sandi
                    yang kuat. Jangan pernah membagikan kata sandi Anda kepada
                    orang lain.
                  </p>
                </div>

                {/* Success Alert */}
                {success && (
                  <div className="mt-5 rounded-md bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <span className="material-icons text-green-400 text-sm">
                          check_circle
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Password berhasil diperbarui! Mengalihkan...
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Alert */}
                {error && (
                  <div className="mt-5 rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <span className="material-icons text-red-400 text-sm">
                          error
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700 dark:text-red-300">
                          {error}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Alert Info */}
                {!success && !error && (
                  <div className="mt-5 rounded-md bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-800">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <span className="material-icons text-blue-400 text-sm">
                          info
                        </span>
                      </div>
                      <div className="ml-3 flex-1 md:flex md:justify-between">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Gunakan password yang kuat untuk keamanan akun Anda.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form
                  action="#"
                  className="mt-6 space-y-6"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {/* Current Password */}
                  <div className="max-w-lg">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="current-password"
                    >
                      Kata Sandi Saat Ini
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-icons text-gray-400 text-sm">
                          lock_outline
                        </span>
                      </div>
                      <input
                        autoComplete="current-password"
                        className="focus:ring-primary focus:border-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-surface-dark dark:text-white rounded-md h-10"
                        id="current-password"
                        name="current-password"
                        placeholder="Masukkan kata sandi lama"
                        type={showCurrentPassword ? "text" : "password"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        disabled={loading}
                      />
                      <div 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:text-primary transition-colors group"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        <span className="material-icons text-gray-400 group-hover:text-primary text-sm">
                          {showCurrentPassword ? "visibility_off" : "visibility"}
                        </span>
                      </div>
                    </div>
                    <Link
                      className="mt-1 text-xs text-primary hover:text-primary-hover cursor-pointer text-right block"
                      to="/forgot-password"
                    >
                      Lupa kata sandi?
                    </Link>
                  </div>

                  <hr className="border-border-light dark:border-border-dark my-6" />

                  {/* New Password */}
                  <div className="max-w-lg">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="new-password"
                    >
                      Kata Sandi Baru
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-icons text-gray-400 text-sm">
                          lock
                        </span>
                      </div>
                      <input
                        autoComplete="new-password"
                        className="focus:ring-primary focus:border-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-surface-dark dark:text-white rounded-md h-10"
                        id="new-password"
                        name="new-password"
                        placeholder="Minimal 8 karakter"
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        disabled={loading}
                      />
                      <div 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:text-primary transition-colors group"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        <span className="material-icons text-gray-400 group-hover:text-primary text-sm">
                          {showNewPassword ? "visibility_off" : "visibility"}
                        </span>
                      </div>
                    </div>

                    {/* Password Strength Indicator */}
                    {newPassword && (
                      <div className="mt-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-text-muted">
                            Kekuatan Password:{" "}
                            <span className={`font-bold ${
                              passwordStrength.color === "green" ? "text-green-600 dark:text-green-400" :
                              passwordStrength.color === "yellow" ? "text-yellow-600 dark:text-yellow-400" :
                              "text-red-600 dark:text-red-400"
                            }`}>
                              {passwordStrength.label}
                            </span>
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 flex gap-1 overflow-hidden">
                          <div className={`h-1.5 w-1/3 rounded-full ${passwordStrength.score >= 1 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                          <div className={`h-1.5 w-1/3 rounded-full ${passwordStrength.score >= 2 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                          <div className={`h-1.5 w-1/3 rounded-full ${passwordStrength.score >= 3 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        </div>
                        <ul className="mt-2 text-xs text-text-muted space-y-1 list-disc pl-4">
                          <li className={newPassword.length >= 8 ? "text-green-600 dark:text-green-400" : ""}>
                            Minimal 8 karakter
                          </li>
                          <li className={/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword) ? "text-green-600 dark:text-green-400" : ""}>
                            Mengandung huruf besar &amp; kecil
                          </li>
                          <li className={/\d/.test(newPassword) || /[!@#$%^&*(),.?":{}|<>]/.test(newPassword) ? "text-green-600 dark:text-green-400" : ""}>
                            Mengandung angka atau simbol
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="max-w-lg">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="confirm-password"
                    >
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-icons text-gray-400 text-sm">
                          check_circle_outline
                        </span>
                      </div>
                      <input
                        autoComplete="new-password"
                        className={`focus:ring-primary focus:border-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-surface-dark dark:text-white rounded-md h-10 ${
                          confirmPassword && newPassword !== confirmPassword ? 'border-red-500 dark:border-red-500' : ''
                        }`}
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Ulangi kata sandi baru"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                      />
                      <div 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:text-primary transition-colors group"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <span className="material-icons text-gray-400 group-hover:text-primary text-sm">
                          {showConfirmPassword ? "visibility_off" : "visibility"}
                        </span>
                      </div>
                    </div>
                    {confirmPassword && newPassword !== confirmPassword && (
                      <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                        Password tidak cocok
                      </p>
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="px-4 py-4 sm:px-6 bg-gray-50 dark:bg-black/20 border-t border-border-light dark:border-border-dark flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                    <Link
                      className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-surface-dark text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:text-sm"
                      to="/profile"
                    >
                      Batal
                    </Link>
                    <button
                      className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={loading || !currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword}
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin material-icons text-base mr-2">refresh</span>
                          Memproses...
                        </>
                      ) : (
                        "Perbarui Kata Sandi"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Security Log Section (Secondary Context) */}
            <div className="bg-surface-light dark:bg-surface-dark shadow sm:rounded-lg overflow-hidden border border-border-light dark:border-border-dark mt-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Aktivitas Login Terakhir
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-text-muted">
                  Periksa jika ada aktivitas mencurigakan pada akun Anda.
                </p>
                <div className="mt-4 flow-root">
                  <ul className="-my-5 divide-y divide-border-light dark:divide-border-dark">
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <span className="material-icons text-green-500 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                            desktop_windows
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            Chrome pada Windows
                          </p>
                          <p className="text-sm text-text-muted truncate">
                            Jakarta, Indonesia • Saat ini aktif
                          </p>
                        </div>
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Sesi Ini
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <span className="material-icons text-gray-500 bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                            smartphone
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            Safari pada iPhone 12
                          </p>
                          <p className="text-sm text-text-muted truncate">
                            Bandung, Indonesia • 2 hari yang lalu
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
