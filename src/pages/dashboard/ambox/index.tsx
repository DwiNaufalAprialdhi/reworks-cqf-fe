/* eslint-disable react-hooks/rules-of-hooks */
import Icon from '@/components/Icons/Icon';
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from 'react'


export default function index() {
      const data = [
            {
                  id: "BOX001",
                  nama: "Kotak Amal Toko Kelontong",
                  deskripsi: "Kotak amal untuk toko kelontong di daerah perkotaan",
                  nilai: "Rp 500.000",
                  jenis: "Toko",
                  lokasi: "Jl. Merdeka No. 12, Jakarta",
                  status: "Aktif",
                  tanggalDistribusi: "2025-05-10",
                  tanggalPengembalian: "-",
                  statusPengembalian: "Belum",
                  dokumentasi: "https://example.com/foto1.jpg",
                  laporan: "https://example.com/laporan1.pdf",
                  penanggungJawab: "Budi Santoso",
            },
            {
                  id: "BOX002",
                  nama: "Kotak Amal Rumah Makan",
                  deskripsi: "Kotak amal untuk rumah makan padang",
                  nilai: "Rp 1.200.000",
                  jenis: "Rumah Makan",
                  lokasi: "Jl. Sudirman No. 45, Bandung",
                  status: "Aktif",
                  tanggalDistribusi: "2025-05-15",
                  tanggalPengembalian: "-",
                  statusPengembalian: "Belum",
                  dokumentasi: "https://example.com/foto2.jpg",
                  laporan: "https://example.com/laporan2.pdf",
                  penanggungJawab: "Siti Aminah",
            },
            {
                  id: "BOX003",
                  nama: "Kotak Amal Minimarket",
                  deskripsi: "Kotak amal untuk minimarket 24 jam",
                  nilai: "Rp 750.000",
                  jenis: "Minimarket",
                  lokasi: "Jl. Gatot Subroto No. 8, Surabaya",
                  status: "Dikembalikan",
                  tanggalDistribusi: "2025-04-20",
                  tanggalPengembalian: "2025-05-18",
                  statusPengembalian: "Lengkap",
                  dokumentasi: "https://example.com/foto3.jpg",
                  laporan: "https://example.com/laporan3.pdf",
                  penanggungJawab: "Andi Wijaya",
            },
            {
                  id: "BOX004",
                  nama: "Kotak Amal Warung Kopi",
                  deskripsi: "Kotak amal untuk warung kopi tradisional",
                  nilai: "Rp 300.000",
                  jenis: "Warung",
                  lokasi: "Jl. Pahlawan No. 33, Yogyakarta",
                  status: "Aktif",
                  tanggalDistribusi: "2025-05-05",
                  tanggalPengembalian: "-",
                  statusPengembalian: "Belum",
                  dokumentasi: "https://example.com/foto4.jpg",
                  laporan: "-",
                  penanggungJawab: "Rina Dewi",
            },
            {
                  id: "BOX005",
                  nama: "Kotak Amal Apotek",
                  deskripsi: "Kotak amal untuk apotek keluarga",
                  nilai: "Rp 900.000",
                  jenis: "Apotek",
                  lokasi: "Jl. Diponegoro No. 67, Semarang",
                  status: "Dikembalikan",
                  tanggalDistribusi: "2025-04-15",
                  tanggalPengembalian: "2025-05-20",
                  statusPengembalian: "Sebagian",
                  dokumentasi: "https://example.com/foto5.jpg",
                  laporan: "https://example.com/laporan5.pdf",
                  penanggungJawab: "Dedi Pratama",
            },
      ];

      const [search, setSearch] = useState("");
      const [filterStatus, setFilterStatus] = useState("Semua");
      const [filterPengembalian, setFilterPengembalian] = useState("Semua");
      const [sortNilai, setSortNilai] = useState("default");

      const filteredData = data
            .filter(item =>
                  item.nama.toLowerCase().includes(search.toLowerCase()) ||
                  item.id.toLowerCase().includes(search.toLowerCase()) ||
                  item.lokasi.toLowerCase().includes(search.toLowerCase()) ||
                  item.penanggungJawab.toLowerCase().includes(search.toLowerCase())
            )
            .filter(item =>
                  filterStatus === "Semua" ? true : item.status === filterStatus
            )
            .filter(item =>
                  filterPengembalian === "Semua" ? true : item.statusPengembalian === filterPengembalian
            )
            .sort((a, b) => {
                  if (sortNilai === "naik") {
                        return parseInt(a.nilai.replace(/\D/g, '')) - parseInt(b.nilai.replace(/\D/g, ''));
                  } else if (sortNilai === "turun") {
                        return parseInt(b.nilai.replace(/\D/g, '')) - parseInt(a.nilai.replace(/\D/g, ''));
                  }
                  return 0;
            });

      return (
            <>
                  <Head>
                        <title>Amazing Box - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-gray-50 p-6'>
                              {/* Header Section */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 lg:gap-0 mb-6'>
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal text-green-800'>
                                          Amazing Box Anda
                                    </h2>
                                    <p className='text-sm text-gray-400'>
                                          Satu Kotak, Ribuan Kebaikan. Kelola dan pantau kotak amal Anda dengan mudah
                                    </p>
                              </div>

                              {/* Stats Cards */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Total Kotak</p>
                                                      <h3 className="text-2xl font-bold text-green-700">{data.length}</h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="ambox" className="lg:w-6 w-5 h-max text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Aktif</p>
                                                      <h3 className="text-2xl font-bold text-green-700">
                                                            {data.filter(item => item.status === "Aktif").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="live" className="lg:w-6 w-5 h-max text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Dikembalikan</p>
                                                      <h3 className="text-2xl font-bold text-blue-600">
                                                            {data.filter(item => item.status === "Dikembalikan").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-blue-50">
                                                      <Icon name="check_circle" className="lg:w-6 w-5 h-max text-blue-600" />
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
                                                            placeholder="Cari Nama / ID / Lokasi / Penanggung Jawab"
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
                                                            <option value="Dikembalikan">Dikembalikan</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Filter Status Pengembalian */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={filterPengembalian}
                                                            onChange={(e) => setFilterPengembalian(e.target.value)}
                                                      >
                                                            <option value="Semua">Status Pengembalian</option>
                                                            <option value="Belum">Belum</option>
                                                            <option value="Lengkap">Lengkap</option>
                                                            <option value="Sebagian">Sebagian</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Urutkan Nilai */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={sortNilai}
                                                            onChange={(e) => setSortNilai(e.target.value)}
                                                      >
                                                            <option value="default">Urutkan Nilai</option>
                                                            <option value="naik">Nilai Terendah</option>
                                                            <option value="turun">Nilai Tertinggi</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Current Box Table */}
                              <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-green-100 mb-10">
                                    <div className="p-4 border-b border-green-100 bg-green-50">
                                          <h3 className="font-semibold text-green-800">Kotak Amal Aktif</h3>
                                    </div>
                                    <div className="w-full overflow-x-auto">
                                          <table className="min-w-[1800px] w-full table-auto text-sm">
                                                <thead className="bg-green-50 text-green-800">
                                                      <tr>
                                                            <th className="p-4 text-left w-[120px]">ID Kotak</th>
                                                            <th className="p-4 text-left min-w-[200px]">Nama Kotak</th>
                                                            <th className="p-4 text-left w-[160px]">Jenis / Lokasi</th>
                                                            <th className="p-4 text-left w-[140px]">Nilai</th>
                                                            <th className="p-4 text-left w-[120px]">Status</th>
                                                            <th className="p-4 text-left w-[180px]">Tanggal Distribusi</th>
                                                            <th className="p-4 text-left w-[180px]">Status Pengembalian</th>
                                                            <th className="p-4 text-left min-w-[180px]">Penanggung Jawab</th>
                                                            <th className="p-4 text-center w-[120px]">Dokumentasi</th>
                                                            <th className="p-4 text-center w-[120px]">Laporan</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {filteredData.filter(item => item.status === "Aktif").map((item, idx) => (
                                                            <tr
                                                                  key={item.id}
                                                                  className={idx % 2 === 0 ? "bg-white" : "bg-green-50"}
                                                            >
                                                                  <td className="p-4 whitespace-nowrap font-medium text-green-700">{item.id}</td>
                                                                  <td className="p-4">
                                                                        <Link href={`/dashboard/ambox/${item.id}`} className="font-semibold text-green-900 hover:text-green-700 hover:underline">
                                                                              {item.nama}
                                                                        </Link>
                                                                        <p className="text-xs text-gray-500 break-words">{item.deskripsi}</p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <span className="font-medium">{item.jenis}</span>
                                                                        <span className="text-gray-500"> / {item.lokasi}</span>
                                                                  </td>
                                                                  <td className="p-4 text-green-700 font-semibold">{item.nilai}</td>
                                                                  <td className="p-4">
                                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${item.status === "Aktif"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : "bg-blue-100 text-blue-800"
                                                                              }`}>
                                                                              {item.status}
                                                                        </span>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.tanggalDistribusi}</td>
                                                                  <td className="p-4">
                                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${item.statusPengembalian === "Lengkap"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : item.statusPengembalian === "Sebagian"
                                                                                    ? "bg-yellow-100 text-yellow-800"
                                                                                    : "bg-gray-100 text-gray-800"
                                                                              }`}>
                                                                              {item.statusPengembalian}
                                                                        </span>
                                                                        {item.tanggalPengembalian !== "-" && (
                                                                              <p className="text-xs text-gray-500 mt-1">{item.tanggalPengembalian}</p>
                                                                        )}
                                                                  </td>
                                                                  <td className="p-4 text-gray-700">{item.penanggungJawab}</td>
                                                                  <td className="p-4 text-center">
                                                                        {item.dokumentasi !== "-" ? (
                                                                              <a
                                                                                    href={item.dokumentasi}
                                                                                    className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-green-100 duration-200"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                              >
                                                                                    <Icon name="eye" className='w-5 h-5 text-green-600' />
                                                                              </a>
                                                                        ) : (
                                                                              <span className="text-gray-400">-</span>
                                                                        )}
                                                                  </td>
                                                                  <td className="p-4 text-center">
                                                                        {item.laporan !== "-" ? (
                                                                              <a
                                                                                    href={item.laporan}
                                                                                    className='inline-flex items-center justify-center p-2 rounded-lg hover:bg-green-100 duration-200'
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                              >
                                                                                    <Icon name="download" className='w-5 h-5 text-green-600' />
                                                                              </a>
                                                                        ) : (
                                                                              <span className="text-gray-400">-</span>
                                                                        )}
                                                                  </td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    {filteredData.filter(item => item.status === "Aktif").length === 0 && (
                                          <div className="w-full p-8 text-center">
                                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-3">
                                                      <Icon name="frown" className="w-8 h-8 text-gray-400" />
                                                </div>
                                                <h4 className="text-gray-600 font-medium">Tidak ada kotak aktif yang ditemukan</h4>
                                                <p className="text-sm text-gray-500">Coba ubah filter pencarian Anda</p>
                                          </div>
                                    )}
                              </div>

                              {/* History Box Table */}
                              <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                                          <h3 className="font-semibold text-gray-800">History Kotak Amal</h3>
                                    </div>
                                    <div className="w-full overflow-x-auto">
                                          <table className="min-w-[1800px] w-full table-auto text-sm">
                                                <thead className="bg-gray-50 text-gray-800">
                                                      <tr>
                                                            <th className="p-4 text-left w-[120px]">ID Kotak</th>
                                                            <th className="p-4 text-left min-w-[200px]">Nama Kotak</th>
                                                            <th className="p-4 text-left w-[160px]">Jenis / Lokasi</th>
                                                            <th className="p-4 text-left w-[140px]">Nilai</th>
                                                            <th className="p-4 text-left w-[120px]">Status</th>
                                                            <th className="p-4 text-left w-[180px]">Tanggal Distribusi</th>
                                                            <th className="p-4 text-left w-[180px]">Status Pengembalian</th>
                                                            <th className="p-4 text-left min-w-[180px]">Penanggung Jawab</th>
                                                            <th className="p-4 text-center w-[120px]">Dokumentasi</th>
                                                            <th className="p-4 text-center w-[120px]">Laporan</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {filteredData.filter(item => item.status === "Dikembalikan").map((item, idx) => (
                                                            <tr
                                                                  key={item.id}
                                                                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                                            >
                                                                  <td className="p-4 whitespace-nowrap font-medium text-gray-700">{item.id}</td>
                                                                  <td className="p-4">
                                                                        <Link href={`/dashboard/ambox/${item.id}`} className="font-semibold text-green-900 hover:text-green-700 hover:underline">
                                                                              {item.nama}
                                                                        </Link>
                                                                        <p className="text-xs text-gray-500 break-words">{item.deskripsi}</p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <span className="font-medium">{item.jenis}</span>
                                                                        <span className="text-gray-500"> / {item.lokasi}</span>
                                                                  </td>
                                                                  <td className="p-4 text-green-700 font-semibold">{item.nilai}</td>
                                                                  <td className="p-4">
                                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${item.status === "Aktif"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : "bg-blue-100 text-blue-800"
                                                                              }`}>
                                                                              {item.status}
                                                                        </span>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.tanggalDistribusi}</td>
                                                                  <td className="p-4">
                                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${item.statusPengembalian === "Lengkap"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : item.statusPengembalian === "Sebagian"
                                                                                    ? "bg-yellow-100 text-yellow-800"
                                                                                    : "bg-gray-100 text-gray-800"
                                                                              }`}>
                                                                              {item.statusPengembalian}
                                                                        </span>
                                                                        {item.tanggalPengembalian !== "-" && (
                                                                              <p className="text-xs text-gray-500 mt-1">{item.tanggalPengembalian}</p>
                                                                        )}
                                                                  </td>
                                                                  <td className="p-4 text-gray-700">{item.penanggungJawab}</td>
                                                                  <td className="p-4 text-center">
                                                                        {item.dokumentasi !== "-" ? (
                                                                              <a
                                                                                    href={item.dokumentasi}
                                                                                    className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 duration-200"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                              >
                                                                                    <Icon name="eye" className='w-5 h-5 text-gray-600' />
                                                                              </a>
                                                                        ) : (
                                                                              <span className="text-gray-400">-</span>
                                                                        )}
                                                                  </td>
                                                                  <td className="p-4 text-center">
                                                                        {item.laporan !== "-" ? (
                                                                              <a
                                                                                    href={item.laporan}
                                                                                    className='inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 duration-200'
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                              >
                                                                                    <Icon name="download" className='w-5 h-5 text-gray-600' />
                                                                              </a>
                                                                        ) : (
                                                                              <span className="text-gray-400">-</span>
                                                                        )}
                                                                  </td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    {filteredData.filter(item => item.status === "Dikembalikan").length === 0 && (
                                          <div className="w-full p-8 text-center">
                                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-3">
                                                      <Icon name="frown" className="w-8 h-8 text-gray-400" />
                                                </div>
                                                <h4 className="text-gray-600 font-medium">Tidak ada history kotak yang ditemukan</h4>
                                                <p className="text-sm text-gray-500">Coba ubah filter pencarian Anda</p>
                                          </div>
                                    )}
                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      )
}