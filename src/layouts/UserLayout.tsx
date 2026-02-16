import React from "react";
import { MainLayout } from "./MainLayout";
import { authService } from "../services/auth.service";

interface UserLayoutProps {
  children: React.ReactNode;
}

export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const currentUser = authService.getCurrentUser();
  const userName = currentUser?.fullName || "User";

  return (
    <MainLayout userRole="user" userName={userName}>
      {children}
    </MainLayout>
  );
};
