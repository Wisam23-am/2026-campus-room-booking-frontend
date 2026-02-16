import React from "react";
import { Navigate } from "react-router-dom";
import { authService } from "../services/auth.service";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: (0 | 1)[]; // 0 = User, 1 = Admin
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  // Check authentication
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access
  if (allowedRoles && allowedRoles.length > 0) {
    const currentUser = authService.getCurrentUser();
    const userRole = currentUser?.role;

    if (userRole === undefined || !allowedRoles.includes(userRole)) {
      // Redirect based on user's actual role
      if (userRole === 1) {
        // Admin trying to access user routes -> redirect to admin dashboard
        return <Navigate to="/admin/dashboard" replace />;
      } else {
        // User trying to access admin routes -> redirect to user dashboard
        return <Navigate to="/dashboard" replace />;
      }
    }
  }

  return <>{children}</>;
};
