import React from "react";
import { Link } from "react-router-dom";

export const BookingListPage: React.FC = () => {
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
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
              <div className="relative min-w-[160px]">
                <label className="sr-only">Status</label>
                <select className="block w-full pl-3 pr-10 py-2 text-base border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded dark:bg-[#101822] dark:text-slate-200">
                  <option>All Statuses</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
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
                <tr className="group hover:bg-slate-50 dark:hover:bg-[#151f2b] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          alt="Bright modern office room"
                          className="h-10 w-10 rounded object-cover"
                          data-alt="Small modern study room with glass walls"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFzFcIbWdRxNHWvjd4qCvno2FQM1jLXsKe4qKtiwBtYZVgfW_M4kggUHwMIWP7vMP1CAP0TkhSfkgrWI-CGWEaNSL_0oSTNkzmLCeLzLV5tJURDvhNWd-wlLjYOtoiUdRLRWgt58cPKhGPRrGndP7tvnLAObTtJKZKUSt5kuH91NyXrsUHRkqUIJw1k_NSNa7Cx3PjDGSrPTFZh2Ikw0mRPjK4L2UYvDH2nRjHPgUTmjo4ilExTL2nOLRyi-Yg0Yuw_KwfTYCNNKU"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          Study Room A
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Quiet Zone • 4 Seats
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900 dark:text-white">
                      Oct 24, 2023
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      14:00 - 16:00
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                      2 hrs
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-transparent dark:border-green-800">
                      <span className="w-1.5 h-1.5 mr-1.5 bg-green-500 rounded-full"></span>
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View Details"
                      >
                        <span className="material-icons text-xl">
                          visibility
                        </span>
                      </button>
                      <button
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        title="Cancel Request"
                      >
                        <span className="material-icons text-xl">cancel</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 dark:hover:bg-[#151f2b] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded flex items-center justify-center text-indigo-600 font-bold">
                        L
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          Lecture Hall 3
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Main Building • 150 Seats
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900 dark:text-white">
                      Oct 28, 2023
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      09:00 - 12:00
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                      3 hrs
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-transparent dark:border-amber-800">
                      <span className="w-1.5 h-1.5 mr-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View Details"
                      >
                        <span className="material-icons text-xl">
                          visibility
                        </span>
                      </button>
                      <button
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        title="Cancel Request"
                      >
                        <span className="material-icons text-xl">cancel</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 dark:hover:bg-[#151f2b] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          alt="Meeting room with round table"
                          className="h-10 w-10 rounded object-cover"
                          data-alt="Conference room with a round wooden table"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcit431l3Qx7eo0D8i-vxzyy0L1gLcHjDr6hj9eUSNWcifWipdz1sls_eyWZ2CJfjmRiINGS8hU2-9Rtm0jifiZ7wZabdb-3zZAL8VQulNYGwEWkYc1uTsPS367hh-5r7NUAhvl4xdtPl6t_3OFbms1JP67Kuv0tPlAVV8n_eu6mZN7pc86OmPfbjzCz81QNz_gkQAIW2ZhjpbbrTDTB3BUn0sAwecwUlE-Uia9ecjfUY94jX5hXKOgaSFDI8W7naRgCBvGLBOP1s"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          Conf. Room B
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Executive Wing • 12 Seats
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900 dark:text-white">
                      Oct 29, 2023
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      10:00 - 11:00
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                      1 hr
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-transparent dark:border-red-800">
                      <span className="w-1.5 h-1.5 mr-1.5 bg-red-500 rounded-full"></span>
                      Rejected
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View Details"
                      >
                        <span className="material-icons text-xl">
                          visibility
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 dark:hover:bg-[#151f2b] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded flex items-center justify-center text-purple-600 font-bold">
                        M
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          Media Lab 2
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Creative Hub • 6 Seats
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900 dark:text-white">
                      Nov 02, 2023
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      13:00 - 17:00
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                      4 hrs
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-transparent dark:border-green-800">
                      <span className="w-1.5 h-1.5 mr-1.5 bg-green-500 rounded-full"></span>
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View Details"
                      >
                        <span className="material-icons text-xl">
                          visibility
                        </span>
                      </button>
                      <button
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        title="Cancel Request"
                      >
                        <span className="material-icons text-xl">cancel</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 dark:hover:bg-[#151f2b] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          alt="Small colorful meeting booth"
                          className="h-10 w-10 rounded object-cover"
                          data-alt="Small colorful meeting booth for two people"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIlGs_AfwXx-x9Xpl_RFqX6ya3u4Ce83ETnaOPBMf4GaT43QyVA6g54mcVcKAa1g50WQNiuxhDwyCCmh4JwlIYeWJBN1gYtgezU3C2rCaQNZQoXYT2MJChgRuRixoUQksQG_ffT-mpgdDTqAqfNd6amO8DwNhmao3ZLexg_jRYmfSJtXf2GMX8afsVrJD2dGT7Xbc10CLOq9u1lTZOlH5i6PiZ2suIqxph7QkstzMsLFt5ceLke7nP5U7AB17GdQ7Qq1o2qzzBAJ0"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          Focus Pod 1
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Library 2F • 1 Seat
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900 dark:text-white">
                      Nov 05, 2023
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      08:00 - 10:00
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                      2 hrs
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-transparent dark:border-amber-800">
                      <span className="w-1.5 h-1.5 mr-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View Details"
                      >
                        <span className="material-icons text-xl">
                          visibility
                        </span>
                      </button>
                      <button
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        title="Cancel Request"
                      >
                        <span className="material-icons text-xl">cancel</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white dark:bg-[#1a2634] px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Showing{" "}
                  <span className="font-medium text-slate-900 dark:text-white">
                    1
                  </span>{" "}
                  to{" "}
                  <span className="font-medium text-slate-900 dark:text-white">
                    5
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-slate-900 dark:text-white">
                    42
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
