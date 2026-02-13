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
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/bookings" element={<BookingListPage />} />
        <Route path="/bookings/create" element={<CreateBookingPage />} />
        <Route path="/bookings/details" element={<BookingDetailsPage />} />
        <Route path="/rooms/schedule" element={<RoomSchedulePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/approvals" element={<AdminApprovalsPage />} />
        <Route path="/admin/rooms" element={<AdminRoomsPage />} />
        <Route path="/admin/reports" element={<ReportsAnalyticsPage />} />
        <Route path="/admin/users" element={<AdminUserManagementPage />} />
        <Route path="/admin/settings" element={<AdminSystemSettingsPage />} />
        <Route
          path="/admin/reject-modal"
          element={<AdminRejectReasonModalPage />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
