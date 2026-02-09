import React, { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { bookingService } from '../services/booking.service';
import { RoomBooking } from '../types';

export const AdminApprovalsPage: React.FC = () => {
  const [bookings, setBookings] = useState<RoomBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [rejectionReason, setRejectionReason] = useState<{ [key: number]: string }>({});
  const [showRejectModal, setShowRejectModal] = useState<number | null>(null);

  useEffect(() => {
    loadPendingBookings();
  }, []);

  const loadPendingBookings = async () => {
    setLoading(true);
    try {
      const response = await bookingService.getBookings({ status: 0, pageSize: 50 });
      setBookings(response.data);
    } catch (error) {
      console.error('Error loading pending bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: number) => {
    setActionLoading(id);
    try {
      await bookingService.updateBooking(id, { status: 1 });
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (error) {
      console.error('Error approving booking:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id: number) => {
    setActionLoading(id);
    try {
      await bookingService.updateBooking(id, { status: 2 });
      setBookings(bookings.filter((b) => b.id !== id));
      setShowRejectModal(null);
    } catch (error) {
      console.error('Error rejecting booking:', error);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <MainLayout userName="Admin Staff" userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Approval Queue</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {bookings.length} pending approval{bookings.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Pending Bookings */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">Loading...</div>
          ) : bookings.length === 0 ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">No pending approvals. All bookings have been reviewed!</div>
          ) : (
            <div className="space-y-4 p-6">
              {bookings.map((booking) => (
                <div key={booking.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{booking.roomName}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Booked by: <strong>{booking.bookedBy}</strong>
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {new Date(booking.startTime).toLocaleString()} - {new Date(booking.endTime).toLocaleTimeString()}
                      </p>
                      {booking.purpose && <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Purpose: {booking.purpose}</p>}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(booking.id)}
                        disabled={actionLoading === booking.id}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {actionLoading === booking.id ? 'Approving...' : '✅ Approve'}
                      </button>
                      <button
                        onClick={() => setShowRejectModal(booking.id)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        ❌ Reject
                      </button>
                    </div>
                  </div>

                  {/* Rejection Modal */}
                  {showRejectModal === booking.id && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Reason for rejection:
                      </label>
                      <textarea
                        value={rejectionReason[booking.id] || ''}
                        onChange={(e) => setRejectionReason({ ...rejectionReason, [booking.id]: e.target.value })}
                        placeholder="Enter reason for rejection..."
                        rows={2}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 mb-3"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleReject(booking.id)}
                          disabled={actionLoading === booking.id}
                          className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
                        >
                          {actionLoading === booking.id ? 'Rejecting...' : 'Confirm Rejection'}
                        </button>
                        <button
                          onClick={() => setShowRejectModal(null)}
                          className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
