import React from "react";
import { Link } from "react-router-dom";

export const CreateBookingPage: React.FC = () => {
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
              <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <div className="p-6 space-y-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      htmlFor="room-select"
                    >
                      Select Room
                    </label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-icons text-neutral-400 text-xl">
                          meeting_room
                        </span>
                      </div>
                      <input
                        className="block w-full pl-10 pr-10 py-2.5 border-neutral-300 dark:border-neutral-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm placeholder-neutral-400"
                        id="room-select"
                        placeholder="Search rooms (e.g. 'Lab 304' or 'Lecture Hall A')..."
                        type="text"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="material-icons text-neutral-400 text-xl">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-primary flex items-center gap-1">
                      <span className="material-icons text-sm">info</span>
                      Selected: Computer Lab 304 (Capacity: 30)
                    </p>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      htmlFor="purpose"
                    >
                      Purpose of Booking
                    </label>
                    <textarea
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-neutral-300 dark:border-neutral-600 dark:bg-[#0f172a] rounded-lg p-3"
                      id="purpose"
                      placeholder="Describe the event (e.g., 'Weekly Study Group for CS101')..."
                      rows={3}
                    ></textarea>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      htmlFor="attendees"
                    >
                      Number of Attendees
                    </label>
                    <div className="relative rounded-md shadow-sm w-1/3">
                      <input
                        className="focus:ring-primary focus:border-primary block w-full pl-3 pr-10 sm:text-sm border-neutral-300 dark:border-neutral-600 dark:bg-[#0f172a] rounded-lg py-2"
                        id="attendees"
                        name="attendees"
                        placeholder="0"
                        type="number"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="material-icons text-neutral-400 text-sm">
                          people
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1e293b] flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide">
                    Schedule
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Duration: 2 hours
                  </span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                        Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-icons text-neutral-400 text-xl">
                            calendar_today
                          </span>
                        </div>
                        <input
                          className="block w-full pl-10 pr-3 py-2 border-neutral-300 dark:border-neutral-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm text-neutral-600 dark:text-neutral-200"
                          type="date"
                          defaultValue="2023-10-25"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                        Start Time
                      </label>
                      <div className="relative">
                        <input
                          className="block w-full py-2 px-3 border-neutral-300 dark:border-neutral-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                          type="time"
                          defaultValue="14:00"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                        End Time
                      </label>
                      <div className="relative">
                        <input
                          className="block w-full py-2 px-3 border-neutral-300 dark:border-neutral-600 dark:bg-[#0f172a] rounded-lg focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                          type="time"
                          defaultValue="16:00"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-100 dark:border-red-800 hidden">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <span className="material-icons text-red-400">
                          error
                        </span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                          Time Conflict Detected
                        </h3>
                        <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                          <p>
                            Room 304 is already booked from 15:30 to 17:00 on
                            this date. Please adjust your end time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 pt-4">
                <button
                  className="bg-white dark:bg-transparent py-2.5 px-6 border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-sm text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  type="submit"
                >
                  Submit Booking
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white dark:bg-[#1e293b] shadow-lg rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                  <div className="p-4 border-b border-neutral-100 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1e293b] flex justify-between items-center">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      Room Availability
                    </h3>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
                      Your Slot
                      <span className="w-2 h-2 rounded-full bg-neutral-300 ml-2"></span>{" "}
                      Booked
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between text-sm">
                    <button className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
                      <span className="material-icons text-neutral-500 text-base">
                        chevron_left
                      </span>
                    </button>
                    <span className="font-medium">October 25, 2023</span>
                    <button className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
                      <span className="material-icons text-neutral-500 text-base">
                        chevron_right
                      </span>
                    </button>
                  </div>
                  <div className="relative h-96 overflow-y-auto px-4 pb-4 bg-neutral-50/30 dark:bg-transparent">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 z-0"></div>
                    <div className="space-y-6 relative z-10 pt-4">
                      <div className="flex items-start group">
                        <div className="w-12 text-xs text-neutral-400 pt-1 text-right pr-3">
                          09:00
                        </div>
                        <div className="flex-1 h-12 border-t border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-50 dark:group-hover:bg-white/5 transition-colors"></div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 text-xs text-neutral-400 pt-1 text-right pr-3">
                          10:00
                        </div>
                        <div className="flex-1 relative">
                          <div className="absolute top-0 w-full bg-neutral-200 dark:bg-neutral-700 border-l-4 border-neutral-400 dark:border-neutral-500 p-2 rounded-r-md h-24 text-xs">
                            <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                              Physics 101 Lecture
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400">
                              Prof. Adams
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start h-12">
                        <div className="w-12 text-xs text-neutral-400 pt-1 text-right pr-3">
                          11:00
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-12 text-xs text-neutral-400 pt-1 text-right pr-3">
                          12:00
                        </div>
                        <div className="flex-1 h-12 border-t border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-50 dark:group-hover:bg-white/5 transition-colors"></div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-12 text-xs text-neutral-400 pt-1 text-right pr-3">
                          13:00
                        </div>
                        <div className="flex-1 h-12 border-t border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-50 dark:group-hover:bg-white/5 transition-colors"></div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 text-xs pt-1 text-right pr-3 font-bold text-primary">
                          14:00
                        </div>
                        <div className="flex-1 relative">
                          <div className="absolute top-0 w-full bg-primary/10 border-l-4 border-primary p-2 rounded-r-md h-24 text-xs ring-2 ring-primary ring-opacity-20 z-20">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-bold text-primary">
                                  New Reservation
                                </p>
                                <p className="text-primary/70">14:00 - 16:00</p>
                              </div>
                              <span className="material-icons text-primary text-base">
                                check_circle
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start h-12">
                        <div className="w-12 text-xs text-neutral-400 pt-1 text-right pr-3">
                          15:00
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-12 text-xs text-neutral-400 pt-1 text-right pr-3">
                          16:00
                        </div>
                        <div className="flex-1 h-12 border-t border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-50 dark:group-hover:bg-white/5 transition-colors"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e293b] shadow-sm rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 flex items-start space-x-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                    <img
                      alt="Modern bright office meeting room with glass walls"
                      className="h-full w-full object-cover"
                      data-alt="Modern bright office meeting room with glass walls"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDySmbJh-YWOaDM-3xsUvC1j4enLEBiCHtpYnGoy-fFyWIqVb8NsHvidh5hrm2RLzScHeLxNdLUC8dNI8LfuwcgAq4KSeDFtRN8kOT9xjsbPVqdBfLDTMEcQwnpaflPUPg33x48d7krjGmVyHOlQejo3izqt8qJIGHyJt5mrxSTQH5i8u7tC_KRItdFUT-8MXjgdTeSI3nyguHIExqIRHN1L068D3BstaN5pKkLgSAKDeO5-efmHRAZhKMcVDydnF1kLfjWYTgdUf0"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Computer Lab 304
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      Building A, 3rd Floor
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
                        <span className="material-icons text-[10px] mr-1">
                          wifi
                        </span>{" "}
                        WiFi
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
                        <span className="material-icons text-[10px] mr-1">
                          computer
                        </span>{" "}
                        PC
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
                        <span className="material-icons text-[10px] mr-1">
                          videocam
                        </span>{" "}
                        Projector
                      </span>
                    </div>
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
