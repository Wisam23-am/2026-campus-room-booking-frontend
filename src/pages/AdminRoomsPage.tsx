import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export const AdminRoomsPage: React.FC = () => {
  const rooms = [
    { id: 1, name: 'Lab Komputer 1', building: 'Gedung A', floor: 3, capacity: 40, category: 'Lab' },
    { id: 2, name: 'Ruang Seminar A', building: 'Gedung B', floor: 2, capacity: 30, category: 'Seminar' },
    { id: 3, name: 'Meeting Room 101', building: 'Gedung A', floor: 1, capacity: 20, category: 'Meeting' },
  ];

  return (
    <MainLayout userName="Admin Staff" userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Room Management</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Manage campus rooms and facilities</p>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            + Add New Room
          </button>
        </div>

        {/* Rooms Table */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                    Room Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                    Building
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                    Floor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {rooms.map((room) => (
                  <tr key={room.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{room.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{room.building}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{room.floor}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{room.capacity} people</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                        {room.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">Edit</button>
                      <button className="text-red-600 hover:text-red-700">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
