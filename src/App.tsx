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
          path="/bookings/:id"
          element={
            <ProtectedRoute>
              <BookingDetailsPage />
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
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminSystemSettingsPage />
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
