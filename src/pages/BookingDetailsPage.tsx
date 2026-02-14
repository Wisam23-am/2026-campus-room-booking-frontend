import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { RoomBooking, UpdateBookingDto } from "../types";

export const BookingDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [booking, setBooking] = useState<RoomBooking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<UpdateBookingDto>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch booking detail on mount
  useEffect(() => {
    if (!id) {
      setError("Booking ID is required");
      setLoading(false);
      return;
    }

    const fetchBooking = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await bookingService.getBookingById(parseInt(id));
        setBooking(data);
        setEditData({
          roomName: data.roomName,
          bookedBy: data.bookedBy,
          purpose: data.purpose,
          startTime: data.startTime,
          endTime: data.endTime,
          status: data.status,
        });
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch booking details";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  const handleEditChange = (field: string, value: any) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setSubmitError(null);
  };

  const handleUpdate = async () => {
    if (!booking || !id) return;

    try {
      setSubmitting(true);
      setSubmitError(null);
      const updated = await bookingService.updateBooking(
        parseInt(id),
        editData
      );
      setBooking(updated);
      setEditMode(false);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to update booking";
      setSubmitError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = () => {
    if (
      !booking ||
      !id ||
      !window.confirm(
        "Are you sure you want to delete this booking? This action cannot be undone."
      )
    ) {
      return;
    }

    const performDelete = async () => {
      try {
        setSubmitting(true);
        await bookingService.deleteBooking(parseInt(id));
        navigate("/bookings", { replace: true });
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "Failed to delete booking";
        setSubmitError(errorMessage);
      } finally {
        setSubmitting(false);
      }
    };

    performDelete();
  };

  // Loading state
  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading booking details...</p>
        </div>
      </div>
    );
  }

  // Error state or not found
  if (error || !booking) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <span className="material-icons text-6xl">error_outline</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {error || "Booking not found"}
          </p>
          <Link
            to="/bookings"
            className="inline-flex items-center px-4 py-2 border border-primary bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Back to Bookings
          </Link>
        </div>
      </div>
    );
  }

  const statusLabels = {
    0: "Pending",
    1: "Approved",
    2: "Rejected",
  };

  const statusColors = {
    0: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200",
    1: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
    2: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200",
  };

  return (
    <>
      <nav className="bg-white dark:bg-[#1A2633] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-icons text-primary">school</span>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  CampusReserve
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 h-full items-center">
                <Link
                  className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="border-primary text-primary dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/bookings"
                >
                  Bookings
                </Link>
                <Link
                  className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/rooms/schedule"
                >
                  Schedule
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                aria-label="Notifications"
                className="p-1 rounded-full text-slate-400 hover:text-slate-500"
                to="/notifications"
              >
                <span className="material-icons">notifications</span>
              </Link>
              <div className="flex items-center gap-2">
                <Link to="/profile" aria-label="Profile">
                  <img
                    alt="User Profile"
                    className="h-8 w-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHh0jha5H8nevJ366yqInciMqI2ySjtvHLPjiGQd1OOMGfxBeiANGomvw3oV24K0EIbp06it-rCzSOn69WG0Aleoaq2Cz3cYDX0K12Z0KBPYsUKDM5EFltk8spjF8E2v_keY2NXxRhJQdj1KE_Cole1lyd8HEXIGnGnTeBDKPPPX3ggZv0Oc9FjBokKPngYJu_rpaqJ67mPRTC_3LMfmiU28qGoQhbErHc-VLxpd50IHuBDqhzMJV0iMirkM1N4onTHWL5C8wI-cg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex mb-6">
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium"
                  to="/bookings"
                >
                  Bookings
                </Link>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-600">/</span>
              </li>
              <li>
                <Link
                  className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium"
                  to="/bookings"
                >
                  Requests
                </Link>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-600">/</span>
              </li>
              <li
                aria-current="page"
                className="text-slate-800 dark:text-white text-sm font-medium"
              >
                REQ-2023-891
              </li>
            </ol>
          </nav>
          <div className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {booking.roomName}
                  </h1>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      statusColors[booking.status as 0 | 1 | 2]
                    }`}
                  >
                    {statusLabels[booking.status as 0 | 1 | 2]}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <span className="material-icons text-base text-slate-400">
                    account_circle
                  </span>
                  Booked by: {booking.bookedBy}
                </p>
              </div>
              {!editMode && (
                <div className="flex items-center gap-3">
                  <button
                    className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:opacity-50"
                    type="button"
                    onClick={handleDelete}
                    disabled={submitting}
                  >
                    <span className="material-icons text-red-500 mr-2 text-lg">
                      delete
                    </span>
                    Delete
                  </button>
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50"
                    type="button"
                    onClick={() => setEditMode(true)}
                  >
                    <span className="material-icons mr-2 text-lg">edit</span>
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {submitError && (
                <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-100 dark:border-red-800">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="material-icons text-red-400">error</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                        Error
                      </h3>
                      <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                        <p>{submitError}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {editMode ? (
                <section className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-[#15202B]">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                      Edit Booking
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Room Name
                      </label>
                      <input
                        type="text"
                        className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                        value={editData.roomName || ""}
                        onChange={(e) => handleEditChange("roomName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Booked By
                      </label>
                      <input
                        type="text"
                        className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                        value={editData.bookedBy || ""}
                        onChange={(e) => handleEditChange("bookedBy", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Purpose
                      </label>
                      <textarea
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-slate-300 dark:border-slate-600 dark:bg-[#0f172a] rounded-lg p-3 border"
                        rows={3}
                        value={editData.purpose || ""}
                        onChange={(e) => handleEditChange("purpose", e.target.value)}
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Start Time
                        </label>
                        <input
                          type="datetime-local"
                          className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                          value={editData.startTime || ""}
                          onChange={(e) => handleEditChange("startTime", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          End Time
                        </label>
                        <input
                          type="datetime-local"
                          className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                          value={editData.endTime || ""}
                          onChange={(e) => handleEditChange("endTime", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Status
                      </label>
                      <select
                        className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                        value={editData.status || 0}
                        onChange={(e) => handleEditChange("status", parseInt(e.target.value))}
                      >
                        <option value={0}>Pending</option>
                        <option value={1}>Approved</option>
                        <option value={2}>Rejected</option>
                      </select>
                    </div>
                    <div className="flex gap-3">
                      <button
                        className="inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50"
                        onClick={handleUpdate}
                        disabled={submitting}
                      >
                        {submitting ? "Saving..." : "Save Changes"}
                      </button>
                      <button
                        className="inline-flex justify-center py-2.5 px-6 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50"
                        onClick={() => setEditMode(false)}
                        disabled={submitting}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </section>
              ) : (
                <section className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-[#15202B]">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                      Booking Details
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Purpose
                        </label>
                        <p className="text-slate-900 dark:text-slate-200 text-sm leading-relaxed">
                          {booking.purpose || "No purpose specified"}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                            Date &amp; Time
                          </label>
                          <div className="flex items-center gap-3 p-3 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10">
                            <span className="material-icons text-primary">
                              event
                            </span>
                            <div>
                              <p className="text-sm font-medium text-slate-900 dark:text-white">
                                {new Date(booking.startTime).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {new Date(booking.startTime).toLocaleTimeString()} -{" "}
                                {new Date(booking.endTime).toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-4">
                  Booking Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Room
                    </p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {booking.roomName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Booked By
                    </p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {booking.bookedBy}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Status
                    </p>
                    <p className={`text-sm font-medium ${
                      booking.status === 0 ? "text-amber-600" :
                      booking.status === 1 ? "text-green-600" :
                      "text-red-600"
                    }`}>
                      {statusLabels[booking.status as 0 | 1 | 2]}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Created
                    </p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {new Date(booking.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-[#1A2633] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            (c) 2023 CampusReserve. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
