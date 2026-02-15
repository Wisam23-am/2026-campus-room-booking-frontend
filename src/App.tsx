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

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <BookingListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/create"
          element={
            <ProtectedRoute>
              <CreateBookingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings/create"
          element={
            <ProtectedRoute>
              <Navigate to="/booking/create" replace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/edit/:id"
          element={
            <ProtectedRoute>
              <CreateBookingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/:id"
          element={
            <ProtectedRoute>
              <BookingDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings/:id"
          element={
            <ProtectedRoute>
              <BookingDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <RoomsListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rooms/schedule"
          element={
            <ProtectedRoute>
              <RoomSchedulePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <NotificationsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/security"
          element={
            <ProtectedRoute>
              <ProfileSecurityPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/approvals"
          element={
            <ProtectedRoute>
              <AdminApprovalsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/rooms"
          element={
            <ProtectedRoute>
              <AdminRoomsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/rooms/create"
          element={
            <ProtectedRoute>
              <AdminRoomsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute>
              <ReportsAnalyticsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminUserManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users/:id"
          element={
            <ProtectedRoute>
              <AdminUserManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/logs"
          element={
            <ProtectedRoute>
              <AdminLogsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/logs/export"
          element={
            <ProtectedRoute>
              <AdminLogsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminSystemSettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reject-modal"
          element={
            <ProtectedRoute>
              <AdminRejectReasonModalPage />
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
