import React from "react";
import { Link } from "react-router-dom";

export const BookingDetailsPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased min-h-screen flex flex-col">
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
                    alt="Admin Profile"
                    className="h-8 w-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                    data-alt="Portrait of a smiling man"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHh0jha5H8nevJ366yqInciMqI2ySjtvHLPjiGQd1OOMGfxBeiANGomvw3oV24K0EIbp06it-rCzSOn69WG0Aleoaq2Cz3cYDX0K12Z0KBPYsUKDM5EFltk8spjF8E2v_keY2NXxRhJQdj1KE_Cole1lyd8HEXIGnGnTeBDKPPPX3ggZv0Oc9FjBokKPngYJu_rpaqJ67mPRTC_3LMfmiU28qGoQhbErHc-VLxpd50IHuBDqhzMJV0iMirkM1N4onTHWL5C8wI-cg"
                  />
                </Link>
                <span className="text-sm font-medium hidden md:block">
                  Admin User
                </span>
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
                    Lecture Hall 3B - Science Wing
                  </h1>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                    Pending Review
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <span className="material-icons text-base text-slate-400">
                    calendar_today
                  </span>
                  Requested on Oct 20, 2023 at 09:15 AM
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  type="button"
                >
                  <span className="material-icons text-red-500 mr-2 text-lg">
                    close
                  </span>
                  Reject
                </button>
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  type="button"
                >
                  <span className="material-icons mr-2 text-lg">check</span>
                  Approve Request
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-[#15202B]">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                    Reservation Details
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      alt="Requester Avatar"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      data-alt="Portrait of a woman wearing glasses"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6sHQvL_jLNCMY15OaoZnmFgYK1Wo1qbHAz9DRUpFmtzaJ8XtwHKZbCTgzMXqpepI2GMTTWb47Y6omnXkHLs05EKZ35FxeIeLsSOzdWdUoFO0V-dca9NB9PlLrhjTDdW1-G8FWKVFuSG6mVqhkKetzHkjgTbqUWL2z7IryBgqHt7cRm01K_GzISGpGAKMRGgx2poQnlFH8ahh_tA7IW0557HQ7y2NTWgLC9r88-UG9XyMKpzBbYDaiO8Ux3ngCwncOs9bMpbaVufg"
                    />
                    <div>
                      <h4 className="text-base font-medium text-slate-900 dark:text-white">
                        Dr. Sarah Smith
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Department of Biology • Faculty
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Event Purpose
                      </label>
                      <p className="text-slate-900 dark:text-slate-200 text-sm leading-relaxed">
                        Mid-term Biology Review Session for BIO-101 students.
                        Requires projector setup for presentation slides and
                        whiteboard for diagrams.
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
                              October 24, 2023
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              2:00 PM - 4:00 PM (2 Hours)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Attendees
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="material-icons text-slate-400 text-sm">
                            groups
                          </span>
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            ~120 Students expected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-[#15202B]">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                    Room Information
                  </h3>
                </div>
                <div className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          Lecture Hall 3B
                        </h4>
                        <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                          Science Wing, 3rd Floor
                        </span>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <span className="material-icons text-slate-400 text-lg">
                            event_seat
                          </span>
                          Max Capacity: 150 Seats
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <span className="material-icons text-slate-400 text-lg">
                            settings_input_hdmi
                          </span>
                          HDMI &amp; VGA Input
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <span className="material-icons text-slate-400 text-lg">
                            videocam
                          </span>
                          Lecture Capture Ready
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <span className="material-icons text-slate-400 text-lg">
                            ac_unit
                          </span>
                          Climate Control
                        </li>
                      </ul>
                    </div>
                    <div className="h-48 md:h-auto relative bg-slate-200 dark:bg-slate-800">
                      <img
                        alt="Room Interior"
                        className="absolute inset-0 w-full h-full object-cover"
                        data-alt="Modern university lecture hall with rows of seating"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu3lDRPqp_wb814fDDMwn2IFta8o4n4LsNVQGhv8BtEfZ48USh4frtneeW6mca7D7ofETETfU11TBLvXK5GaK7Z4T-fIdY584T7n8ELSdyvBe9STvTk60d2R0w2Ctk1UNJqyaov5cfQRSv74MRfcqfNJ7sm_dgoqosnAFz6Xv6gfNI8d0Oz4nAKlaW2q_Xb8i8etaF4ioB2EYYsTgq4Lld9ig5T8_r9RhKXo79Vc9EDV9SKnww-S70RhSLYe9rKYOWi318vYc3kV8"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <button className="text-xs bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-1.5 rounded hover:bg-white/30 transition-colors flex items-center gap-1">
                          <span className="material-icons text-sm">map</span>
                          View Floorplan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-6">
                  Request Status
                </h3>
                <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[21px] bg-green-500 h-4 w-4 rounded-full border-2 border-white dark:border-[#1A2633]"></div>
                    <div className="pl-2">
                      <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-0.5">
                        Submitted
                      </p>
                      <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                        Request Created
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Oct 20, 09:15 AM by Sarah Smith
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] bg-amber-500 h-4 w-4 rounded-full border-2 border-white dark:border-[#1A2633] ring-4 ring-amber-100 dark:ring-amber-900/30"></div>
                    <div className="pl-2">
                      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-0.5">
                        In Progress
                      </p>
                      <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                        Department Approval
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Pending review by Science Admin
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] bg-slate-300 dark:bg-slate-600 h-4 w-4 rounded-full border-2 border-white dark:border-[#1A2633]"></div>
                    <div className="pl-2 opacity-60">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">
                        Future
                      </p>
                      <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                        Final Confirmation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 flex gap-3 items-start">
                  <span className="material-icons text-blue-500 text-sm mt-0.5">
                    info
                  </span>
                  <p className="text-xs text-blue-700 dark:text-blue-200">
                    This room has a conflicting hold for 5:00 PM on the same
                    day. Please ensure buffer time is respected.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <span className="flex items-center gap-2">
                      <span className="material-icons text-slate-400 text-base">
                        email
                      </span>
                      Contact Requester
                    </span>
                    <span className="material-icons text-slate-400 text-sm">
                      chevron_right
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <span className="flex items-center gap-2">
                      <span className="material-icons text-slate-400 text-base">
                        history
                      </span>
                      View Room History
                    </span>
                    <span className="material-icons text-slate-400 text-sm">
                      chevron_right
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <span className="flex items-center gap-2">
                      <span className="material-icons text-slate-400 text-base">
                        print
                      </span>
                      Print Request
                    </span>
                    <span className="material-icons text-slate-400 text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-[#1A2633] border-t border-slate-200 dark:border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            (c) 2023 University Campus Reserve. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
