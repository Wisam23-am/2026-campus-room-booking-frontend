import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { roomService } from "../services/room.service";
import { RoomBooking } from "../types";

export const AdminDashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    occupancyRate: 0,
    pendingApprovals: 0,
    completedBookings: 0,
    rejectionRate: 0,
  });
  const [recentBookings, setRecentBookings] = useState<RoomBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all bookings and rooms in parallel
      const [bookingsRes, roomsRes] = await Promise.all([
        bookingService.getBookings({}),
        roomService.getRooms({}),
      ]);

      const allBookings = bookingsRes.data || [];
      const allRooms = roomsRes.data || [];

      // Calculate stats
      const pending = allBookings.filter((b) => b.status === 0).length;
      const completed = allBookings.filter((b) => b.status === 1).length;
      const rejected = allBookings.filter((b) => b.status === 2).length;
      const total = allBookings.length;
      const rejectionRate = total > 0 ? (rejected / total) * 100 : 0;

      // Calculate occupancy rate (booked rooms / total rooms * 100)
      const bookedRoomNames = new Set(
        allBookings
          .filter((b) => b.status === 1)
          .map((b) => b.roomName)
          .filter((name) => Boolean(name)),
      );
      const occupancyRate =
        allRooms.length > 0
          ? (bookedRoomNames.size / allRooms.length) * 100
          : 0;

      setStats({
        occupancyRate: Number(occupancyRate.toFixed(1)),
        pendingApprovals: pending,
        completedBookings: completed,
        rejectionRate: Number(rejectionRate.toFixed(1)),
      });

      // Get recent completed bookings (limit 5)
      const recent = allBookings
        .filter((b) => b.status === 1)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .slice(0, 5);
      setRecentBookings(recent);
    } catch (err: any) {
      setError(err.message || "Failed to fetch dashboard data");
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: 0 | 1 | 2) => {
    switch (status) {
      case 0:
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800/50";
      case 1:
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800/50";
      case 2:
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800/50";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getStatusDotColor = (status: 0 | 1 | 2) => {
    switch (status) {
      case 0:
        return "bg-orange-500";
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-red-500";
      default:
        return "bg-slate-400";
    }
  };

  const getStatusLabel = (status: 0 | 1 | 2) => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "Approved";
      case 2:
        return "Rejected";
      default:
        return "Unknown";
    }
  };
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen flex flex-col md:flex-row antialiased overflow-hidden">
      <aside className="w-full md:w-64 bg-white dark:bg-[#151f2b] border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col z-20 flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800/50">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mr-3 text-white">
            <span className="material-icons-round text-xl">school</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
            CampusSpace
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto custom-scrollbar py-6 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Main Menu
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary font-medium rounded-lg"
            to="/admin/dashboard"
          >
            <span className="material-icons-outlined text-[20px]">
              dashboard
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/approvals"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              calendar_month
            </span>
            <span>Bookings</span>
            <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              14
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/rooms"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              meeting_room
            </span>
            <span>Rooms</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/users"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              people
            </span>
            <span>Users</span>
          </Link>
          <div className="px-3 mt-8 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Administration
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/reports"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              assessment
            </span>
            <span>Reports</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/settings"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              settings
            </span>
            <span>Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-3">
            <div aria-label="Profile">
              <img
                alt="Administrator profile"
                className="h-10 w-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                data-alt="Profile picture of an administrator"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6cce0AuMviIi8ITIHeKkgqf70oFreYvKP6Umfnwi9SMAAXrnuBgGeEMHxpVSL7dpNmlpRkQX-M0NbWAalxqAJ-edaDUtBFJuSumy0Bg7OwmgQYqeyDTrivNIBX4ZMtzssaNGgH-XSpKbN2nlXlNI0bMWobzs9UWSIOA_hNj8op3FM8ClQiPxVU9bppoy2SYRGv1Z-ILl4pWpbVGL5vgHuw1Jrj_aFN-397wKfZGVSF8VZh1kr91HfUZEPM1TkPY40lFINXnImq8"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-slate-500 truncate">
                admin@campus.edu
              </p>
            </div>
            <Link
              aria-label="Logout"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              to="/login"
            >
              <span className="material-icons-outlined text-xl">logout</span>
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-white dark:bg-[#151f2b] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 flex-shrink-0">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white hidden md:block">
            Overview
          </h1>
          <div className="flex items-center gap-4 flex-1 md:flex-none justify-end md:justify-start">
            <div className="relative w-full max-w-md hidden md:block">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons-outlined text-[20px]">
                  search
                </span>
              </span>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                placeholder="Search bookings, rooms, or users..."
                type="text"
              />
            </div>
            <button
              aria-label="Notifications"
              className="relative p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
              onClick={() => {}}
            >
              <span className="material-icons-outlined">notifications</span>
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#151f2b]"></span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-8 space-y-6">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-300">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Occupancy Rate
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {loading ? "..." : `${stats.occupancyRate.toFixed(1)}%`}
                  </h3>
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                  <span className="material-icons-outlined text-xl">
                    trending_up
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Rooms in use
              </p>
            </div>
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Pending Approvals
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {loading ? "..." : stats.pendingApprovals}
                  </h3>
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-500">
                  <span className="material-icons-outlined text-xl">
                    hourglass_empty
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Waiting for review
              </p>
            </div>
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Completed Bookings
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {loading ? "..." : stats.completedBookings}
                  </h3>
                </div>
                <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-500">
                  <span className="material-icons-outlined text-xl">
                    check_circle
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Successfully completed
              </p>
            </div>
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Rejection Rate
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {loading ? "..." : `${stats.rejectionRate.toFixed(1)}%`}
                  </h3>
                </div>
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-500">
                  <span className="material-icons-outlined text-xl">
                    cancel
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Denied requests
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <h2 className="font-bold text-slate-900 dark:text-white">
                  Recent Approved Bookings
                </h2>
                <Link
                  className="text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                  to="/admin/approvals"
                >
                  View All
                </Link>
              </div>
              {loading ? (
                <div className="p-8 text-center">
                  <div className="w-8 h-8 border-4 border-slate-200 dark:border-slate-700 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-500 dark:text-slate-400">
                    Loading bookings...
                  </p>
                </div>
              ) : recentBookings.length === 0 ? (
                <div className="p-8 text-center">
                  <span className="material-icons text-slate-300 text-3xl block mb-2">
                    event_busy
                  </span>
                  <p className="text-slate-500">No recent bookings</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase text-xs tracking-wider font-semibold">
                      <tr>
                        <th className="px-6 py-3">User</th>
                        <th className="px-6 py-3">Room &amp; Purpose</th>
                        <th className="px-6 py-3">Date & Time</th>
                        <th className="px-6 py-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {recentBookings.map((booking) => (
                        <tr
                          key={booking.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold mr-3">
                                {booking.bookedBy.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-medium text-slate-900 dark:text-white">
                                  {booking.bookedBy}
                                </div>
                                <div className="text-xs text-slate-500">
                                  Booking #{booking.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-medium text-slate-900 dark:text-white">
                              {booking.roomName || "Room"}
                            </div>
                            <div className="text-xs text-slate-500">
                              {booking.purpose || "-"}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                            {new Date(booking.startTime).toLocaleDateString()},{" "}
                            {new Date(booking.startTime).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                booking.status,
                              )}`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(
                                  booking.status,
                                )} mr-1.5`}
                              ></span>
                              {getStatusLabel(booking.status)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
              <h2 className="font-bold text-slate-900 dark:text-white mb-6">
                Top 5 Spaces
              </h2>
              <div className="space-y-5 flex-1">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Lecture Hall A
                    </span>
                    <span className="text-slate-500">92% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Study Room 4B
                    </span>
                    <span className="text-slate-500">85% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/80 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Conf Room B
                    </span>
                    <span className="text-slate-500">74% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/60 h-2 rounded-full"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Innovation Lab
                    </span>
                    <span className="text-slate-500">60% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/40 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Media Center
                    </span>
                    <span className="text-slate-500">45% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/20 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/dashboard"
            >
              <div className="h-10 w-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">build</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Maintenance
                </h4>
                <p className="text-xs text-slate-500">Create ticket</p>
              </div>
            </Link>
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/rooms"
            >
              <div className="h-10 w-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">block</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Block Room
                </h4>
                <p className="text-xs text-slate-500">Restrict access</p>
              </div>
            </Link>
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/reports"
            >
              <div className="h-10 w-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">description</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Weekly Report
                </h4>
                <p className="text-xs text-slate-500">Download PDF</p>
              </div>
            </Link>
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/users"
            >
              <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">person_add</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Add User
                </h4>
                <p className="text-xs text-slate-500">New faculty/staff</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
