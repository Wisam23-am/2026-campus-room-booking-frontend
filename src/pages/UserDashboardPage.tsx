import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { authService } from "../services/auth.service";
import { RoomBooking } from "../types";

export const UserDashboardPage: React.FC = () => {
  const [bookings, setBookings] = useState<RoomBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    upcoming: 0,
    rejected: 0,
  });
  const currentUser = authService.getCurrentUser();

  useEffect(() => {
    fetchRecentBookings();
  }, []);

  const fetchRecentBookings = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await bookingService.getBookings({
        take: 5,
        userId: currentUser?.id,
      });
      const data = response.data || [];
      setBookings(data);

      // Calculate stats
      const total = data.length;
      const pending = data.filter((b) => b.status === "Pending").length;
      const upcoming = data.filter((b) => new Date(b.startTime) > new Date())
        .length;
      const rejected = data.filter((b) => b.status === "Rejected").length;

      setStats({ total, pending, upcoming, rejected });
    } catch (err: any) {
      setError(err.message || "Failed to fetch bookings");
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800/50";
      case "Approved":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800/50";
      case "Rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800/50";
      case "Completed":
        return "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500";
      case "Approved":
        return "bg-green-500";
      case "Rejected":
        return "bg-red-500";
      case "Completed":
        return "bg-slate-400";
      default:
        return "bg-slate-400";
    }
  };
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-200 antialiased h-screen flex overflow-hidden">
      <aside className="w-64 bg-white dark:bg-[#151f2e] border-r border-slate-200 dark:border-slate-800 hidden md:flex md:flex-col z-20 shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800/50">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center mr-3 shrink-0">
            <span className="material-icons text-white text-xl">school</span>
          </div>
          <span className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
            Campus<span className="text-primary">Book</span>
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 space-y-1 px-3">
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Main Menu
          </p>
          <Link
            className="flex items-center px-3 py-2.5 bg-primary/10 text-primary rounded-lg group transition-colors"
            to="/dashboard"
          >
            <span className="material-icons mr-3 text-xl">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </Link>
          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/bookings"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              event_note
            </span>
            <span className="font-medium text-sm">My Bookings</span>
          </Link>
          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/rooms/schedule"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              search
            </span>
            <span className="font-medium text-sm">Room Search</span>
          </Link>
          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/rooms/schedule"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              calendar_month
            </span>
            <span className="font-medium text-sm">Calendar</span>
          </Link>
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-2">
            Account
          </p>
          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/profile"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              person
            </span>
            <span className="font-medium text-sm">Profile</span>
          </Link>
          <Link
            className="flex items-center px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary rounded-lg group transition-colors"
            to="/profile"
          >
            <span className="material-icons mr-3 text-xl group-hover:text-primary transition-colors">
              settings
            </span>
            <span className="font-medium text-sm">Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-3">
            <img
              alt="User Profile Picture"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20"
              data-alt="Portrait of a male student"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUp6CwKtBq3cvASTt22vHmO3rQtwuPw-NeSmtGVRCyMqInP-WkS4HUd71rv7RvRE0JQS7rMWO6sVKKSt8snOGQ315QWY3kEI7YfBDA9eg3fl1szasHzCcAAqKEsEkJsrkdZfOQc2Ot8Zi2pCKz_qdA5qiVzhlrL6bJZpKrpxko7yUtRnP0_H6xOYLXUAIEOzgAen5Manj63Qs9qiy-hnxbtVhmLKK-7X3lAfhz4Po3FO22MF8yRdICigOE5BLT0B3Xm227gc8YeXQ"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                Alex Johnson
              </p>
              <p className="text-xs text-slate-500 truncate">
                Computer Science
              </p>
            </div>
            <Link
              aria-label="Logout"
              className="text-slate-400 hover:text-primary"
              to="/login"
            >
              <span className="material-icons text-xl">logout</span>
            </Link>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <header className="h-16 bg-white dark:bg-[#151f2e] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 z-10">
          <button className="md:hidden mr-4 text-slate-500 hover:text-primary">
            <span className="material-icons">menu</span>
          </button>
          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-bold text-slate-800 dark:text-white hidden sm:block">
              Welcome back, Alex
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64">
              <span className="material-icons text-slate-400 text-lg mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full focus:ring-0 p-0"
                placeholder="Search rooms..."
                type="text"
              />
            </div>
            <Link
              aria-label="Notifications"
              className="relative p-2 text-slate-500 hover:text-primary transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
              to="/notifications"
            >
              <span className="material-icons">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#151f2e]"></span>
            </Link>
            <Link
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
              to="/bookings/create"
            >
              <span className="material-icons text-lg mr-1.5">add</span>
              <span>New Booking</span>
            </Link>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-8">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-300">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-[#151f2e] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-icons text-primary">
                      analytics
                    </span>
                  </div>
                </div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Total Bookings
                </h3>
                <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
                  {loading ? "..." : stats.total}
                </p>
              </div>
              <div className="bg-white dark:bg-[#151f2e] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                    <span className="material-icons text-orange-500">
                      schedule
                    </span>
                  </div>
                </div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Pending Approval
                </h3>
                <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
                  {loading ? "..." : stats.pending}
                </p>
              </div>
              <div className="bg-white dark:bg-[#151f2e] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <span className="material-icons text-primary">
                      event_available
                    </span>
                  </div>
                </div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium relative z-10">
                  Upcoming
                </h3>
                <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1 relative z-10">
                  {loading ? "..." : stats.upcoming}
                </p>
              </div>
              <div className="bg-white dark:bg-[#151f2e] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <span className="material-icons text-red-500">cancel</span>
                  </div>
                </div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Rejected
                </h3>
                <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
                  {loading ? "..." : stats.rejected}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white dark:bg-[#151f2e] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                <div className="p-5 border-b border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                    Recent Bookings
                  </h2>
                  <Link
                    className="text-primary hover:text-primary-dark text-sm font-medium flex items-center"
                    to="/bookings"
                  >
                    View all{" "}
                    <span className="material-icons text-base ml-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
                {loading ? (
                  <div className="p-8 text-center">
                    <div className="w-8 h-8 border-4 border-slate-200 dark:border-slate-700 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 dark:text-slate-400">
                      Loading bookings...
                    </p>
                  </div>
                ) : bookings.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-icons text-slate-300 text-3xl">
                        event_busy
                      </span>
                    </div>
                    <h3 className="text-slate-800 dark:text-white font-medium">
                      No bookings found
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      Get started by creating your first room reservation.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800/50">
                          <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Room Info
                          </th>
                          <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Date &amp; Time
                          </th>
                          <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Purpose
                          </th>
                          <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                            Status
                          </th>
                          <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        {bookings.map((booking) => (
                          <tr
                            key={booking.id}
                            className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                          >
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                                  <span className="material-icons text-indigo-500 text-lg">
                                    meeting_room
                                  </span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                    {booking.roomName || "Room"}
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    {booking.roomId}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <p className="text-sm text-slate-700 dark:text-slate-300">
                                {new Date(booking.startTime).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-slate-500">
                                {new Date(
                                  booking.startTime
                                ).toLocaleTimeString()}{" "}
                                -{" "}
                                {new Date(booking.endTime).toLocaleTimeString()}
                              </p>
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                {booking.purpose || "-"}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                  booking.status
                                )}`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(
                                    booking.status
                                  )} mr-1.5`}
                                ></span>
                                {booking.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <Link
                                to={`/bookings/${booking.id}`}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <span className="material-icons text-xl">
                                  more_vert
                                </span>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  </div>
                )}
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white shadow-lg shadow-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <h3 className="font-bold text-lg relative z-10 mb-1">
                    Need a room now?
                  </h3>
                  <p className="text-blue-100 text-sm mb-4 relative z-10">
                    Study Room C is available for the next 2 hours.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="bg-white text-primary p-2 rounded-lg">
                        <span className="material-icons text-xl">bolt</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Study Room C</p>
                        <p className="text-xs text-blue-100">
                          Capacity: 4 • Library
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-white text-primary hover:bg-blue-50 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm relative z-10">
                    Book Instantly
                  </button>
                </div>
                <div className="bg-white dark:bg-[#151f2e] rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                      October 2023
                    </h3>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                        <span className="material-icons text-base text-slate-500">
                          chevron_left
                        </span>
                      </button>
                      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                        <span className="material-icons text-base text-slate-500">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-slate-400 font-medium">
                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    <span className="p-1.5 text-slate-300">29</span>
                    <span className="p-1.5 text-slate-300">30</span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      1
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      2
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      3
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      4
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      5
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      6
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      7
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      8
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      9
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      10
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      11
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      12
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      13
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      14
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      15
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      16
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      17
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      18
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      19
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      20
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      21
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      22
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      23
                    </span>
                    <span className="p-1.5 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100 rounded-full font-bold cursor-pointer relative">
                      24
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full border border-white"></span>
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      25
                    </span>
                    <span className="p-1.5 bg-primary text-white rounded-lg shadow-md shadow-primary/30 font-bold cursor-pointer">
                      26
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      27
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      28
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      29
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      30
                    </span>
                    <span className="p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded cursor-pointer">
                      31
                    </span>
                    <span className="p-1.5 text-slate-300">1</span>
                    <span className="p-1.5 text-slate-300">2</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2 justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                    Approved
                    <span className="w-2 h-2 rounded-full bg-orange-500 ml-2"></span>{" "}
                    Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="mt-12 text-center text-xs text-slate-400 pb-4">
            <p>(c) 2023 Campus Room Booking System. All rights reserved.</p>
          </footer>
        </main>
      </div>
      <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-primary-dark transition-colors">
        <span className="material-icons text-2xl">add</span>
      </button>
    </div>
  );
};
