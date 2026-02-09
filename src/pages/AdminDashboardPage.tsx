import React, { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { bookingService } from '../services/booking.service';
import { RoomBooking, PaginatedResponse } from '../types';

export const AdminDashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });
  const [recentBookings, setRecentBookings] = useState<RoomBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const response = await bookingService.getBookings({ pageSize: 5 });
      setRecentBookings(response.data);

      const allBookings = response.data;
      setStats({
        total: response.totalCount,
        pending: allBookings.filter((b) => b.status === 0).length,
        approved: allBookings.filter((b) => b.status === 1).length,
        rejected: allBookings.filter((b) => b.status === 2).length,
      });
    } catch (error) {
      console.error('Error loading admin dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: number) => {
    const statusMap: Record<number, { label: string; color: string }> = {
      0: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
      1: { label: 'Approved', color: 'bg-green-100 text-green-800' },
      2: { label: 'Rejected', color: 'bg-red-100 text-red-800' },
    };
    const s = statusMap[status];
    return <span className={`px-2 py-1 rounded text-xs font-semibold ${s.color}`}>{s.label}</span>;
  };

  return (
    <MainLayout userName="Admin Staff" userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Overview of all room bookings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Bookings', value: stats.total, icon: '📋', color: 'bg-blue-100 dark:bg-blue-900/30' },
            { label: 'Pending', value: stats.pending, icon: '⏳', color: 'bg-yellow-100 dark:bg-yellow-900/30' },
            { label: 'Approved', value: stats.approved, icon: '✅', color: 'bg-green-100 dark:bg-green-900/30' },
            { label: 'Rejected', value: stats.rejected, icon: '❌', color: 'bg-red-100 dark:bg-red-900/30' },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.color} rounded-lg p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{stat.value}</p>
                </div>
                <span className="text-4xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Bookings</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                      Room
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                      Booked By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{booking.roomName}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{booking.bookedBy}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                        {new Date(booking.startTime).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(booking.status)}</td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <button className="text-blue-600 hover:text-blue-700">Review</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
