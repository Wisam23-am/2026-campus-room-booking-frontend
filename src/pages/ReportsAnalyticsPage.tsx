import React from "react";
import { Link } from "react-router-dom";

export const ReportsAnalyticsPage: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex">
      <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 hidden lg:flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
            <span className="material-icons text-xl">school</span>
          </div>
          <h1 className="font-bold text-lg tracking-tight">CampusBook</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="px-3 mb-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
            Main
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors group"
            to="/admin/dashboard"
          >
            <span className="material-icons text-slate-400 group-hover:text-primary">
              dashboard
            </span>
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors group"
            to="/admin/approvals"
          >
            <span className="material-icons text-slate-400 group-hover:text-primary">
              calendar_today
            </span>
            Bookings
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors group"
            to="/admin/rooms"
          >
            <span className="material-icons text-slate-400 group-hover:text-primary">
              meeting_room
            </span>
            Rooms
          </Link>
          <div className="px-3 mt-6 mb-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
            Analytics
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary font-medium rounded transition-colors"
            to="/admin/reports"
          >
            <span className="material-icons text-primary">bar_chart</span>
            Reports
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors group"
            to="/admin/users"
          >
            <span className="material-icons text-slate-400 group-hover:text-primary">
              people
            </span>
            Users
          </Link>
          <div className="px-3 mt-6 mb-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
            System
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors group"
            to="/admin/settings"
          >
            <span className="material-icons text-slate-400 group-hover:text-primary">
              settings
            </span>
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full bg-slate-200 object-cover"
              data-alt="Admin user profile picture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAO2xEPs1-OUQpYFUKMjljIS7GuacLJ1RjZklggt8dnLUQOiLIFMNr-rGs0nCAIUTWrFyDp2j0gOCnSNRoje7TGtawreLvjYFA6wJsdrSl2DhzAwnkxR-LTqEGtnDQFqukOqXC1UIAEfotp-P4cgs83FAqK7_tRP_LTZAiV72wLuNFjbQm8VbJmarYcP4815TEkRJXGo4c69L0URXRL52cHOucxb1rm2PSE_xegSFAcRdZZAPpEear8acnx8UKMNeHFHro0-vCMVM"
              alt="Admin user profile"
            />
            <div>
              <p className="text-sm font-medium">Alex Morgan</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Reports &amp; Analytics
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Overview of room utilization and booking trends.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-sm pointer-events-none">
                    calendar_today
                  </span>
                  <select className="pl-9 pr-8 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-sm focus:ring-primary focus:border-primary">
                    <option>Last 30 Days</option>
                    <option>This Semester</option>
                    <option>Last Year</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <span className="material-icons text-sm">download</span>
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div className="absolute right-0 top-0 h-full w-1 bg-primary"></div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Total Bookings
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    1,245
                  </h3>
                </div>
                <div className="p-2 bg-primary/10 rounded text-primary">
                  <span className="material-icons">event_available</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-emerald-500 flex items-center font-medium">
                  <span className="material-icons text-sm mr-1">
                    trending_up
                  </span>
                  12.5%
                </span>
                <span className="text-slate-400 ml-2">vs last month</span>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Avg. Occupancy
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    78%
                  </h3>
                </div>
                <div className="p-2 bg-primary/10 rounded text-primary">
                  <span className="material-icons">pie_chart</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-emerald-500 flex items-center font-medium">
                  <span className="material-icons text-sm mr-1">
                    arrow_upward
                  </span>
                  4.2%
                </span>
                <span className="text-slate-400 ml-2">vs last month</span>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Active Users
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    892
                  </h3>
                </div>
                <div className="p-2 bg-primary/10 rounded text-primary">
                  <span className="material-icons">group</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-slate-400 font-medium">Stable</span>
                <span className="text-slate-400 ml-2">vs last month</span>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Cancellations
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    32
                  </h3>
                </div>
                <div className="p-2 bg-rose-50 dark:bg-rose-900/20 rounded text-rose-500">
                  <span className="material-icons">event_busy</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-rose-500 flex items-center font-medium">
                  <span className="material-icons text-sm mr-1">
                    trending_down
                  </span>
                  2.1%
                </span>
                <span className="text-slate-400 ml-2">rate</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Usage Trends
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>{" "}
                    Bookings
                  </div>
                </div>
              </div>
              <div className="relative h-64 w-full flex items-end justify-between gap-2 pt-8 pb-4 pl-8 border-l border-b border-slate-200 dark:border-slate-700">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 -ml-8 py-4">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>
                <div className="absolute inset-0 top-8 left-8 right-0 bottom-4 pointer-events-none">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#217ff2"
                          stopOpacity="0.2"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="#217ff2"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,180 C50,150 100,60 150,80 S250,120 300,50 S400,90 450,70 S550,20 600,40 S700,80 800,60 L800,200 L0,200 Z"
                      fill="url(#gradient)"
                    ></path>
                    <path
                      d="M0,180 C50,150 100,60 150,80 S250,120 300,50 S400,90 450,70 S550,20 600,40 S700,80 800,60"
                      fill="none"
                      stroke="#217ff2"
                      strokeWidth={3}
                    ></path>
                    <circle
                      className="fill-white stroke-primary stroke-2 hover:r-6 cursor-pointer transition-all"
                      cx="150"
                      cy="80"
                      r="4"
                    ></circle>
                    <circle
                      className="fill-white stroke-primary stroke-2 hover:r-6 cursor-pointer transition-all"
                      cx="300"
                      cy="50"
                      r="4"
                    ></circle>
                    <circle
                      className="fill-white stroke-primary stroke-2 hover:r-6 cursor-pointer transition-all"
                      cx="450"
                      cy="70"
                      r="4"
                    ></circle>
                    <circle
                      className="fill-white stroke-primary stroke-2 hover:r-6 cursor-pointer transition-all"
                      cx="600"
                      cy="40"
                      r="4"
                    ></circle>
                  </svg>
                </div>
                <div className="absolute bottom-[-24px] left-8 w-full flex justify-between text-xs text-slate-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                Booking Status
              </h3>
              <div className="flex flex-col items-center justify-center h-64">
                <div className="relative w-48 h-48 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#217ff2 0% 60%, #fbbf24 60% 90%, #f43f5e 90% 100%)",
                    }}
                  ></div>
                  <div className="absolute w-32 h-32 bg-white dark:bg-surface-dark rounded-full flex flex-col items-center justify-center z-10">
                    <span className="text-3xl font-bold text-slate-800 dark:text-white">
                      1.2k
                    </span>
                    <span className="text-xs text-slate-500 uppercase font-medium">
                      Total
                    </span>
                  </div>
                </div>
                <div className="flex w-full justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Approved
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Pending
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Cancelled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Most Booked Rooms
                </h3>
                <button className="text-primary text-sm font-medium hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Library Conference A
                    </span>
                    <span className="text-slate-500">142 bookings</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Study Hall B
                    </span>
                    <span className="text-slate-500">118 bookings</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full opacity-80"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Lecture Hall 101
                    </span>
                    <span className="text-slate-500">95 bookings</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full opacity-60"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Media Lab 2
                    </span>
                    <span className="text-slate-500">64 bookings</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full opacity-40"
                      style={{ width: "38%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Group Room 4
                    </span>
                    <span className="text-slate-500">42 bookings</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full opacity-20"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Recent Activity
                </h3>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    3 Pending
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-3">Room</th>
                      <th className="px-6 py-3">Requested By</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                        Conf Room A
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Sarah Connor
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Oct 24, 14:00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>{" "}
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                        Lecture Hall 101
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Dr. Emmett Brown
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Oct 24, 09:00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{" "}
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                        Study Hall B
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Marty McFly
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Oct 23, 16:30
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>{" "}
                          Cancelled
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                        Media Lab 2
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Biff Tannen
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        Oct 23, 10:00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{" "}
                          Approved
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <footer className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 pb-6 text-center text-sm text-slate-500">
            <p>(c) 2023 CampusBook System. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};
