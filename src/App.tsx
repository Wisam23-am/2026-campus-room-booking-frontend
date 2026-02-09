import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UserDashboardPage } from './pages/UserDashboardPage';
import { BookingListPage } from './pages/BookingListPage';
import { CreateBookingPage } from './pages/CreateBookingPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminApprovalsPage } from './pages/AdminApprovalsPage';
import { AdminRoomsPage } from './pages/AdminRoomsPage';
import './App.css';

function App() {
  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole') || 'user';

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* User Routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <UserDashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/bookings"
          element={isAuthenticated ? <BookingListPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/bookings/create"
          element={isAuthenticated ? <CreateBookingPage /> : <Navigate to="/login" />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={isAuthenticated && userRole === 'admin' ? <AdminDashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/approvals"
          element={isAuthenticated && userRole === 'admin' ? <AdminApprovalsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/rooms"
          element={isAuthenticated && userRole === 'admin' ? <AdminRoomsPage /> : <Navigate to="/login" />}
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
