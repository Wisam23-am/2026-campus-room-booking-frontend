import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { UserDashboardPage } from "./pages/UserDashboardPage";
import { BookingListPage } from "./pages/BookingListPage";
import { CreateBookingPage } from "./pages/CreateBookingPage";
import { BookingDetailsPage } from "./pages/BookingDetailsPage";
import { RoomSchedulePage } from "./pages/RoomSchedulePage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { AdminApprovalsPage } from "./pages/AdminApprovalsPage";
import { AdminRoomsPage } from "./pages/AdminRoomsPage";
import { ReportsAnalyticsPage } from "./pages/ReportsAnalyticsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { AdminUserManagementPage } from "./pages/AdminUserManagementPage";
import { AdminSystemSettingsPage } from "./pages/AdminSystemSettingsPage";
import { AdminRejectReasonModalPage } from "./pages/AdminRejectReasonModalPage";
import { RoomsListPage } from "./pages/RoomsListPage";
import { ProfileSecurityPage } from "./pages/ProfileSecurityPage";
import { VerifyEmailPage } from "./pages/VerifyEmailPage";
import { AdminLogsPage } from "./pages/AdminLogsPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserLayout } from "./layouts/UserLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { initializeDevMode } from "./utils/devMode";
import "./App.css";

function App() {
  useEffect(() => {
    initializeDevMode();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />

        {/* User Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <UserDashboardPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <BookingListPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/create"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <CreateBookingPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings/create"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <Navigate to="/booking/create" replace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/edit/:id"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <CreateBookingPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/:id"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <BookingDetailsPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings/:id"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <BookingDetailsPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <RoomsListPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/rooms/schedule"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <RoomSchedulePage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <NotificationsPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <UserProfilePage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <UserProfilePage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/security"
          element={
            <ProtectedRoute allowedRoles={[0]}>
              <UserLayout>
                <ProfileSecurityPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        {/* Admin Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminDashboardPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/approvals"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminApprovalsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/rooms"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminRoomsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/rooms/create"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminRoomsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <ReportsAnalyticsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminUserManagementPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users/:id"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminUserManagementPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/logs"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminLogsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/logs/export"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminLogsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminSystemSettingsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reject-modal"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminLayout>
                <AdminRejectReasonModalPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
