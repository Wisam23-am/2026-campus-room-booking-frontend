import React from "react";
import { MainLayout } from "./MainLayout";
import { authService } from "../services/auth.service";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const currentUser = authService.getCurrentUser();
  const userName = currentUser?.fullName || "Admin";

  return (
    <MainLayout userRole="admin" userName={userName}>
      {children}
    </MainLayout>
  );
};
