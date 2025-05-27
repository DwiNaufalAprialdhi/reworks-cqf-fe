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
                  id: "BBK001",
                  nama: "Kulkas 2 Pintu",
                  deskripsi: "Kulkas merek Panasonic kondisi 90%",
                  kategori: "Elektronik",
                  nilai: "Rp 4.500.000",
                  kondisi: "Baik",
                  lokasi: "Gudang Pusat, Jakarta",
                  status: "Tersedia",
                  tanggalMasuk: "2025-05-10",
                  tanggalDistribusi: "-",
                  penerima: "-",
                  dokumentasi: "https://example.com/foto1.jpg",
                  sertifikat: "https://example.com/sertifikat1.pdf",
                  donatur: "Budi Santoso",
            },
            {
                  id: "BBK002",
                  nama: "Sepeda Listrik",
                  deskripsi: "Sepeda listrik merek United warna hitam",
                  kategori: "Kendaraan",
                  nilai: "Rp 8.200.000",
                  kondisi: "Sangat Baik",
                  lokasi: "Panti Asuhan Al-Ikhlas, Bandung",
                  status: "Didistribusikan",
                  tanggalMasuk: "2025-04-15",
                  tanggalDistribusi: "2025-05-18",
                  penerima: "Panti Asuhan Al-Ikhlas",
                  dokumentasi: "https://example.com/foto2.jpg",
                  sertifikat: "https://example.com/sertifikat2.pdf",
                  donatur: "Siti Aminah",
            },
            {
                  id: "BBK003",
                  nama: "Laptop ASUS",
                  deskripsi: "Laptop ASUS Vivobook core i5 RAM 8GB",
                  kategori: "Elektronik",
                  nilai: "Rp 7.500.000",
                  kondisi: "Baik",
                  lokasi: "Pesantren Darul Quran, Surabaya",
                  status: "Didistribusikan",
                  tanggalMasuk: "2025-03-20",
                  tanggalDistribusi: "2025-04-10",
                  penerima: "Pesantren Darul Quran",
                  dokumentasi: "https://example.com/foto3.jpg",
                  sertifikat: "https://example.com/sertifikat3.pdf",
                  donatur: "Andi Wijaya",
            },
            {
                  id: "BBK004",
                  nama: "Mesin Cuci",
                  deskripsi: "Mesin cuci LG kapasitas 8kg",
                  kategori: "Elektronik",
                  nilai: "Rp 3.200.000",
                  kondisi: "Baik",
                  lokasi: "Gudang Pusat, Jakarta",
                  status: "Tersedia",
                  tanggalMasuk: "2025-05-05",
                  tanggalDistribusi: "-",
                  penerima: "-",
                  dokumentasi: "https://example.com/foto4.jpg",
                  sertifikat: "-",
                  donatur: "Rina Dewi",
            },
            {
                  id: "BBK005",
                  nama: "Motor Honda Beat",
                  deskripsi: "Motor Honda Beat tahun 2020 warna merah",
                  kategori: "Kendaraan",
                  nilai: "Rp 12.000.000",
                  kondisi: "Baik",
                  lokasi: "Rumah Tahfidz Quran, Semarang",
                  status: "Didistribusikan",
                  tanggalMasuk: "2025-02-10",
                  tanggalDistribusi: "2025-03-15",
                  penerima: "Rumah Tahfidz Quran",
                  dokumentasi: "https://example.com/foto5.jpg",
                  sertifikat: "https://example.com/sertifikat5.pdf",
                  donatur: "Dedi Pratama",
            },
      ];

      const [search, setSearch] = useState("");
      const [filterStatus, setFilterStatus] = useState("Semua");
      const [filterKategori, setFilterKategori] = useState("Semua");
      const [sortNilai, setSortNilai] = useState("default");

      const filteredData = data
            .filter(item =>
                  item.nama.toLowerCase().includes(search.toLowerCase()) ||
                  item.id.toLowerCase().includes(search.toLowerCase()) ||
                  item.lokasi.toLowerCase().includes(search.toLowerCase()) ||
                  item.donatur.toLowerCase().includes(search.toLowerCase())
            )
            .filter(item =>
                  filterStatus === "Semua" ? true : item.status === filterStatus
            )
            .filter(item =>
                  filterKategori === "Semua" ? true : item.kategori === filterKategori
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
                        <title>Barang Berkah - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-gray-50 p-6'>
                              {/* Header Section */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 lg:gap-0 mb-6'>
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal text-green-800'>
                                          Barang Berkah Anda
                                    </h2>
                                    <p className='text-sm text-gray-400'>
                                          Wakaf Berkah, Berkah Abadi. Kelola dan pantau barang wakaf Anda dengan mudah
                                    </p>
                              </div>

                              {/* Stats Cards */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Total Barang</p>
                                                      <h3 className="text-2xl font-bold text-green-700">{data.length}</h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="babe" className="lg:w-6 w-5 h-max text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Tersedia</p>
                                                      <h3 className="text-2xl font-bold text-green-700">
                                                            {data.filter(item => item.status === "Tersedia").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="more" className="lg:w-6 w-5 h-max text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Didistribusikan</p>
                                                      <h3 className="text-2xl font-bold text-blue-600">
                                                            {data.filter(item => item.status === "Didistribusikan").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-blue-50">
                                                      <Icon name="truck" className="lg:w-6 w-5 h-max text-blue-600" />
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
                                                            placeholder="Cari Nama / ID / Lokasi / Donatur"
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
                                                            <option value="Tersedia">Tersedia</option>
                                                            <option value="Didistribusikan">Didistribusikan</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Filter Kategori */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={filterKategori}
                                                            onChange={(e) => setFilterKategori(e.target.value)}
                                                      >
                                                            <option value="Semua">Semua Kategori</option>
                                                            <option value="Elektronik">Elektronik</option>
                                                            <option value="Kendaraan">Kendaraan</option>
                                                            <option value="Furniture">Furniture</option>
                                                            <option value="Peralatan">Peralatan</option>
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

                              {/* Available Items Table */}
                              <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-green-100 mb-10">
                                    <div className="p-4 border-b border-green-100 bg-green-50">
                                          <h3 className="font-semibold text-green-800">Barang Wakaf Tersedia</h3>
                                    </div>
                                    <div className="w-full overflow-x-auto">
                                          <table className="min-w-[1800px] w-full table-auto text-sm">
                                                <thead className="bg-green-50 text-green-800">
                                                      <tr>
                                                            <th className="p-4 text-left w-[120px]">ID Barang</th>
                                                            <th className="p-4 text-left min-w-[200px]">Nama Barang</th>
                                                            <th className="p-4 text-left w-[160px]">Kategori / Kondisi</th>
                                                            <th className="p-4 text-left w-[140px]">Nilai</th>
                                                            <th className="p-4 text-left w-[120px]">Status</th>
                                                            <th className="p-4 text-left w-[180px]">Tanggal Masuk</th>
                                                            <th className="p-4 text-left min-w-[180px]">Lokasi Penyimpanan</th>
                                                            <th className="p-4 text-left min-w-[180px]">Donatur</th>
                                                            <th className="p-4 text-center w-[120px]">Dokumentasi</th>
                                                            <th className="p-4 text-center w-[120px]">Sertifikat</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {filteredData.filter(item => item.status === "Tersedia").map((item, idx) => (
                                                            <tr
                                                                  key={item.id}
                                                                  className={idx % 2 === 0 ? "bg-white" : "bg-green-50"}
                                                            >
                                                                  <td className="p-4 whitespace-nowrap font-medium text-green-700">{item.id}</td>
                                                                  <td className="p-4">
                                                                        <Link href={`/dashboard/babe/${item.id}`} className="font-semibold text-green-900 hover:text-green-700 hover:underline">
                                                                              {item.nama}
                                                                        </Link>
                                                                        <p className="text-xs text-gray-500 break-words">{item.deskripsi}</p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <span className="font-medium">{item.kategori}</span>
                                                                        <span className="text-gray-500"> / {item.kondisi}</span>
                                                                  </td>
                                                                  <td className="p-4 text-green-700 font-semibold">{item.nilai}</td>
                                                                  <td className="p-4">
                                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${item.status === "Tersedia"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : "bg-blue-100 text-blue-800"
                                                                              }`}>
                                                                              {item.status}
                                                                        </span>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.tanggalMasuk}</td>
                                                                  <td className="p-4 text-gray-700">{item.lokasi}</td>
                                                                  <td className="p-4 text-gray-700">{item.donatur}</td>
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
                                                                        {item.sertifikat !== "-" ? (
                                                                              <a
                                                                                    href={item.sertifikat}
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
                                    {filteredData.filter(item => item.status === "Tersedia").length === 0 && (
                                          <div className="w-full p-8 text-center">
                                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-3">
                                                      <Icon name="frown" className="w-8 h-8 text-gray-400" />
                                                </div>
                                                <h4 className="text-gray-600 font-medium">Tidak ada barang tersedia yang ditemukan</h4>
                                                <p className="text-sm text-gray-500">Coba ubah filter pencarian Anda</p>
                                          </div>
                                    )}
                              </div>

                              {/* Distributed Items Table */}
                              <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                                          <h3 className="font-semibold text-gray-800">Barang Wakaf Terdistribusi</h3>
                                    </div>
                                    <div className="w-full overflow-x-auto">
                                          <table className="min-w-[1800px] w-full table-auto text-sm">
                                                <thead className="bg-gray-50 text-gray-800">
                                                      <tr>
                                                            <th className="p-4 text-left w-[120px]">ID Barang</th>
                                                            <th className="p-4 text-left min-w-[200px]">Nama Barang</th>
                                                            <th className="p-4 text-left w-[160px]">Kategori / Kondisi</th>
                                                            <th className="p-4 text-left w-[140px]">Nilai</th>
                                                            <th className="p-4 text-left w-[120px]">Status</th>
                                                            <th className="p-4 text-left w-[180px]">Tanggal Distribusi</th>
                                                            <th className="p-4 text-left min-w-[180px]">Penerima</th>
                                                            <th className="p-4 text-left min-w-[180px]">Donatur</th>
                                                            <th className="p-4 text-center w-[120px]">Dokumentasi</th>
                                                            <th className="p-4 text-center w-[120px]">Sertifikat</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {filteredData.filter(item => item.status === "Didistribusikan").map((item, idx) => (
                                                            <tr
                                                                  key={item.id}
                                                                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                                            >
                                                                  <td className="p-4 whitespace-nowrap font-medium text-gray-700">{item.id}</td>
                                                                  <td className="p-4">
                                                                        <Link href={`/dashboard/babe/${item.id}`} className="font-semibold text-green-900 hover:text-green-700 hover:underline">
                                                                              {item.nama}
                                                                        </Link>
                                                                        <p className="text-xs text-gray-500 break-words">{item.deskripsi}</p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <span className="font-medium">{item.kategori}</span>
                                                                        <span className="text-gray-500"> / {item.kondisi}</span>
                                                                  </td>
                                                                  <td className="p-4 text-green-700 font-semibold">{item.nilai}</td>
                                                                  <td className="p-4">
                                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${item.status === "Tersedia"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : "bg-blue-100 text-blue-800"
                                                                              }`}>
                                                                              {item.status}
                                                                        </span>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.tanggalDistribusi}</td>
                                                                  <td className="p-4 text-gray-700">{item.penerima}</td>
                                                                  <td className="p-4 text-gray-700">{item.donatur}</td>
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
                                                                        {item.sertifikat !== "-" ? (
                                                                              <a
                                                                                    href={item.sertifikat}
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
                                    {filteredData.filter(item => item.status === "Didistribusikan").length === 0 && (
                                          <div className="w-full p-8 text-center">
                                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-3">
                                                      <Icon name="frown" className="w-8 h-8 text-gray-400" />
                                                </div>
                                                <h4 className="text-gray-600 font-medium">Tidak ada barang terdistribusi yang ditemukan</h4>
                                                <p className="text-sm text-gray-500">Coba ubah filter pencarian Anda</p>
                                          </div>
                                    )}
                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      )
}