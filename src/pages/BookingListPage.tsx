import React, { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { bookingService } from '../services/booking.service';
import { RoomBooking, PaginatedResponse } from '../types';

export const BookingListPage: React.FC = () => {
  const [bookings, setBookings] = useState<RoomBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<number | ''>('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadBookings();
  }, [page, search, status]);

  const loadBookings = async () => {
    setLoading(true);
    try {
      const response = await bookingService.getBookings({
        search: search || undefined,
        status: status !== '' ? (status as 0 | 1 | 2) : undefined,
        page,
        pageSize: 10,
      });
      setBookings(response.data);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error('Error loading bookings:', error);
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
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Bookings</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Manage and track your room reservations</p>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            + Create New Booking
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search by room name or who booked..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">All Status</option>
                <option value="0">Pending</option>
                <option value="1">Approved</option>
                <option value="2">Rejected</option>
              </select>
            </div>
            <div>
              <button
                onClick={() => {
                  setSearch('');
                  setStatus('');
                  setPage(1);
                }}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">Loading...</div>
          ) : bookings.length === 0 ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">No bookings found</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                        Room Name
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
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">{booking.roomName}</td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{booking.bookedBy}</td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          {new Date(booking.startTime).toLocaleString()}
                        </td>
                        <td className="px-6 py-4">{getStatusBadge(booking.status)}</td>
                        <td className="px-6 py-4 text-sm space-x-2">
                          <button className="text-blue-600 hover:text-blue-700">View</button>
                          {booking.status === 0 && <button className="text-blue-600 hover:text-blue-700">Edit</button>}
                          {booking.status === 0 && <button className="text-red-600 hover:text-red-700">Delete</button>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
