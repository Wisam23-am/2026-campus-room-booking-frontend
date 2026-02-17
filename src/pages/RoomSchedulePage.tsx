import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { roomService, RoomSchedule } from "../services/room.service";
import { Room } from "../types";

export const RoomSchedulePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [room, setRoom] = useState<Room | null>(null);
  const [schedule, setSchedule] = useState<RoomSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  useEffect(() => {
    // Set default date range: today to 7 days from now
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    setDateFrom(today.toISOString().split("T")[0]);
    setDateTo(nextWeek.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch room details and schedule in parallel
        const roomId = parseInt(id, 10);
        const [roomData, scheduleData] = await Promise.all([
          roomService.getRoomById(roomId),
          roomService.getRoomSchedule(
            roomId,
            dateFrom ? new Date(dateFrom).toISOString() : undefined,
            dateTo ? new Date(dateTo).toISOString() : undefined,
          ),
        ]);

        setRoom(roomData);
        setSchedule(scheduleData);
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "Failed to load room schedule.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (dateFrom && dateTo) {
      fetchData();
    }
  }, [id, dateFrom, dateTo]);

  const handleDateRangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger re-fetch by updating the dependency array in useEffect
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadgeClass = (status: number) => {
    switch (status) {
      case 0:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case 1:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case 2:
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusLabel = (status: number) => {
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

  if (loading && !room) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Loading schedule...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-100 dark:border-red-800">
            <div className="flex">
              <span className="material-icons text-red-400">error</span>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Error
                </h3>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                  {error}
                </p>
                <button
                  onClick={() => navigate("/rooms")}
                  className="mt-3 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-500"
                >
                  ← Back to Rooms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-neutral-600 dark:text-neutral-400">
            Room not found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                className="text-neutral-500 hover:text-primary text-sm font-medium"
                to="/rooms"
              >
                Rooms
              </Link>
            </li>
            <li>
              <span className="text-neutral-300 mx-2">/</span>
            </li>
            <li>
              <Link
                className="text-neutral-500 hover:text-primary text-sm font-medium"
                to={`/rooms/${id}`}
              >
                {room.name}
              </Link>
            </li>
            <li>
              <span className="text-neutral-300 mx-2">/</span>
            </li>
            <li
              aria-current="page"
              className="text-primary font-medium text-sm"
            >
              Schedule
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {room.name} - Schedule
              </h1>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {room.building} • Floor {room.floor} • Capacity: {room.capacity}{" "}
                people
              </p>
            </div>
            <Link
              to={`/bookings/create?roomId=${room.id}`}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span className="material-icons text-base mr-2">add</span>
              Book This Room
            </Link>
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl p-6 mb-6 border border-neutral-200 dark:border-neutral-700">
          <form
            onSubmit={handleDateRangeSubmit}
            className="flex items-end gap-4"
          >
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                From Date
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm dark:bg-[#0f172a]"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                To Date
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm dark:bg-[#0f172a]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
            >
              {loading ? "Loading..." : "Apply"}
            </button>
          </form>
        </div>

        {/* Schedule Timeline */}
        <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
          <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0f172a]">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide">
              Booking Schedule
            </h3>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {schedule.length} booking(s) for the selected period
            </p>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Loading bookings...
              </p>
            </div>
          ) : schedule.length === 0 ? (
            <div className="p-8 text-center">
              <span className="material-icons text-neutral-400 text-5xl">
                event_available
              </span>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                No bookings found for this period.
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                This room is available for booking.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-100 dark:divide-neutral-700">
              {schedule.map((booking) => (
                <div
                  key={booking.bookingId}
                  className="p-6 hover:bg-neutral-50 dark:hover:bg-[#0f172a] transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                          {booking.purpose || "No purpose specified"}
                        </h4>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                            booking.status,
                          )}`}
                        >
                          {getStatusLabel(booking.status)}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          <span className="material-icons text-base align-middle mr-1">
                            person
                          </span>
                          Booked by: <strong>{booking.bookedBy}</strong>
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          <span className="material-icons text-base align-middle mr-1">
                            schedule
                          </span>
                          {formatDateTime(booking.startTime)} →{" "}
                          {formatDateTime(booking.endTime)}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">
                          Booking ID: #{booking.bookingId}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/bookings/${booking.bookingId}`}
                      className="ml-4 inline-flex items-center px-3 py-1.5 border border-neutral-300 dark:border-neutral-600 shadow-sm text-xs font-medium rounded-lg text-neutral-700 dark:text-neutral-200 bg-white dark:bg-[#0f172a] hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
