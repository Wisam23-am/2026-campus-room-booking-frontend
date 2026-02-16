import React from "react";
import { Link } from "react-router-dom";

type AdminLayoutProps = {
  children: React.ReactNode;
  headerTitle?: string;
};

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  headerTitle = "Overview",
}) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen flex flex-col md:flex-row antialiased overflow-hidden">
      <aside className="w-full md:w-64 bg-white dark:bg-[#151f2b] border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col z-20 flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800/50">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mr-3 text-white">
            <span className="material-icons-round text-xl">school</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
            CampusSpace
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar py-6 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Main Menu
          </div>

          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/dashboard"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              dashboard
            </span>
            <span>Dashboard</span>
          </Link>

          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/approvals"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              calendar_month
            </span>
            <span>Bookings</span>
          </Link>

          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/rooms"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              meeting_room
            </span>
            <span>Rooms</span>
          </Link>

          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/users"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              people
            </span>
            <span>Users</span>
          </Link>

          <div className="px-3 mt-8 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Administration
          </div>

          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/reports"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              assessment
            </span>
            <span>Reports</span>
          </Link>

          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/logs"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              article
            </span>
            <span>Logs</span>
          </Link>

          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/settings"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              settings
            </span>
            <span>Settings</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-3">
            <Link to="/profile" aria-label="Profile">
              <img
                alt="Administrator profile"
                className="h-10 w-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                data-alt="Profile picture of an administrator"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6cce0AuMviIi8ITIHeKkgqf70oFreYvKP6Umfnwi9SMAAXrnuBgGeEMHxpVSL7dpNmlpRkQX-M0NbWAalxqAJ-edaDUtBFJuSumy0Bg7OwmgQYqeyDTrivNIBX4ZMtzssaNGgH-XSpKbN2nlXlNI0bMWobzs9UWSIOA_hNj8op3FM8ClQiPxVU9bppoy2SYRGv1Z-ILl4pWpbVGL5vgHuw1Jrj_aFN-397wKfZGVSF8VZh1kr91HfUZEPM1TkPY40lFINXnImq8"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-slate-500 truncate">
                admin@campus.edu
              </p>
            </div>
            <Link
              aria-label="Logout"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              to="/login"
            >
              <span className="material-icons-outlined text-xl">logout</span>
            </Link>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-white dark:bg-[#151f2b] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 flex-shrink-0">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white hidden md:block">
            {headerTitle}
          </h1>
          <div className="flex items-center gap-4 flex-1 md:flex-none justify-end md:justify-start">
            <div className="relative w-full max-w-md hidden md:block">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons-outlined text-[20px]">
                  search
                </span>
              </span>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                placeholder="Search bookings, rooms, or users..."
                type="text"
              />
            </div>
            <Link
              aria-label="Notifications"
              className="relative p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
              to="/notifications"
            >
              <span className="material-icons-outlined">notifications</span>
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#151f2b]"></span>
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-8 space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
};
