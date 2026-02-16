import React from "react";
import { Link } from "react-router-dom";

export const RoomSchedulePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="flex mb-6">
          <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="/rooms/schedule"
              >
                Buildings
              </Link>
            </li>
            <li>
              <span className="material-icons text-base align-middle text-slate-400">
                chevron_right
              </span>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="/rooms/schedule"
              >
                Engineering Hall
              </Link>
            </li>
            <li>
              <span className="material-icons text-base align-middle text-slate-400">
                chevron_right
              </span>
            </li>
            <li
              aria-current="page"
              className="font-medium text-slate-900 dark:text-white"
            >
              Room 304
            </li>
          </ol>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="relative h-48 sm:h-64 lg:h-56 bg-slate-200">
                <img
                  alt="Bright university lecture hall with rows of desks"
                  className="w-full h-full object-cover"
                  data-alt="Modern classroom with desks and whiteboard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz5bPbNPN3z1W4xP5hNnNNuMQmMviR4XJzuRIv9TCRKyRuJvZjcYdPHWSsCG4cXG0ZWRrHpN_vsk4ZoWU5uaEX91SdyZCNuuDRcPQl43ronksOtUNpxiyAbmefyhtd7JJ4cRMm1AQWgVInHdQb63r5UrTYPBuNmk6ZlC3Flj7idu05eRtHZ1dPMEjyVcvJqWJDPG_vSLyWe4o8dm5NEr9irFB_cva2xSw1uDeQvItcYS29ZLPXSbbfqJ06PwmgQyDM6GfuWEJN4kA"
                />
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded border border-green-200 uppercase tracking-wide">
                  Available Now
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Lecture Hall B (304)
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  Engineering Hall, 3rd Floor
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="material-icons text-primary">groups</span>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                        Capacity
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        45 Seats
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="material-icons text-primary">
                      square_foot
                    </span>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                        Size
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        950 sq ft
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                    Amenities
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-icons text-primary text-lg mr-2">
                        videocam
                      </span>
                      HD Video Conferencing System
                    </li>
                    <li className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-icons text-primary text-lg mr-2">
                        present_to_all
                      </span>
                      Dual 4K Projectors
                    </li>
                    <li className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-icons text-primary text-lg mr-2">
                        wifi
                      </span>
                      High-Speed Faculty Wi-Fi
                    </li>
                    <li className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-icons text-primary text-lg mr-2">
                        accessible
                      </span>
                      Wheelchair Accessible
                    </li>
                    <li className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-icons text-primary text-lg mr-2">
                        ac_unit
                      </span>
                      Climate Control
                    </li>
                  </ul>
                </div>
                <hr className="border-slate-200 dark:border-slate-700 mb-6" />
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
                    Admin Controls
                  </div>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                    <span className="material-icons text-sm mr-2">edit</span>
                    Edit Room Details
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">
                    <span className="material-icons text-sm mr-2">block</span>
                    Deactivate Room
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex gap-3">
                <span className="material-icons text-primary">info</span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Need special equipment?
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Contact AV Services at extension 5502 at least 24 hours
                    before your booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 h-full flex flex-col">
              <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Weekly Schedule
                  </h2>
                  <div className="flex bg-slate-100 dark:bg-slate-800 rounded p-1">
                    <button className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded shadow-sm transition-all text-slate-600 dark:text-slate-300">
                      <span className="material-icons text-base">
                        chevron_left
                      </span>
                    </button>
                    <button className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded shadow-sm transition-all text-slate-600 dark:text-slate-300">
                      <span className="material-icons text-base">
                        chevron_right
                      </span>
                    </button>
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Oct 23 - Oct 29, 2023
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-primary"></div>
                    <span className="text-slate-500 dark:text-slate-400">
                      Booked
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-slate-300 dark:bg-slate-700 pattern-diagonal-lines"></div>
                    <span className="text-slate-500 dark:text-slate-400">
                      Maintenance
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700"></div>
                    <span className="text-slate-500 dark:text-slate-400">
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-grow overflow-x-auto">
                <div className="min-w-[800px] p-6 pt-2">
                  <div className="grid grid-cols-8 gap-4 mb-4 text-center border-b border-slate-200 dark:border-slate-800 pb-2 sticky top-0 bg-white dark:bg-slate-900 z-10">
                    <div className="col-span-1 text-xs font-semibold text-slate-400 uppercase pt-2">
                      Time
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        Mon
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        23
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        Tue
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        24
                      </div>
                    </div>
                    <div className="col-span-1 relative">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-lg"></div>
                      <div className="text-xs font-bold text-primary uppercase">
                        Wed
                      </div>
                      <div className="text-lg font-bold text-primary">25</div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        Thu
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        26
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        Fri
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        27
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        Sat
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white text-opacity-50">
                        28
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        Sun
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white text-opacity-50">
                        29
                      </div>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-8 gap-4 text-sm h-[600px] overflow-y-auto scrollbar-hide pr-2">
                    <div className="col-span-1 flex flex-col justify-between text-xs text-slate-400 font-medium text-right pr-4 py-2 border-r border-slate-100 dark:border-slate-800">
                      <div>08:00</div>
                      <div>09:00</div>
                      <div>10:00</div>
                      <div>11:00</div>
                      <div>12:00</div>
                      <div>13:00</div>
                      <div>14:00</div>
                      <div>15:00</div>
                      <div>16:00</div>
                      <div>17:00</div>
                    </div>
                    <div className="absolute top-0 right-0 left-[12.5%] bottom-0 flex flex-col justify-between pointer-events-none z-0">
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                      <div className="border-t border-slate-100 dark:border-slate-800 h-full"></div>
                    </div>
                    <div className="absolute left-[12.5%] right-0 top-[27.5%] border-t-2 border-red-400 border-dashed z-20 pointer-events-none opacity-60">
                      <span className="absolute -left-1 -top-1.5 w-3 h-3 bg-red-400 rounded-full"></span>
                    </div>
                    <div className="col-span-1 relative h-full">
                      <div className="absolute top-[10%] left-0 right-0 h-[15%] bg-primary/10 border-l-4 border-primary rounded-sm p-2 cursor-pointer hover:bg-primary/20 transition-colors z-10">
                        <div className="text-xs font-bold text-primary truncate">
                          BIO 101 - Intro
                        </div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400 truncate">
                          09:00 - 10:30
                        </div>
                      </div>
                      <div className="absolute top-[30%] left-0 right-0 h-[10%] hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded cursor-pointer group flex items-center justify-center border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all z-0">
                        <span className="material-icons text-primary opacity-0 group-hover:opacity-100 text-lg">
                          add_circle
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1 relative h-full">
                      <div className="absolute top-[40%] left-0 right-0 h-[10%] bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-sm p-2 cursor-pointer z-10">
                        <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 truncate">
                          Dept Meeting
                        </div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400 truncate">
                          12:00 - 13:00
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 relative h-full bg-primary/5 dark:bg-primary/5 -mx-2 px-2 rounded">
                      <div
                        className="absolute top-[0%] left-0 right-0 h-[10%] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm p-2 flex flex-col justify-center items-center z-10"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 10px)",
                        }}
                      >
                        <span className="material-icons text-slate-400 text-sm">
                          build
                        </span>
                        <div className="text-[10px] text-slate-500 font-medium mt-1">
                          Maintenance
                        </div>
                      </div>
                      <div className="absolute top-[60%] left-0 right-0 h-[15%] bg-primary border border-primary text-white rounded-sm p-2 shadow-md z-10">
                        <div className="text-xs font-bold truncate">
                          CS 302 - Algorithms
                        </div>
                        <div className="text-[10px] text-white/80 truncate">
                          14:00 - 15:30
                        </div>
                        <div className="text-[10px] text-white/80 truncate mt-1">
                          Prof. Alan
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 relative h-full">
                      <div className="absolute top-[20%] left-0 right-0 h-[20%] bg-primary/10 border-l-4 border-primary rounded-sm p-2 cursor-pointer hover:bg-primary/20 transition-colors z-10">
                        <div className="text-xs font-bold text-primary truncate">
                          CHEM 201 Lab
                        </div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400 truncate">
                          10:00 - 12:00
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 relative h-full">
                      <div className="absolute top-[50%] left-0 right-0 h-[10%] bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-sm p-2 cursor-pointer z-10">
                        <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 truncate">
                          Student Union
                        </div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400 truncate">
                          13:00 - 14:00
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 relative h-full bg-slate-50/50 dark:bg-slate-800/30"></div>
                    <div className="col-span-1 relative h-full bg-slate-50/50 dark:bg-slate-800/30"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-b-lg flex justify-between items-center">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Click on an empty slot to request a booking. Admin approval
                  may be required.
                </span>
                <Link
                  className="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1"
                  to="/rooms/schedule"
                >
                  View Full Month
                  <span className="material-icons text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
