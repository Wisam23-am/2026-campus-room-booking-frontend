import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  userRole?: 'user' | 'admin';
  userName?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ userRole = 'user', userName = 'User' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const userMenuItems = [
    { icon: '📊', label: 'Dashboard', href: '/dashboard' },
    { icon: '📋', label: 'My Bookings', href: '/bookings' },
    { icon: '🔍', label: 'Room Search', href: '/room-search' },
    { icon: '📅', label: 'Calendar', href: '/calendar' },
  ];

  const adminMenuItems = [
    { icon: '📊', label: 'Dashboard', href: '/admin/dashboard' },
    { icon: '✅', label: 'Approvals', href: '/admin/approvals' },
    { icon: '🏛️', label: 'Rooms', href: '/admin/rooms' },
    { icon: '👥', label: 'Users', href: '/admin/users' },
    { icon: '📈', label: 'Reports', href: '/admin/reports' },
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : userMenuItems;

  const handleNavigate = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col transform transition-transform md:translate-x-0 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-700">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center mr-3 text-white text-xl">
            🎓
          </div>
          <span className="text-lg font-bold text-slate-800 dark:text-white">
            Campus<span className="text-blue-600">Book</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-6 space-y-1 px-3">
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item.href)}
              className="w-full flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-600 rounded-lg group transition-colors text-left"
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}

          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-2">Account</p>
          <button className="w-full flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-600 rounded-lg group transition-colors text-left">
            <span className="mr-3 text-xl">👤</span>
            <span className="font-medium text-sm">Profile</span>
          </button>
          <button className="w-full flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-600 rounded-lg group transition-colors text-left">
            <span className="mr-3 text-xl">⚙️</span>
            <span className="font-medium text-sm">Settings</span>
          </button>
        </nav>

        {/* User Mini Profile Bottom */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <img
              alt="User Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-600/20"
              src="https://via.placeholder.com/48"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">{userName}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{userRole}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 rounded-lg transition-colors text-sm font-medium flex items-center justify-center"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30" onClick={() => setIsOpen(false)} />}
    </>
  );
};
