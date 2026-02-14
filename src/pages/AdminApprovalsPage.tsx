import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { RoomBooking } from "../types";

export const AdminApprovalsPage: React.FC = () => {
  const [bookings, setBookings] = useState<RoomBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<number | null>(
    null,
  );
  const [rejectionReason, setRejectionReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Fetch pending bookings on mount
  useEffect(() => {
    const fetchPendingBookings = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await bookingService.getBookings({ status: 0 });
        setBookings(response.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch bookings",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPendingBookings();
  }, []);

  const handleApprove = async (id: number) => {
    try {
      setSubmitting(true);
      await bookingService.updateBooking(id, { status: 1 });
      // Remove from list
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to approve booking",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleRejectClick = (id: number) => {
    setSelectedBookingId(id);
    setRejectionReason("");
    setShowRejectModal(true);
  };

  const handleConfirmReject = async () => {
    if (!selectedBookingId || !rejectionReason.trim()) {
      setError("Please provide a reason for rejection");
      return;
    }

    try {
      setSubmitting(true);
      await bookingService.updateBooking(selectedBookingId, { status: 2 });
      // Remove from list
      setBookings(bookings.filter((b) => b.id !== selectedBookingId));
      setShowRejectModal(false);
      setSelectedBookingId(null);
      setRejectionReason("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reject booking");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancelReject = () => {
    setShowRejectModal(false);
    setSelectedBookingId(null);
    setRejectionReason("");
  };

  const selectedBooking = bookings.find((b) => b.id === selectedBookingId);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getTimeDuration = (startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    return `${diff.toFixed(1)}h`;
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen flex flex-col">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                CB
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                CampusBook Admin
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                aria-label="Notifications"
                className="p-2 text-slate-500 hover:text-primary transition-colors relative"
                to="/notifications"
              >
                <span className="material-icons">notifications</span>
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
              </Link>
              <div className="flex items-center gap-2">
                <Link to="/profile" aria-label="Profile">
                  <img
                    alt="Admin Profile"
                    className="h-8 w-8 rounded-full"
                    data-alt="Admin user avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5i78g5hSU2uL5Fy8QwqkoXO6lWwdRpAPW9WyvsZlgFovtGXJSTIuzuLs0Vo9WH60X_y2qxaVsugJHktErPTil1f8wSeHDDsh9rihFd79R2qcq7I7o4TaE-NUERlJeBqzMtJh7wv8Q1bzu7oCsodtMmY2UjphAkgXv08IC3T87oOL6UqOAMrrpSAqXeWKfimtdh2p8ohZsDz41fI3LET_2akp6-U8Tp8l5HfIocyNHI2rekvpo4Be4WbNrd1R7rJ7tBQNu4UxPDVg"
                  />
                </Link>
                <span className="text-sm font-medium hidden sm:block">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              Approval Queue
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                {bookings.length} Pending
              </span>
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Manage incoming room booking requests from students and faculty.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 flex gap-2">
            <button
              className="inline-flex items-center rounded bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50"
              type="button"
              disabled={loading}
              onClick={() => window.location.reload()}
            >
              <span className="material-icons text-lg mr-1.5 text-slate-400">
                refresh
              </span>
              Refresh
            </button>
            <button
              className="inline-flex items-center rounded bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              type="button"
            >
              <span className="material-icons text-lg mr-1.5">history</span>
              History Log
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3">
            <span className="material-icons text-red-600 dark:text-red-400 flex-shrink-0">
              error
            </span>
            <div>
              <h3 className="font-medium text-red-900 dark:text-red-200">
                Error
              </h3>
              <p className="text-sm text-red-800 dark:text-red-300 mt-1">
                {error}
              </p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 border-4 border-slate-200 dark:border-slate-700 border-t-primary rounded-full animate-spin"></div>
              <p className="text-slate-600 dark:text-slate-400">
                Loading pending bookings...
              </p>
            </div>
          </div>
        )}

        {!loading && (
          <>
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 mb-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 text-sm">
                <div className="sm:col-span-2">
                  <label
                    className="block font-medium leading-6 text-slate-900 dark:text-slate-200"
                    htmlFor="search"
                  >
                    Search
                  </label>
                  <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-icons text-slate-400 text-lg">
                        search
                      </span>
                    </div>
                    <input
                      className="block w-full rounded border-0 py-2 pl-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6"
                      id="search"
                      name="search"
                      placeholder="Requester name, event title..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    className="block font-medium leading-6 text-slate-900 dark:text-slate-200"
                    htmlFor="building"
                  >
                    Building
                  </label>
                  <div className="mt-1">
                    <select
                      className="block w-full rounded border-0 py-2 pl-3 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6"
                      id="building"
                      name="building"
                    >
                      <option>All Buildings</option>
                      <option>Science Block A</option>
                      <option>Liberal Arts Hall</option>
                      <option>Student Union</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    className="block font-medium leading-6 text-slate-900 dark:text-slate-200"
                    htmlFor="date"
                  >
                    Date
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded border-0 py-2 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6"
                      id="date"
                      name="date"
                      type="date"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 flex items-end justify-end">
                  <button className="text-primary text-sm font-medium hover:text-primary-dark">
                    Clear filters
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                  <thead className="bg-slate-50 dark:bg-slate-950">
                    <tr>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        scope="col"
                      >
                        Status
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        scope="col"
                      >
                        Requested For
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        scope="col"
                      >
                        Location
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        scope="col"
                      >
                        Requester
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        scope="col"
                      >
                        Event Details
                      </th>
                      <th className="relative px-6 py-3" scope="col">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
                    {bookings.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-12">
                          <div className="text-center">
                            <span className="material-icons text-4xl text-slate-300 dark:text-slate-600">
                              inbox
                            </span>
                            <h3 className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-200">
                              No pending bookings
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              All booking requests have been reviewed.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      bookings.map((booking) => (
                        <tr
                          key={booking.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">
                            <div className="font-medium">
                              {formatDateTime(booking.startTime)}
                            </div>
                            <div className="text-slate-500">
                              {formatTime(booking.startTime)} -{" "}
                              {formatTime(booking.endTime)} (
                              {getTimeDuration(
                                booking.startTime,
                                booking.endTime,
                              )}
                              )
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center">
                              <span className="material-icons text-base mr-2 text-slate-400">
                                room
                              </span>
                              {booking.roomName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold mr-3">
                                {(booking.bookedBy || "US")
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 2)
                                  .toUpperCase()}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-slate-900 dark:text-white">
                                  {booking.bookedBy || "Unknown"}
                                </div>
                                <div className="text-xs text-slate-500">
                                  Student
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                            <div className="font-medium text-slate-900 dark:text-white">
                              {booking.purpose || "No purpose"}
                            </div>
                            <div className="truncate text-xs">
                              Booked by {booking.bookedBy}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                className="text-green-600 hover:text-green-800 dark:text-green-500 dark:hover:text-green-400 p-1 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors disabled:opacity-50"
                                title="Approve"
                                onClick={() => handleApprove(booking.id)}
                                disabled={submitting}
                              >
                                <span className="material-icons">
                                  check_circle
                                </span>
                              </button>
                              <button
                                className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                                title="Reject"
                                onClick={() => handleRejectClick(booking.id)}
                                disabled={submitting}
                              >
                                <span className="material-icons">cancel</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 sm:px-6">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-400">
                      Showing all{" "}
                      <span className="font-medium">{bookings.length}</span>{" "}
                      pending bookings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {showRejectModal && selectedBooking && (
        <div
          aria-labelledby="modal-title"
          aria-modal="true"
          className="relative z-50"
          role="dialog"
        >
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-slate-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-slate-200 dark:border-slate-800">
                <div className="bg-white dark:bg-slate-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 sm:mx-0 sm:h-10 sm:w-10">
                      <span className="material-icons text-red-600 dark:text-red-500">
                        warning
                      </span>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <h3
                        className="text-base font-semibold leading-6 text-slate-900 dark:text-white"
                        id="modal-title"
                      >
                        Reject Booking Request
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          You are about to reject the booking for{" "}
                          <span className="font-bold text-slate-900 dark:text-slate-200">
                            {selectedBooking.roomName}
                          </span>{" "}
                          requested by{" "}
                          <span className="font-bold text-slate-900 dark:text-slate-200">
                            {selectedBooking.bookedBy}
                          </span>
                          .
                        </p>
                      </div>
                      <div className="mt-4">
                        <label
                          className="block text-sm font-medium leading-6 text-slate-900 dark:text-white"
                          htmlFor="rejection-reason"
                        >
                          Reason for rejection{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <textarea
                            className="block w-full rounded border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-red-500 dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6"
                            id="rejection-reason"
                            name="rejection-reason"
                            placeholder="e.g. Room requires maintenance, Conflict with administrative event..."
                            rows={3}
                            value={rejectionReason}
                            onChange={(e) => setRejectionReason(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="mt-2 flex gap-2 flex-wrap">
                          <button
                            className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            type="button"
                            onClick={() =>
                              setRejectionReason("Maintenance required")
                            }
                          >
                            Maintenance
                          </button>
                          <button
                            className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            type="button"
                            onClick={() =>
                              setRejectionReason("Scheduling conflict")
                            }
                          >
                            Scheduling Conflict
                          </button>
                          <button
                            className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            type="button"
                            onClick={() =>
                              setRejectionReason("Policy violation")
                            }
                          >
                            Policy Violation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    className="inline-flex w-full justify-center rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto disabled:opacity-50"
                    type="button"
                    onClick={handleConfirmReject}
                    disabled={submitting || !rejectionReason.trim()}
                  >
                    {submitting ? "Processing..." : "Confirm Rejection"}
                  </button>
                  <button
                    className="mt-3 inline-flex w-full justify-center rounded bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 sm:mt-0 sm:w-auto disabled:opacity-50"
                    type="button"
                    onClick={handleCancelReject}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
