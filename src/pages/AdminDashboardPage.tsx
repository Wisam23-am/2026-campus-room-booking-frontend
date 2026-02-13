import React from "react";
import { Link } from "react-router-dom";

export const AdminDashboardPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen flex flex-col md:flex-row antialiased overflow-hidden">
      <aside className="w-full md:w-64 bg-white dark:bg-[#151f2b] border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col z-20 flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800/50">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mr-3 text-white">
            <span className="material-icons-round text-xl">school</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
            CampusSpace
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto custom-scrollbar py-6 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Main Menu
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary font-medium rounded-lg"
            to="/admin/dashboard"
          >
            <span className="material-icons-outlined text-[20px]">
              dashboard
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/approvals"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              calendar_month
            </span>
            <span>Bookings</span>
            <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              14
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/rooms"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              meeting_room
            </span>
            <span>Rooms</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/users"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              people
            </span>
            <span>Users</span>
          </Link>
          <div className="px-3 mt-8 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Administration
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/reports"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              assessment
            </span>
            <span>Reports</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
            to="/admin/settings"
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              settings
            </span>
            <span>Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-3">
            <Link to="/profile" aria-label="Profile">
              <img
                alt="Profile picture of an administrator"
                className="h-10 w-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                data-alt="Profile picture of an administrator"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6cce0AuMviIi8ITIHeKkgqf70oFreYvKP6Umfnwi9SMAAXrnuBgGeEMHxpVSL7dpNmlpRkQX-M0NbWAalxqAJ-edaDUtBFJuSumy0Bg7OwmgQYqeyDTrivNIBX4ZMtzssaNGgH-XSpKbN2nlXlNI0bMWobzs9UWSIOA_hNj8op3FM8ClQiPxVU9bppoy2SYRGv1Z-ILl4pWpbVGL5vgHuw1Jrj_aFN-397wKfZGVSF8VZh1kr91HfUZEPM1TkPY40lFINXnImq8"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-slate-500 truncate">
                admin@campus.edu
              </p>
            </div>
            <Link
              aria-label="Logout"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              to="/login"
            >
              <span className="material-icons-outlined text-xl">logout</span>
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-white dark:bg-[#151f2b] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 flex-shrink-0">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white hidden md:block">
            Overview
          </h1>
          <div className="flex items-center gap-4 flex-1 md:flex-none justify-end md:justify-start">
            <div className="relative w-full max-w-md hidden md:block">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons-outlined text-[20px]">
                  search
                </span>
              </span>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                placeholder="Search bookings, rooms, or users..."
                type="text"
              />
            </div>
            <Link
              aria-label="Notifications"
              className="relative p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
              to="/notifications"
            >
              <span className="material-icons-outlined">notifications</span>
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#151f2b]"></span>
            </Link>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Occupancy Rate
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    82%
                  </h3>
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                  <span className="material-icons-outlined text-xl">
                    pie_chart
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs">
                <span className="text-green-600 font-medium flex items-center">
                  <span className="material-icons-round text-sm mr-0.5">
                    trending_up
                  </span>
                  +5%
                </span>
                <span className="text-slate-400 ml-2">vs yesterday</span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Requests Today
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    125
                  </h3>
                </div>
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600">
                  <span className="material-icons-outlined text-xl">inbox</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs">
                <span className="text-green-600 font-medium flex items-center">
                  <span className="material-icons-round text-sm mr-0.5">
                    trending_up
                  </span>
                  +12%
                </span>
                <span className="text-slate-400 ml-2">vs last week</span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-amber-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Pending Approvals
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    14
                  </h3>
                </div>
                <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600">
                  <span className="material-icons-outlined text-xl">
                    pending_actions
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs">
                <span className="text-amber-600 font-medium">
                  Requires action
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Active Alerts
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    2
                  </h3>
                </div>
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600">
                  <span className="material-icons-outlined text-xl">
                    warning_amber
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs">
                <span className="text-slate-500">Maintenance required</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <h2 className="font-bold text-slate-900 dark:text-white">
                  Pending Approvals
                </h2>
                <Link
                  className="text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                  to="/admin/approvals"
                >
                  View All
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase text-xs tracking-wider font-semibold">
                    <tr>
                      <th className="px-6 py-3">Requester</th>
                      <th className="px-6 py-3">Room &amp; Details</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold mr-3">
                            JD
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">
                              John Doe
                            </div>
                            <div className="text-xs text-slate-500">
                              Faculty
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900 dark:text-white">
                          Lecture Hall A
                        </div>
                        <div className="text-xs text-slate-500">
                          CS 101 Lecture
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        Today, 2:00 PM
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          className="inline-flex items-center justify-center h-8 w-8 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                          title="Reject"
                        >
                          <span className="material-icons-outlined text-lg">
                            close
                          </span>
                        </button>
                        <button
                          className="inline-flex items-center justify-center h-8 w-8 rounded bg-primary text-white hover:bg-blue-600 shadow-sm transition-colors"
                          title="Approve"
                        >
                          <span className="material-icons-outlined text-lg">
                            check
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold mr-3">
                            RC
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">
                              Robotics Club
                            </div>
                            <div className="text-xs text-slate-500">
                              Student Org
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900 dark:text-white">
                          Lab 304
                        </div>
                        <div className="text-xs text-slate-500">
                          Project Build
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        Oct 24, 5:00 PM
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          className="inline-flex items-center justify-center h-8 w-8 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                          title="Reject"
                        >
                          <span className="material-icons-outlined text-lg">
                            close
                          </span>
                        </button>
                        <button
                          className="inline-flex items-center justify-center h-8 w-8 rounded bg-primary text-white hover:bg-blue-600 shadow-sm transition-colors"
                          title="Approve"
                        >
                          <span className="material-icons-outlined text-lg">
                            check
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold mr-3">
                            AS
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">
                              Sarah Smith
                            </div>
                            <div className="text-xs text-slate-500">
                              Administration
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900 dark:text-white">
                          Conf Room B
                        </div>
                        <div className="text-xs text-slate-500">
                          Board Meeting
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        Oct 25, 9:00 AM
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          className="inline-flex items-center justify-center h-8 w-8 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                          title="Reject"
                        >
                          <span className="material-icons-outlined text-lg">
                            close
                          </span>
                        </button>
                        <button
                          className="inline-flex items-center justify-center h-8 w-8 rounded bg-primary text-white hover:bg-blue-600 shadow-sm transition-colors"
                          title="Approve"
                        >
                          <span className="material-icons-outlined text-lg">
                            check
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
              <h2 className="font-bold text-slate-900 dark:text-white mb-6">
                Top 5 Spaces
              </h2>
              <div className="space-y-5 flex-1">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Lecture Hall A
                    </span>
                    <span className="text-slate-500">92% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Study Room 4B
                    </span>
                    <span className="text-slate-500">85% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/80 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Conf Room B
                    </span>
                    <span className="text-slate-500">74% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/60 h-2 rounded-full"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Innovation Lab
                    </span>
                    <span className="text-slate-500">60% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/40 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Media Center
                    </span>
                    <span className="text-slate-500">45% util</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary/20 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/dashboard"
            >
              <div className="h-10 w-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">build</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Maintenance
                </h4>
                <p className="text-xs text-slate-500">Create ticket</p>
              </div>
            </Link>
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/rooms"
            >
              <div className="h-10 w-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">block</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Block Room
                </h4>
                <p className="text-xs text-slate-500">Restrict access</p>
              </div>
            </Link>
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/reports"
            >
              <div className="h-10 w-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">description</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Weekly Report
                </h4>
                <p className="text-xs text-slate-500">Download PDF</p>
              </div>
            </Link>
            <Link
              className="group bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary transition-all flex items-center gap-4"
              to="/admin/users"
            >
              <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">person_add</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Add User
                </h4>
                <p className="text-xs text-slate-500">New faculty/staff</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
