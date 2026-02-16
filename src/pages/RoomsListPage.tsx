import React from "react";
import { Link } from "react-router-dom";

export const RoomsListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:text-3xl sm:truncate">
              Daftar Ruangan
            </h2>
            <nav aria-label="Breadcrumb" className="flex">
              <ol className="flex items-center space-x-2 mt-1">
                <li>
                  <Link
                    className="text-sm font-medium text-slate-500 hover:text-primary"
                    to="/dashboard"
                  >
                    Kampus
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-slate-400 text-base">
                    chevron_right
                  </span>
                  <Link
                    aria-current="page"
                    className="ml-2 text-sm font-medium text-primary"
                    to="/rooms"
                  >
                    Cari Ruangan
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Search */}
            <div className="md:col-span-5">
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                htmlFor="search"
              >
                Cari Ruangan
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons text-slate-400 text-lg">
                    search
                  </span>
                </div>
                <input
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg h-10"
                  id="search"
                  name="search"
                  placeholder="Contoh: Lab Komputer, R.101..."
                  type="text"
                />
              </div>
            </div>

            {/* Building Filter */}
            <div className="md:col-span-3">
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                htmlFor="building"
              >
                Gedung
              </label>
              <select
                className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg h-10"
                id="building"
                name="building"
              >
                <option>Semua Gedung</option>
                <option>Gedung A (Fasilkom)</option>
                <option>Gedung B (Ekonomi)</option>
                <option>Gedung C (Teknik)</option>
                <option>Gedung Pusat</option>
              </select>
            </div>

            {/* Capacity Filter */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                htmlFor="capacity"
              >
                Kapasitas Min.
              </label>
              <select
                className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg h-10"
                id="capacity"
                name="capacity"
              >
                <option value="0">Semua</option>
                <option value="10">10+ Orang</option>
                <option value="30">30+ Orang</option>
                <option value="50">50+ Orang</option>
                <option value="100">100+ Orang</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="md:col-span-2">
              <button
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-10"
                type="button"
              >
                <span className="material-icons text-base mr-2">
                  restart_alt
                </span>
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Nama Ruangan
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Gedung
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Kapasitas
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Fasilitas
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Status
                  </th>
                  <th className="relative px-6 py-4" scope="col">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-surface-light dark:bg-surface-dark divide-y divide-slate-200 dark:divide-slate-700">
                {/* Row 1: Available */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-primary/10 text-primary">
                        <span className="material-icons">meeting_room</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          R.101 - Seminar
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Lantai 1
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
                    Gedung A (Fasilkom)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      60 Orang
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2 text-slate-400">
                      <span
                        className="material-icons text-base cursor-help"
                        title="AC"
                      >
                        ac_unit
                      </span>
                      <span
                        className="material-icons text-base cursor-help"
                        title="Proyektor"
                      >
                        videocam
                      </span>
                      <span
                        className="material-icons text-base cursor-help"
                        title="WiFi"
                      >
                        wifi
                      </span>
                      <span
                        className="material-icons text-base cursor-help"
                        title="Papan Tulis"
                      >
                        edit
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800/50">
                      Tersedia
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                      to="/booking/create?roomID=101"
                    >
                      Pesan
                    </Link>
                  </td>
                </tr>

                {/* Row 2: Full */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-slate-50/50 dark:bg-slate-800/20">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-slate-200 dark:bg-slate-700 text-slate-500">
                        <span className="material-icons">computer</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 line-through decoration-slate-400">
                          Lab Komputer Dasar
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Lantai 2
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                    Gedung A (Fasilkom)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      40 Orang
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2 text-slate-300 dark:text-slate-600">
                      <span className="material-icons text-base" title="AC">
                        ac_unit
                      </span>
                      <span
                        className="material-icons text-base"
                        title="Komputer"
                      >
                        computer
                      </span>
                      <span className="material-icons text-base" title="WiFi">
                        wifi
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800/50">
                      Penuh
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="inline-flex items-center px-3 py-1.5 border border-slate-300 dark:border-slate-600 text-xs font-medium rounded shadow-sm text-slate-400 bg-slate-100 dark:bg-slate-800 cursor-not-allowed"
                      disabled
                    >
                      Pesan
                    </button>
                  </td>
                </tr>

                {/* Row 3: Available */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-primary/10 text-primary">
                        <span className="material-icons">class</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          R.205 - Teori
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Lantai 2
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
                    Gedung C (Teknik)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      30 Orang
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2 text-slate-400">
                      <span
                        className="material-icons text-base cursor-help"
                        title="AC"
                      >
                        ac_unit
                      </span>
                      <span
                        className="material-icons text-base cursor-help"
                        title="Papan Tulis"
                      >
                        edit
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800/50">
                      Tersedia
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                      to="/booking/create?roomID=205"
                    >
                      Pesan
                    </Link>
                  </td>
                </tr>

                {/* Row 4: Available */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-primary/10 text-primary">
                        <span className="material-icons">podium</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          Aula Utama
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Lantai Dasar
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
                    Gedung Pusat
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      200 Orang
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2 text-slate-400">
                      <span
                        className="material-icons text-base cursor-help"
                        title="AC"
                      >
                        ac_unit
                      </span>
                      <span
                        className="material-icons text-base cursor-help"
                        title="Sound System"
                      >
                        speaker
                      </span>
                      <span
                        className="material-icons text-base cursor-help"
                        title="Proyektor"
                      >
                        videocam
                      </span>
                      <span
                        className="material-icons text-base cursor-help"
                        title="Panggung"
                      >
                        theater_comedy
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800/50">
                      Tersedia
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                      to="/booking/create?roomID=999"
                    >
                      Pesan
                    </Link>
                  </td>
                </tr>

                {/* Row 5: Full */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-slate-50/50 dark:bg-slate-800/20">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-slate-200 dark:bg-slate-700 text-slate-500">
                        <span className="material-icons">meeting_room</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 line-through decoration-slate-400">
                          R.301 - Diskusi
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Lantai 3
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                    Gedung B (Ekonomi)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      15 Orang
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2 text-slate-300 dark:text-slate-600">
                      <span className="material-icons text-base" title="AC">
                        ac_unit
                      </span>
                      <span
                        className="material-icons text-base"
                        title="Papan Tulis"
                      >
                        edit
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800/50">
                      Penuh
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="inline-flex items-center px-3 py-1.5 border border-slate-300 dark:border-slate-600 text-xs font-medium rounded shadow-sm text-slate-400 bg-slate-100 dark:bg-slate-800 cursor-not-allowed"
                      disabled
                    >
                      Pesan
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-surface-light dark:bg-surface-dark px-4 py-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Menampilkan <span className="font-medium">1</span> sampai{" "}
                  <span className="font-medium">5</span> dari{" "}
                  <span className="font-medium">24</span> hasil
                </p>
              </div>
              <div>
                <nav
                  aria-label="Pagination"
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                >
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700"
                    type="button"
                  >
                    <span className="sr-only">Previous</span>
                    <span className="material-icons text-lg">chevron_left</span>
                  </button>
                  <button
                    aria-current="page"
                    className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    type="button"
                  >
                    3
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-400">
                    ...
                  </span>
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700"
                    type="button"
                  >
                    <span className="sr-only">Next</span>
                    <span className="material-icons text-lg">
                      chevron_right
                    </span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Mobile Pagination */}
            <div className="flex items-center justify-between sm:hidden w-full">
              <button
                className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 text-sm font-medium rounded-md text-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50"
                type="button"
              >
                Previous
              </button>
              <button
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 text-sm font-medium rounded-md text-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50"
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Info / Legend Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-slate-800/60 p-4 rounded-xl border border-blue-100 dark:border-slate-700 flex gap-4">
            <div className="text-primary mt-1">
              <span className="material-icons">info</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Informasi Pemesanan
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Pemesanan ruangan harus dilakukan minimal H-1 sebelum kegiatan.
                Jika ruangan berstatus &quot;Penuh&quot;, silakan cek jadwal
                ketersediaan di hari lain atau hubungi bagian administrasi.
              </p>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">
              Legenda Fasilitas
            </h4>
            <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <span className="material-icons text-base">ac_unit</span> AC
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-base">wifi</span> WiFi
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-base">videocam</span>
                Proyektor
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-base">computer</span>
                Komputer
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-base">speaker</span> Audio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
