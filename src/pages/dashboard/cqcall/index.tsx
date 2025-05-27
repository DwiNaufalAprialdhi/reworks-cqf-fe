import Icon from '@/components/Icons/Icon';
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard';
import Navbar from '@/components/layouts/dashboard/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

export default function CintaQuranCallDashboard() {
      // Sample data - in a real app, this would come from an API
      const callData = [
            {
                  id: "CQC-2023-001",
                  peserta: "Ahmad Fauzi",
                  mentor: "Ust. Abdullah",
                  paket: "Tahsin Dasar",
                  jadwal: "Senin & Kamis, 16:00-17:00 WIB",
                  platform: "WhatsApp Video Call",
                  status: "Aktif",
                  progress: "75%",
                  terakhir: "2023-05-15",
                  catatan: "Perlu fokus pada makhraj huruf Ra'"
            },
            {
                  id: "CQC-2023-002",
                  peserta: "Siti Aminah",
                  mentor: "Ustzh. Fatimah",
                  paket: "Tilawah Lanjutan",
                  jadwal: "Selasa & Jumat, 19:00-20:00 WIB",
                  platform: "Zoom Meeting",
                  status: "Aktif",
                  progress: "60%",
                  terakhir: "2023-05-16",
                  catatan: "Sudah bagus dalam waqaf dan ibtida'"
            },
            {
                  id: "CQC-2023-003",
                  peserta: "Budi Santoso",
                  mentor: "Ust. Muhammad",
                  paket: "Tahsin Pemula",
                  jadwal: "Rabu & Sabtu, 14:00-15:00 WIB",
                  platform: "Telepon Selular",
                  status: "Baru",
                  progress: "15%",
                  terakhir: "2023-05-10",
                  catatan: "Membutuhkan penyesuaian metode"
            },
            {
                  id: "CQC-2023-004",
                  peserta: "Dewi Lestari",
                  mentor: "Ustzh. Aisyah",
                  paket: "Tilawah Tartil",
                  jadwal: "Senin & Kamis, 20:00-21:00 WIB",
                  platform: "Zoom Meeting",
                  status: "Selesai",
                  progress: "100%",
                  terakhir: "2023-05-12",
                  catatan: "Lulus dengan predikat Mumtaz"
            },
            {
                  id: "CQC-2023-005",
                  peserta: "Rudi Hermawan",
                  mentor: "Ust. Ali",
                  paket: "Tahsin Menengah",
                  jadwal: "Selasa & Jumat, 13:00-14:00 WIB",
                  platform: "WhatsApp Video Call",
                  status: "Ditangguhkan",
                  progress: "40%",
                  terakhir: "2023-04-28",
                  catatan: "Peserta cuti sementara"
            }
      ];

      const [search, setSearch] = useState("");
      const [filterStatus, setFilterStatus] = useState("Semua");
      const [filterPlatform, setFilterPlatform] = useState("Semua");
      const [sortProgress, setSortProgress] = useState("default");

      const filteredData = callData
            .filter(item =>
                  item.peserta.toLowerCase().includes(search.toLowerCase()) ||
                  item.id.toLowerCase().includes(search.toLowerCase()) ||
                  item.mentor.toLowerCase().includes(search.toLowerCase())
            )
            .filter(item =>
                  filterStatus === "Semua" ? true : item.status === filterStatus
            )
            .filter(item =>
                  filterPlatform === "Semua" ? true : item.platform === filterPlatform
            )
            .sort((a, b) => {
                  const progressA = parseInt(a.progress);
                  const progressB = parseInt(b.progress);

                  if (sortProgress === "naik") {
                        return progressA - progressB;
                  } else if (sortProgress === "turun") {
                        return progressB - progressA;
                  }
                  return 0;
            });

      return (
            <>
                  <Head>
                        <title>Cinta Quran Call - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-gray-50 p-6'>
                              {/* Header Section */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 lg:gap-0 mb-6'>
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal text-green-800'>
                                          Cinta Quran Call
                                    </h2>
                                    <p className='text-sm text-gray-400'>
                                          Layanan Pendampingan Tahsin & Tilawah Al-Qur&apos;an via Multiplatform
                                    </p>
                              </div>

                              {/* Stats Cards */}
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Total Peserta</p>
                                                      <h3 className="text-2xl font-bold text-green-700">{callData.length}</h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="phone" className="lg:w-6 w-5 h-max text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Aktif</p>
                                                      <h3 className="text-2xl font-bold text-green-700">
                                                            {callData.filter(item => item.status === "Aktif").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="live" className="lg:w-6 w-5 h-max text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Baru</p>
                                                      <h3 className="text-2xl font-bold text-blue-600">
                                                            {callData.filter(item => item.status === "Baru").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-blue-50">
                                                      <Icon name="users" className="lg:w-6 w-5 h-max text-blue-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Selesai</p>
                                                      <h3 className="text-2xl font-bold text-purple-600">
                                                            {callData.filter(item => item.status === "Selesai").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-purple-50">
                                                      <Icon name="check_circle" className="lg:w-6 w-5 h-max text-purple-600" />
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Filter Section */}
                              <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-green-100 mb-6">
                                    <h3 className="font-medium text-green-800 mb-3">Filter & Pencarian</h3>
                                    <div className="w-full flex flex-wrap items-center gap-4">
                                          {/* Input Pencarian */}
                                          <div className="w-full md:w-[260px]">
                                                <div className="relative">
                                                      <input
                                                            type="text"
                                                            placeholder="Cari Peserta / ID / Mentor"
                                                            className="w-full px-4 py-2 pl-10 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none"
                                                            value={search}
                                                            onChange={(e) => setSearch(e.target.value)}
                                                      />
                                                      <Icon name="search" className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Filter Status */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={filterStatus}
                                                            onChange={(e) => setFilterStatus(e.target.value)}
                                                      >
                                                            <option value="Semua">Semua Status</option>
                                                            <option value="Aktif">Aktif</option>
                                                            <option value="Baru">Baru</option>
                                                            <option value="Selesai">Selesai</option>
                                                            <option value="Ditangguhkan">Ditangguhkan</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Filter Platform */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={filterPlatform}
                                                            onChange={(e) => setFilterPlatform(e.target.value)}
                                                      >
                                                            <option value="Semua">Semua Platform</option>
                                                            <option value="WhatsApp Video Call">WhatsApp Video</option>
                                                            <option value="Zoom Meeting">Zoom Meeting</option>
                                                            <option value="Telepon Selular">Telepon Selular</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Urutkan Progress */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={sortProgress}
                                                            onChange={(e) => setSortProgress(e.target.value)}
                                                      >
                                                            <option value="default">Urutkan Progress</option>
                                                            <option value="naik">Progress Terendah</option>
                                                            <option value="turun">Progress Tertinggi</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Call Sessions Table */}
                              <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-green-100">
                                    <div className="p-4 border-b border-green-100 bg-green-50">
                                          <h3 className="font-semibold text-green-800">Sesi Pendampingan</h3>
                                    </div>
                                    <div className="w-full overflow-x-auto">
                                          <table className="min-w-full w-full table-auto text-sm">
                                                <thead className="bg-green-50 text-green-800">
                                                      <tr>
                                                            <th className="p-4 text-left w-[120px]">ID Sesi</th>
                                                            <th className="p-4 text-left min-w-[150px]">Peserta</th>
                                                            <th className="p-4 text-left min-w-[150px]">Mentor</th>
                                                            <th className="p-4 text-left w-[120px]">Paket</th>
                                                            <th className="p-4 text-left w-[180px]">Jadwal</th>
                                                            <th className="p-4 text-left w-[140px]">Platform</th>
                                                            <th className="p-4 text-left w-[100px]">Status</th>
                                                            <th className="p-4 text-left w-[120px]">Progress</th>
                                                            <th className="p-4 text-left w-[120px]">Terakhir</th>
                                                            <th className="p-4 text-center w-[100px]">Aksi</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {filteredData.map((item, idx) => (
                                                            <tr
                                                                  key={item.id}
                                                                  className={idx % 2 === 0 ? "bg-white" : "bg-green-50"}
                                                            >
                                                                  <td className="p-4 whitespace-nowrap font-medium text-green-700">{item.id}</td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <Link href={`/dashboard/cqcall/${item.id}`} className="font-medium text-green-900 hover:text-green-700 hover:underline">
                                                                              {item.peserta}
                                                                        </Link>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.mentor}</td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.paket}</td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.jadwal}</td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <div className="flex items-center">
                                                                              {item.platform === "WhatsApp Video Call" && (
                                                                                    <Icon name="whatsapp" className="w-4 h-4 text-green-500 mr-2" />
                                                                              )}
                                                                              {item.platform === "Zoom Meeting" && (
                                                                                    <Icon name="zoom_meeting" className="w-4 h-4 text-blue-500 mr-2" />
                                                                              )}
                                                                              {item.platform === "Telepon Selular" && (
                                                                                    <Icon name="phone" className="w-4 h-4 text-gray-500 mr-2" />
                                                                              )}
                                                                              <span>{item.platform}</span>
                                                                        </div>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${item.status === "Aktif"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : item.status === "Baru"
                                                                                    ? "bg-blue-100 text-blue-800"
                                                                                    : item.status === "Selesai"
                                                                                          ? "bg-purple-100 text-purple-800"
                                                                                          : "bg-gray-100 text-gray-800"
                                                                              }`}>
                                                                              {item.status}
                                                                        </span>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                                              <div
                                                                                    className={`h-2 rounded-full ${parseInt(item.progress) < 30
                                                                                          ? "bg-red-500"
                                                                                          : parseInt(item.progress) < 70
                                                                                                ? "bg-yellow-500"
                                                                                                : "bg-green-500"}`}
                                                                                    style={{ width: item.progress }}
                                                                              ></div>
                                                                        </div>
                                                                        <span className="text-xs text-gray-500 mt-1">{item.progress}</span>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.terakhir}</td>
                                                                  <td className="p-4 text-center">
                                                                        <div className="flex justify-center space-x-2">
                                                                              <Link
                                                                                    href={`/dashboard/cqcall/${item.id}`}
                                                                                    className="p-2 rounded-lg hover:bg-green-100 transition-colors duration-200"
                                                                                    title="Detail"
                                                                              >
                                                                                    <Icon name="eye" className="w-4 h-4 text-green-600" />
                                                                              </Link>
                                                                              <button
                                                                                    className="p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                                                                                    title="Jadwalkan Ulang"
                                                                              >
                                                                                    <Icon name="calendar" className="w-4 h-4 text-blue-600" />
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    {filteredData.length === 0 && (
                                          <div className="w-full p-8 text-center">
                                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-3">
                                                      <Icon name="frown" className="w-8 h-8 text-gray-400" />
                                                </div>
                                                <h4 className="text-gray-600 font-medium">Tidak ada sesi yang ditemukan</h4>
                                                <p className="text-sm text-gray-500">Coba ubah filter pencarian Anda</p>
                                          </div>
                                    )}
                              </div>

                              {/* Call to Action */}
                              <div className="mt-6 flex justify-end">
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center">
                                          <Icon name="plus" className="w-4 h-4 mr-2" />
                                          Tambah Sesi Baru
                                    </button>
                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      );
}