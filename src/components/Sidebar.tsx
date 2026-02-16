import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

interface SidebarProps {
  userRole?: "user" | "admin";
  userName?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  userRole = "user",
  userName = "User",
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  // User Menu Items
  const userMenuItems = [
    { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/bookings", icon: "event_note", label: "My Bookings" },
    { path: "/rooms", icon: "meeting_room", label: "Browse Rooms" },
    { path: "/profile", icon: "person", label: "Profile" },
    { path: "/notifications", icon: "notifications", label: "Notifications" },
  ];

  // Admin Menu Items
  const adminMenuItems = [
    { path: "/admin/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/admin/approvals", icon: "approval", label: "Approvals" },
    { path: "/admin/rooms", icon: "meeting_room", label: "Room Management" },
    { path: "/admin/users", icon: "people", label: "User Management" },
    { path: "/admin/reports", icon: "analytics", label: "Reports" },
    { path: "/admin/logs", icon: "history", label: "Activity Logs" },
    { path: "/admin/settings", icon: "settings", label: "Settings" },
  ];

  const menuItems = userRole === "admin" ? adminMenuItems : userMenuItems;

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen">
      {/* Header/Logo */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          {userRole === "admin" ? "CampusBook Admin" : "CampusBook"}
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {userRole === "admin" ? "Admin Panel" : "Room Booking System"}
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-white"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="material-icons-outlined text-xl">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            {(currentUser?.fullName || userName).charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
              {currentUser?.fullName || userName}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {currentUser?.email || "user@campus.edu"}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <span className="material-icons-outlined text-xl">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
