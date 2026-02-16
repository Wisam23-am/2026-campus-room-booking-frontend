import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminLayout } from "../components/layouts/AdminLayout";

export const AdminRoomsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout headerTitle="Room Management">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Room Management
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Manage campus facilities, view statuses, and update room details.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            type="button"
            onClick={() => navigate("/admin/rooms/create")}
          >
            <span className="material-icons text-[1.25rem]">add</span>
            Add New Room
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Total Rooms
              </p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                142
              </h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-icons">apartment</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Active Labs
              </p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                28
              </h3>
            </div>
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
              <span className="material-icons">science</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Under Maintenance
              </p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                4
              </h3>
            </div>
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600">
              <span className="material-icons">build</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Avg. Capacity
              </p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                45
              </h3>
            </div>
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-600">
              <span className="material-icons">groups</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="relative w-full lg:w-96">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Search by Room ID, Name, or Building..."
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <button className="px-3 py-1.5 text-xs font-medium rounded bg-white dark:bg-slate-800 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
                  All Types
                </button>
                <button className="px-3 py-1.5 text-xs font-medium rounded text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  Classroom
                </button>
                <button className="px-3 py-1.5 text-xs font-medium rounded text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  Lab
                </button>
                <button className="px-3 py-1.5 text-xs font-medium rounded text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  Seminar
                </button>
              </div>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
              <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <span className="material-icons text-slate-400 text-base">
                  filter_list
                </span>
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-16">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-800 dark:border-slate-600"
                      type="checkbox"
                    />
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 cursor-pointer group hover:text-primary transition-colors">
                    <div className="flex items-center gap-1">
                      Room ID
                      <span className="material-icons text-[14px] text-slate-400 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        arrow_downward
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Name / Description
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Building
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Type
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">
                    Capacity
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Status
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                  <td className="py-4 px-6">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-800 dark:border-slate-600"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                      R-101
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary"
                        data-alt="Blue science lab icon placeholder"
                      >
                        <span className="material-icons">science</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Chemistry Lab A
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Projector, Fume Hood
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Science Wing
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
                      Laboratory
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      30
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Active
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-icons text-lg">edit</span>
                      </button>
                      <button
                        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                        title="Delete"
                      >
                        <span className="material-icons text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                  <td className="py-4 px-6">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-800 dark:border-slate-600"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                      R-204
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600"
                        data-alt="Orange classroom icon placeholder"
                      >
                        <span className="material-icons">school</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Main Lecture Hall
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Tiered Seating, AV System
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Central Block
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200">
                      Lecture Hall
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      120
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Active
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-icons text-lg">edit</span>
                      </button>
                      <button
                        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                        title="Delete"
                      >
                        <span className="material-icons text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                  <td className="py-4 px-6">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-800 dark:border-slate-600"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                      R-105
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600"
                        data-alt="Purple seminar icon placeholder"
                      >
                        <span className="material-icons">meeting_room</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Seminar Room B
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Whiteboard, Conference Phone
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      East Wing
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
                      Seminar
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      15
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Inactive
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-icons text-lg">edit</span>
                      </button>
                      <button
                        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                        title="Delete"
                      >
                        <span className="material-icons text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                  <td className="py-4 px-6">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-800 dark:border-slate-600"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                      R-302
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600"
                        data-alt="Teal computer lab icon placeholder"
                      >
                        <span className="material-icons">computer</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Computer Lab 2
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          30 Workstations
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Tech Center
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
                      Laboratory
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      32
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                        Maintenance
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-icons text-lg">edit</span>
                      </button>
                      <button
                        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                        title="Delete"
                      >
                        <span className="material-icons text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                  <td className="py-4 px-6">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-800 dark:border-slate-600"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                      R-220
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600"
                        data-alt="Orange classroom icon placeholder"
                      >
                        <span className="material-icons">class</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          History Classroom
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Map displays
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      West Wing
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200">
                      Classroom
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      40
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Active
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-icons text-lg">edit</span>
                      </button>
                      <button
                        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                        title="Delete"
                      >
                        <span className="material-icons text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span>Rows per page:</span>
              <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <span className="hidden sm:inline ml-2">1-10 of 142</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 disabled:opacity-50"
                disabled
              >
                <span className="material-icons text-lg">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-sm font-medium">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">
                3
              </button>
              <span className="px-2 text-slate-400">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">
                15
              </button>
              <button className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400">
                <span className="material-icons text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-600 pb-4">
          <p>(c) 2023 CampusBook System. All rights reserved.</p>
        </footer>
      </div>
    </AdminLayout>
  );
};
