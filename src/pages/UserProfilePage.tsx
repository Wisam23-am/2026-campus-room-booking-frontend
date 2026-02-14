import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";
import { User } from "../types";

export const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const currentUser = authService.getCurrentUser();
        if (currentUser?.id) {
          const data = await userService.getUserById(currentUser.id);
          setUser(data);
          setFormData(data);
        }
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setError("Gagal memuat profil pengguna");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    setIsEditing(location.pathname === "/profile/edit");
  }, [location.pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    if (!formData || !user) return;
    try {
      setSaving(true);
      setError(null);
      await userService.updateUser(user.id, formData);
      setUser(formData);
      localStorage.setItem("current_user", JSON.stringify(formData));
      setIsEditing(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      navigate("/profile");
    } catch (err) {
      console.error("Failed to update profile:", err);
      setError("Gagal memperbarui profil");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
    navigate("/profile");
  };

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <div className="text-slate-600 dark:text-slate-400">
          Memuat profil...
        </div>
      </div>
    );
  }

  if (!user || !formData) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <div className="text-slate-600 dark:text-slate-400">
          Profil tidak ditemukan
        </div>
      </div>
    );
  }

  const roleDisplay = user.role === 1 ? "Admin" : "Pengguna";

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white min-h-screen flex overflow-hidden">
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 hidden md:flex flex-col h-screen fixed z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
              B
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
              Booking<span className="text-primary">Kampus</span>
            </span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Menu Utama
          </p>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group"
            to="/dashboard"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              dashboard
            </span>
            <span className="font-medium text-sm">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group"
            to="/rooms"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              search
            </span>
            <span className="font-medium text-sm">Cari Ruangan</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group"
            to="/bookings"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              calendar_today
            </span>
            <span className="font-medium text-sm">Riwayat Booking</span>
          </Link>
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-6 mb-2">
            Akun
          </p>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary font-medium"
            to="/profile"
          >
            <span className="material-icons text-[20px]">person</span>
            <span className="font-medium text-sm">Profil Saya</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group"
            to="/profile"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              settings
            </span>
            <span className="font-medium text-sm">Pengaturan</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
            <img
              className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              data-alt="User profile thumbnail"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS-mrHKSZsi5wk5iV8bQL7T90azzFR0B4LkX87a04GyNdaJRMq4VLVsagXYE8bX7yEj6e3mF8o2Ojd0pk1z1patD52tb6-Iei0a0p8LutHR6B3ynoof4hebwWlMn0gLs3IVaBAcMFuPrij26aB0g2CyNHcYvoc836OGrH-5wzOv0HsRYS4QVDt1EVTtSpD_IPLemAXvZwTLxlv7zWFqkx-dmjyDDH9MSD7XjIELFfZtK_eLcf7WdbImLP0cCAcCI9oqBsYwJ4a6S4"
              alt=""
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                Budi Santoso
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                budi.s@student.univ.ac.id
              </p>
            </div>
            <span className="material-icons-outlined text-slate-400 text-sm">
              expand_more
            </span>
          </div>
        </div>
      </aside>

      <main className="flex-1 ml-0 md:ml-64 flex flex-col h-screen overflow-hidden relative">
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 md:px-8 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-500 hover:text-slate-700">
              <span className="material-icons">menu</span>
            </button>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Profil Pengguna
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              aria-label="Notifications"
              className="relative p-2 text-slate-500 hover:text-primary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              to="/notifications"
            >
              <span className="material-icons-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
                Profil berhasil diperbarui
              </div>
            )}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative">
              <div className="h-32 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/20 dark:from-primary/20 dark:to-blue-900/20 relative">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-primary"></div>
              </div>
              <div className="px-6 pb-6 relative">
                <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 mb-4 gap-6">
                  <div className="relative group">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-slate-900 shadow-md bg-white overflow-hidden relative">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="Portrait of Budi Santoso"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFaXTOCifbg6J0fwplyblmqA88tqyQkV6z-_eHuY4SWDb-SoEDOy-rbqDqHtif2fV20U9wN0_SwK0uoJgXatkRvzoSl8GxfodtmU85JHLIKzQTnK2kwGSslQnu3P46i29lH1J6rhandlIC9fd4w-k2bdbTV0j4bRhrXtg53AX1JWNng0-QwbPAx1eJcNWUUFx3DcJq7sCU5J30uktXW8kISK6hxR2zM1tn3wumSyqoD_iRGl5VAcXb_4kz5l0Mr019UdBkRANAI_k"
                        alt=""
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                        <span className="material-icons text-white text-lg">
                          camera_alt
                        </span>
                      </div>
                    </div>
                    <div
                      className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-4 h-4 md:w-5 md:h-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"
                      title="Online"
                    ></div>
                  </div>

                  <div className="flex-1 pt-2 md:pt-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        {user.fullName}
                      </h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20 self-start md:self-auto">
                        {roleDisplay}
                      </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 text-sm md:text-base">
                      <span className="material-icons-outlined text-sm">
                        school
                      </span>
                      Pengguna
                    </p>
                  </div>

                  <div className="hidden md:block pb-1">
                    {!isEditing ? (
                      <button
                        onClick={() => navigate("/profile/edit")}
                        className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 font-medium text-sm"
                      >
                        <span className="material-icons-outlined text-lg">
                          edit
                        </span>
                        Edit Profil
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={handleSave}
                          disabled={saving}
                          className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 font-medium text-sm"
                        >
                          <span className="material-icons-outlined text-lg">
                            check
                          </span>
                          Simpan
                        </button>
                        <button
                          onClick={handleCancel}
                          disabled={saving}
                          className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 disabled:opacity-50 text-slate-700 dark:text-slate-300 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 font-medium text-sm"
                        >
                          <span className="material-icons-outlined text-lg">
                            close
                          </span>
                          Batal
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Informasi Pribadi
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Nama Lengkap
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      ) : (
                        <div className="text-slate-900 dark:text-white font-medium">
                          {user.fullName}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Email Universitas
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      ) : (
                        <div className="text-slate-900 dark:text-white font-medium flex items-center gap-2">
                          {user.email}
                          <span
                            className="material-icons text-green-500 text-sm"
                            title="Verified"
                          >
                            verified
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Diproduksi
                      </label>
                      <div className="text-slate-900 dark:text-white font-medium">
                        {new Date(user.createdAt).toLocaleDateString("id-ID")}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Peran
                      </label>
                      <div className="text-slate-900 dark:text-white font-medium">
                        {roleDisplay}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:hidden">
                  {!isEditing ? (
                    <button
                      onClick={() => navigate("/profile/edit")}
                      className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 font-medium"
                    >
                      <span className="material-icons-outlined text-lg">
                        edit
                      </span>
                      Edit Profil
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <button
                        onClick={handleSave}
                        disabled={saving}
                        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-3 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 font-medium"
                      >
                        <span className="material-icons-outlined text-lg">
                          check
                        </span>
                        Simpan
                      </button>
                      <button
                        onClick={handleCancel}
                        disabled={saving}
                        className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 disabled:opacity-50 text-slate-700 dark:text-slate-300 px-4 py-3 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 font-medium"
                      >
                        <span className="material-icons-outlined text-lg">
                          close
                        </span>
                        Batal
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined text-slate-400">
                      security
                    </span>
                    Keamanan Akun
                  </h3>
                  <div className="space-y-3">
                    <Link
                      className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
                      to="/profile/security"
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                        Ubah Kata Sandi
                      </span>
                      <span className="material-icons-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                        chevron_right
                      </span>
                    </Link>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                        Autentikasi 2-Faktor
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">Nonaktif</span>
                        <span className="material-icons-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                          chevron_right
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm p-5">
                  <h3 className="text-sm font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined">
                      warning_amber
                    </span>
                    Zona Bahaya
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Keluar dari sesi ini akan mengharuskan Anda untuk login
                    kembali untuk mengakses booking.
                  </p>
                  <button
                    className="w-full bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50 px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium text-sm"
                    onClick={handleLogout}
                    type="button"
                  >
                    <span className="material-icons-outlined text-lg">
                      logout
                    </span>
                    Keluar
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 px-1">
                Aktivitas Terakhir
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <span className="material-icons-outlined text-lg">
                        check_circle
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        Booking Disetujui
                      </p>
                      <p className="text-xs text-slate-500">
                        Ruang Rapat A101 • 12 Oktober 2023
                      </p>
                    </div>
                    <span className="text-xs text-slate-400">
                      2 jam yang lalu
                    </span>
                  </div>
                  <div className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-icons-outlined text-lg">
                        edit
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        Profil Diperbarui
                      </p>
                      <p className="text-xs text-slate-500">
                        Perubahan nomor telepon
                      </p>
                    </div>
                    <span className="text-xs text-slate-400">
                      1 hari yang lalu
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 pb-6 text-center">
              <p className="text-xs text-slate-400">
                Booking Kampus System v2.4.0 © 2023 Universitas Indonesia
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
