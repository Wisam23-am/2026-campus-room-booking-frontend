import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { roomService } from "../services/room.service";
import { RoomBooking } from "../types";
import { AdminLayout } from "../components/layouts/AdminLayout";

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
    <AdminLayout headerTitle="Overview">
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Occupancy Rate
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                {stats.occupancyRate}%
              </p>
            </div>
            <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center">
              <span className="material-icons-outlined">pie_chart</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Pending Approvals
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                {stats.pendingApprovals}
              </p>
            </div>
            <div className="h-10 w-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center">
              <span className="material-icons-outlined">hourglass_top</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Completed Bookings
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                {stats.completedBookings}
              </p>
            </div>
            <div className="h-10 w-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
              <span className="material-icons-outlined">task_alt</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Rejection Rate
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                {stats.rejectionRate}%
              </p>
            </div>
            <div className="h-10 w-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center">
              <span className="material-icons-outlined">cancel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-slate-900 dark:text-white">
              Recent Bookings
            </h2>
            <Link
              className="text-sm text-primary hover:underline"
              to="/admin/approvals"
            >
              View all
            </Link>
          </div>

          {loading ? (
            <div className="text-sm text-slate-500">Loading...</div>
          ) : recentBookings.length === 0 ? (
            <div className="text-sm text-slate-500">No recent bookings.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Room
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Booked By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {recentBookings.map((booking) => (
                    <tr
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      key={booking.id}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {booking.roomName}
                        </div>
                        <div className="text-xs text-slate-500">
                          {booking.purpose || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-700 dark:text-slate-300">
                          {booking.bookedBy}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {new Date(booking.startTime).toLocaleDateString()}, {""}
                        {new Date(booking.startTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
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
    </AdminLayout>
  );
};
