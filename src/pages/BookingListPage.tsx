import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { bookingService } from "../services/booking.service";
import { BookingQueryParams, RoomBooking } from "../types";

export const BookingListPage: React.FC = () => {
  const [bookings, setBookings] = useState<RoomBooking[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<"all" | "0" | "1" | "2">(
    "all",
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const debounceId = window.setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
      setCurrentPage(1);
    }, 300);

    return () => window.clearTimeout(debounceId);
  }, [searchInput]);

  const queryParams: BookingQueryParams = useMemo(() => {
    const params: BookingQueryParams = {
      page: currentPage,
      pageSize,
    };

    if (debouncedSearch) params.search = debouncedSearch;
    if (statusFilter !== "all")
      params.status = Number(statusFilter) as 0 | 1 | 2;

    return params;
  }, [currentPage, debouncedSearch, pageSize, statusFilter]);

  useEffect(() => {
    let isCancelled = false;

    const loadBookings = async (params: BookingQueryParams) => {
      try {
        setLoading(true);
        setError(null);

        const response = await bookingService.getBookings(params);
        if (isCancelled) return;

        setBookings(response.data);
        setTotalCount(response.totalCount);
      } catch {
        if (isCancelled) return;
        setError("Gagal memuat data booking.");
      } finally {
        if (isCancelled) return;
        setLoading(false);
      }
    };

    void loadBookings(queryParams);

    return () => {
      isCancelled = true;
    };
  }, [queryParams]);

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return "-";
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const formatTime = (isoString: string): string => {
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return "-";
    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDuration = (startIso: string, endIso: string): string => {
    const start = new Date(startIso);
    const end = new Date(endIso);
    const diffMs = end.getTime() - start.getTime();
    if (Number.isNaN(diffMs) || diffMs <= 0) return "-";
    const diffMinutes = Math.round(diffMs / 60000);
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    if (hours > 0 && minutes === 0) return `${hours} hr${hours > 1 ? "s" : ""}`;
    if (hours > 0) return `${hours} hr${hours > 1 ? "s" : ""} ${minutes} min`;
    return `${minutes} min`;
  };

  const getStatusBadge = (status: 0 | 1 | 2) => {
    switch (status) {
      case 1:
        return {
          label: "Approved",
          container:
            "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-transparent dark:border-green-800",
          dot: "w-1.5 h-1.5 mr-1.5 bg-green-500 rounded-full",
        };
      case 2:
        return {
          label: "Rejected",
          container:
            "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-transparent dark:border-red-800",
          dot: "w-1.5 h-1.5 mr-1.5 bg-red-500 rounded-full",
        };
      case 0:
      default:
        return {
          label: "Pending",
          container:
            "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-transparent dark:border-amber-800",
          dot: "w-1.5 h-1.5 mr-1.5 bg-amber-500 rounded-full animate-pulse",
        };
    }
  };

  const showingFrom = totalCount === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const showingTo =
    totalCount === 0 ? 0 : (currentPage - 1) * pageSize + bookings.length;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen">
      <nav className="sticky top-0 z-50 bg-white dark:bg-[#1a2634] border-b border-slate-200 dark:border-slate-700 h-16 flex items-center px-6 justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          <span className="font-semibold text-lg tracking-tight">
            CampusBook
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            aria-label="Notifications"
            className="p-2 text-slate-500 hover:text-primary transition-colors"
            to="/notifications"
          >
            <span className="material-icons">notifications</span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
            <Link
              to="/profile"
              aria-label="Profile"
              className="block w-full h-full"
            >
              <img
                alt="User Avatar"
                className="w-full h-full object-cover"
                data-alt="Portrait of a young male student"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4G5o4DiQMrncTc5Bo-DJ1WVALq3R23fOyu1fgwIeMg919SZ0zCkxHjLG7eDB8_6GTgzK-XcrSwMqVREEZK1ItBuKRnfPyGqZ2MQAR22ZTmFFuug8R_7kvkYt2P1H6CMdBNn-r6mQ1Vtoz7pTMdM7coEd3djglatTg3Yu3e1iO82CmjjIP0Wfq-RX041k6tuz3aAa6nOTUePcPUpg9DpWwHvHxbLYT2AUHGy9imhXNES2aPMLXeXJIquBVE2SjLQdn-rm6hHPwd8w"
              />
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex text-sm text-slate-500 dark:text-slate-400 mb-1"
            >
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    to="/dashboard"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="select-none text-slate-300">/</span>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    to="/bookings"
                  >
                    Bookings
                  </Link>
                </li>
                <li>
                  <span className="select-none text-slate-300">/</span>
                </li>
                <li aria-current="page" className="text-primary font-medium">
                  My Requests
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              My Requests
            </h1>
          </div>
          <Link
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            to="/bookings/create"
          >
            <span className="material-icons text-sm mr-2">add</span>
            New Booking
          </Link>
        </div>
        <div className="bg-white dark:bg-[#1a2634] rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons text-slate-400 text-xl">
                  search
                </span>
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded leading-5 bg-white dark:bg-[#101822] placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                placeholder="Search by room or reference ID..."
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
              <div className="relative min-w-[160px]">
                <label className="sr-only">Status</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded dark:bg-[#101822] dark:text-slate-200"
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value as "all" | "0" | "1" | "2")
                  }
                >
                  <option value="all">All Statuses</option>
                  <option value="0">Pending</option>
                  <option value="1">Approved</option>
                  <option value="2">Rejected</option>
                </select>
              </div>
              <div className="relative min-w-[160px]">
                <label className="sr-only">Category</label>
                <select className="block w-full pl-3 pr-10 py-2 text-base border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded dark:bg-[#101822] dark:text-slate-200">
                  <option>All Categories</option>
                  <option>Study Rooms</option>
                  <option>Lecture Halls</option>
                  <option>Labs</option>
                  <option>Meeting Rooms</option>
                </select>
              </div>
              <div className="flex bg-slate-100 dark:bg-slate-700 rounded p-1 ml-auto lg:ml-2">
                <button className="p-1.5 rounded shadow-sm bg-white dark:bg-slate-600 text-primary dark:text-white transition-all">
                  <span className="material-icons text-sm">view_list</span>
                </button>
                <button className="p-1.5 rounded text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                  <span className="material-icons text-sm">grid_view</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1a2634] rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-[#151f2b]">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Room Details
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Date &amp; Time
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Duration
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Status
                  </th>
                  <th className="relative px-6 py-3" scope="col">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1a2634] divide-y divide-slate-200 dark:divide-slate-700">
                {loading ? (
                  <tr>
                    <td
                      className="px-6 py-8 text-center text-sm text-slate-500 dark:text-slate-400"
                      colSpan={5}
                    >
                      Loading...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td
                      className="px-6 py-8 text-center text-sm text-red-600 dark:text-red-400"
                      colSpan={5}
                    >
                      {error}
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td
                      className="px-6 py-8 text-center text-sm text-slate-500 dark:text-slate-400"
                      colSpan={5}
                    >
                      Tidak ada booking.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => {
                    const badge = getStatusBadge(booking.status);
                    const roomInitial =
                      booking.roomName?.trim()?.[0]?.toUpperCase() ?? "R";

                    return (
                      <tr
                        key={booking.id}
                        className="group hover:bg-slate-50 dark:hover:bg-[#151f2b] transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-slate-700 dark:text-slate-200 font-bold">
                              {roomInitial}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-slate-900 dark:text-white">
                                {booking.roomName}
                              </div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Booked by {booking.bookedBy}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-900 dark:text-white">
                            {formatDate(booking.startTime)}
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            {formatTime(booking.startTime)} -{" "}
                            {formatTime(booking.endTime)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                            {formatDuration(booking.startTime, booking.endTime)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={badge.container}>
                            <span className={badge.dot}></span>
                            {badge.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link
                              className="text-slate-400 hover:text-primary transition-colors"
                              title="View Details"
                              to={`/bookings/details?id=${booking.id}`}
                            >
                              <span className="material-icons text-xl">
                                visibility
                              </span>
                            </Link>
                            <button
                              className="text-slate-400 hover:text-red-500 transition-colors"
                              title="Cancel Request"
                              type="button"
                            >
                              <span className="material-icons text-xl">
                                cancel
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="bg-white dark:bg-[#1a2634] px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Showing{" "}
                  <span className="font-medium text-slate-900 dark:text-white">
                    {showingFrom}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium text-slate-900 dark:text-white">
                    {showingTo}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-slate-900 dark:text-white">
                    {totalCount}
                  </span>{" "}
                  results
                </p>
              </div>
              <div>
                <nav
                  aria-label="Pagination"
                  className="relative z-0 inline-flex rounded shadow-sm -space-x-px"
                >
                  <Link
                    className="relative inline-flex items-center px-2 py-2 rounded-l border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#101822] text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    to="/bookings"
                  >
                    <span className="sr-only">Previous</span>
                    <span className="material-icons text-lg">chevron_left</span>
                  </Link>
                  <Link
                    aria-current="page"
                    className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    to="/bookings"
                  >
                    1
                  </Link>
                  <Link
                    className="bg-white dark:bg-[#101822] border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    to="/bookings"
                  >
                    2
                  </Link>
                  <Link
                    className="bg-white dark:bg-[#101822] border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    to="/bookings"
                  >
                    3
                  </Link>
                  <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#101822] text-sm font-medium text-slate-700 dark:text-slate-400">
                    ...
                  </span>
                  <Link
                    className="relative inline-flex items-center px-2 py-2 rounded-r border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#101822] text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    to="/bookings"
                  >
                    <span className="sr-only">Next</span>
                    <span className="material-icons text-lg">
                      chevron_right
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex items-center justify-between sm:hidden w-full">
              <Link
                className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-[#101822] hover:bg-slate-50"
                to="/bookings"
              >
                Previous
              </Link>
              <Link
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-[#101822] hover:bg-slate-50"
                to="/bookings"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-8 border-t border-slate-200 dark:border-slate-700 py-6 text-center">
        <p className="text-sm text-slate-500">
          (c) 2023 CampusBook System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
