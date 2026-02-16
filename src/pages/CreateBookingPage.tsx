import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { CreateBookingDto } from "../types";
import { SearchableRoomSelect } from "../components/SearchableRoomSelect";

export const CreateBookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [roomId, setRoomId] = useState<number | null>(null);
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

  // Pre-select room from URL parameter (e.g., /bookings/create?roomId=5)
  useEffect(() => {
    const roomIdParam = searchParams.get("roomId");
    if (roomIdParam) {
      const parsedId = parseInt(roomIdParam, 10);
      if (!isNaN(parsedId)) {
        setRoomId(parsedId);
      }
    }
  }, [searchParams]);

  const handleRoomSelect = (selectedRoomId: number | null, selectedRoomName: string) => {
    setRoomId(selectedRoomId);
    setFormData((prev) => ({
      ...prev,
      roomName: selectedRoomName,
    }));
    // Clear room name error when a room is selected
    if (fieldErrors.roomName) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated.roomName;
        return updated;
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

      await bookingService.createBooking(formattedData);

      // Success: redirect to booking list or detail
      navigate(`/bookings`, {
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                    <span className="material-icons text-red-400">error</span>
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
                    <SearchableRoomSelect
                      value={roomId}
                      onChange={handleRoomSelect}
                      error={fieldErrors.roomName}
                      disabled={loading}
                    />
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
                  onClick={() => navigate("/dashboard")}
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
    </div>
  );
};
