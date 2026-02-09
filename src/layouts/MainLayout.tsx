import React from 'react';
import { Sidebar } from '../components/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  userRole?: 'user' | 'admin';
  userName?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, userRole = 'user', userName = 'User' }) => {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      <Sidebar userRole={userRole} userName={userName} />
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
};
