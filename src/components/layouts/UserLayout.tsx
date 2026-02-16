import React from "react";
import { Link } from "react-router-dom";

type UserLayoutProps = {
  children: React.ReactNode;
  headerTitle?: string;
};

export const UserLayout: React.FC<UserLayoutProps> = ({
  children,
  headerTitle = "Campus Room Booking",
}) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-200 antialiased h-screen flex overflow-hidden">
      <aside className="w-64 bg-white dark:bg-[#151f2e] border-r border-slate-200 dark:border-slate-800 hidden md:flex md:flex-col z-20 shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800/50">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center mr-3 shrink-0">
            <span className="material-icons text-white text-xl">school</span>
          </div>
          <span className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
            Campus<span className="text-primary">Book</span>
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 space-y-1 px-3">
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Main Menu
          </p>

          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/dashboard"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              dashboard
            </span>
            <span className="font-medium text-sm">Dashboard</span>
          </Link>

          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/bookings"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              event_note
            </span>
            <span className="font-medium text-sm">My Bookings</span>
          </Link>

          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/rooms"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              search
            </span>
            <span className="font-medium text-sm">Room Search</span>
          </Link>

          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/rooms/schedule"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              calendar_month
            </span>
            <span className="font-medium text-sm">Calendar</span>
          </Link>

          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-2">
            Account
          </p>

          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/profile"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              person
            </span>
            <span className="font-medium text-sm">Profile</span>
          </Link>

          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/profile/security"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              settings
            </span>
            <span className="font-medium text-sm">Security</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-3">
            <img
              alt="User profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20"
              data-alt="Portrait of a male student"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUp6CwKtBq3cvASTt22vHmO3rQtwuPw-NeSmtGVRCyMqInP-WkS4HUd71rv7RvRE0JQS7rMWO6sVKKSt8snOGQ315QWY3kEI7YfBDA9eg3fl1szasHzCcAAqKEsEkJsrkdZfOQc2Ot8Zi2pCKz_qdA5qiVzhlrL6bJZpKrpxko7yUtRnP0_H6xOYLXUAIEOzgAen5Manj63Qs9qiy-hnxbtVhmLKK-7X3lAfhz4Po3FO22MF8yRdICigOE5BLT0B3Xm227gc8YeXQ"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                Alex Johnson
              </p>
              <p className="text-xs text-slate-500 truncate">
                Computer Science
              </p>
            </div>
            <Link
              aria-label="Logout"
              className="text-slate-400 hover:text-primary"
              to="/login"
            >
              <span className="material-icons text-xl">logout</span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <header className="h-16 bg-white dark:bg-[#151f2e] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 z-10">
          <button className="md:hidden mr-4 text-slate-500 hover:text-primary">
            <span className="material-icons">menu</span>
          </button>
          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-bold text-slate-800 dark:text-white hidden sm:block">
              {headerTitle}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64">
              <span className="material-icons text-slate-400 text-lg mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full focus:ring-0 p-0"
                placeholder="Search rooms..."
                type="text"
              />
            </div>
            <Link
              aria-label="Notifications"
              className="relative p-2 text-slate-500 hover:text-primary transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
              to="/notifications"
            >
              <span className="material-icons">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#151f2e]"></span>
            </Link>
            <Link
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
              to="/booking/create"
            >
              <span className="material-icons text-lg mr-1.5">add</span>
              <span>New Booking</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );
};
