import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingService } from "../services/booking.service";
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

  useEffect(() => {
    fetchRecentBookings();
  }, []);

  const fetchRecentBookings = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await bookingService.getBookings({
        pageSize: 5,
      });
      const data = response.data || [];
      setBookings(data);

      // Calculate stats
      const total = data.length;
      const pending = data.filter((b) => b.status === 0).length;
      const upcoming = data.filter(
        (b) => new Date(b.startTime) > new Date(),
      ).length;
      const rejected = data.filter((b) => b.status === 2).length;

      setStats({ total, pending, upcoming, rejected });
    } catch (err: any) {
      setError(err.message || "Failed to fetch bookings");
      console.error("Error fetching bookings:", err);
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
    <div className="p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-300">
            {error}
          </div>
        )}
        <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:text-3xl sm:truncate">
          Admin Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#151f2e] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-icons text-primary">analytics</span>
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
                <span className="material-icons text-orange-500">schedule</span>
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
                                Booking #{booking.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {new Date(booking.startTime).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-slate-500">
                            {new Date(booking.startTime).toLocaleTimeString()} -{" "}
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
    </div>
  );
};
