import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { CreateBookingDto } from "../types";

export const CreateBookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CreateBookingDto>({
    roomName: "",
    bookedBy: "",
    purpose: "",
    startTime: "",
    endTime: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear field error when user starts typing
    if (fieldErrors[id]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setLoading(true);

    try {
      // Validate required fields
      const errors: Record<string, string> = {};
      if (!formData.roomName) errors.roomName = "Room is required";
      if (!formData.bookedBy) errors.bookedBy = "Your name is required";
      if (!formData.startTime) errors.startTime = "Start time is required";
      if (!formData.endTime) errors.endTime = "End time is required";

      if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        setLoading(false);
        return;
      }

      // Convert time inputs to ISO datetime format for backend
      const formattedData: CreateBookingDto = {
        ...formData,
        startTime: formData.startTime,
        endTime: formData.endTime,
      };

      const result = await bookingService.createBooking(formattedData);
      
      // Success: redirect to booking list or detail
      navigate(`/bookings/${result.id}`, {
        state: { message: "Booking created successfully!" },
      });
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to create booking. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-neutral-800 dark:text-neutral-100 min-h-screen flex flex-col">
      <nav className="bg-white dark:bg-[#1e293b] border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="font-bold text-xl tracking-tight text-neutral-800 dark:text-white">
                  CampusBook
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  className="border-transparent text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="border-primary text-neutral-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/bookings/create"
                >
                  New Booking
                </Link>
                <Link
                  className="border-transparent text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  to="/rooms/schedule"
                >
                  My Schedule
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                aria-label="Notifications"
                className="p-2 rounded-full text-neutral-400 hover:text-primary focus:outline-none"
                to="/notifications"
              >
                <span className="material-icons">notifications</span>
              </Link>
              <div className="ml-3 relative flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex mb-6">
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  className="text-neutral-500 hover:text-primary text-sm font-medium"
                  to="/bookings"
                >
                  Bookings
                </Link>
              </li>
              <li>
                <span className="text-neutral-300 mx-2">/</span>
              </li>
              <li
                aria-current="page"
                className="text-primary font-medium text-sm"
              >
                Create New
              </li>
            </ol>
          </nav>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  New Room Reservation
                </h1>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  Fill in the details below to secure a space for your event.
                </p>
              </div>

              {/* Global Error Alert */}
              {error && (
                <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-100 dark:border-red-800">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="material-icons text-red-400">
                        error
                      </span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                        Error Creating Booking
                      </h3>
                      <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                  <div className="p-6 space-y-6">
                    <div>
                      <label
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        htmlFor="roomName"
                      >
                        Select Room *
                      </label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-icons text-neutral-400 text-xl">
                            meeting_room
                          </span>
                        </div>
                        <input
                          className={`block w-full pl-10 pr-10 py-2.5 border rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm placeholder-neutral-400 dark:bg-[#0f172a] ${
                            fieldErrors.roomName
                              ? "border-red-500 dark:border-red-500"
                              : "border-neutral-300 dark:border-neutral-600"
                          }`}
                          id="roomName"
                          placeholder="Enter room name (e.g., 'Lab 304')..."
                          type="text"
                          value={formData.roomName}
                          onChange={handleInputChange}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="material-icons text-neutral-400 text-xl">
                            expand_more
                          </span>
                        </div>
                      </div>
                      {fieldErrors.roomName && (
                        <p className="mt-1 text-xs text-red-500">
                          {fieldErrors.roomName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        htmlFor="bookedBy"
                      >
                        Your Name *
                      </label>
                      <input
                        className={`block w-full px-3 py-2.5 border rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm dark:bg-[#0f172a] ${
                          fieldErrors.bookedBy
                            ? "border-red-500 dark:border-red-500"
                            : "border-neutral-300 dark:border-neutral-600"
                        }`}
                        id="bookedBy"
                        placeholder="Enter your full name..."
                        type="text"
                        value={formData.bookedBy}
                        onChange={handleInputChange}
                      />
                      {fieldErrors.bookedBy && (
                        <p className="mt-1 text-xs text-red-500">
                          {fieldErrors.bookedBy}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        htmlFor="purpose"
                      >
                        Purpose of Booking
                      </label>
                      <textarea
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-neutral-300 dark:border-neutral-600 dark:bg-[#0f172a] rounded-lg p-3 border"
                        id="purpose"
                        placeholder="Describe the event (e.g., 'Weekly Study Group for CS101')..."
                        rows={3}
                        value={formData.purpose}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                  <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1e293b] flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide">
                      Schedule
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Start Time *
                        </label>
                        <div className="relative">
                          <input
                            className={`block w-full py-2 px-3 border rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm dark:bg-[#0f172a] ${
                              fieldErrors.startTime
                                ? "border-red-500 dark:border-red-500"
                                : "border-neutral-300 dark:border-neutral-600"
                            }`}
                            type="datetime-local"
                            id="startTime"
                            value={formData.startTime}
                            onChange={handleInputChange}
                          />
                        </div>
                        {fieldErrors.startTime && (
                          <p className="mt-1 text-xs text-red-500">
                            {fieldErrors.startTime}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          End Time *
                        </label>
                        <div className="relative">
                          <input
                            className={`block w-full py-2 px-3 border rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm dark:bg-[#0f172a] ${
                              fieldErrors.endTime
                                ? "border-red-500 dark:border-red-500"
                                : "border-neutral-300 dark:border-neutral-600"
                            }`}
                            type="datetime-local"
                            id="endTime"
                            value={formData.endTime}
                            onChange={handleInputChange}
                          />
                        </div>
                        {fieldErrors.endTime && (
                          <p className="mt-1 text-xs text-red-500">
                            {fieldErrors.endTime}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4 pt-4">
                  <button
                    className="bg-white dark:bg-transparent py-2.5 px-6 border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-sm text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                    type="button"
                    onClick={() => navigate("/bookings")}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    className="inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin -ml-1 mr-2">⏳</span>
                        Creating...
                      </>
                    ) : (
                      "Submit Booking"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 flex items-start space-x-4">
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Form Tips
                    </h4>
                    <ul className="mt-2 space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <li>• All fields marked with * are required</li>
                      <li>• Use datetime format: YYYY-MM-DD HH:MM</li>
                      <li>• End time must be after start time</li>
                      <li>• You cannot book in the past</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-[#1e293b] border-t border-neutral-200 dark:border-neutral-700 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>(c) 2023 CampusBook System. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link className="hover:text-primary" to="/dashboard">
              Support
            </Link>
            <Link className="hover:text-primary" to="/dashboard">
              Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
