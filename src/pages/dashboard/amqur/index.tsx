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
                  id: "PKT001",
                  nama: "Paket Sapi Premium",
                  deskripsi: "Sapi lokal premium, sehat dan sesuai syariat",
                  harga: "Rp 25.000.000",
                  jenis: "Sapi",
                  berat: "300 - 350 kg",
                  stok: 5,
                  status: "Tersedia",
                  tanggal: "2025-06-15",
                  pembayaran: "Transfer Bank",
                  statusPembayaran: "Lunas",
                  dokumentasi: "https://example.com/foto1.jpg",
                  sertifikat: "https://example.com/sertifikat1.pdf",
                  lokasi: "Lombok, NTB",
            },
            {
                  id: "PKT002",
                  nama: "Paket Kambing Reguler",
                  deskripsi: "Kambing sehat dan terawat, cocok untuk qurban pribadi",
                  harga: "Rp 3.500.000",
                  jenis: "Kambing",
                  berat: "35 - 40 kg",
                  stok: 12,
                  status: "Tersedia",
                  tanggal: "2025-06-20",
                  pembayaran: "E-Wallet",
                  statusPembayaran: "Pending",
                  dokumentasi: "-",
                  sertifikat: "-",
                  lokasi: "Banyumas, Jawa Tengah",
            },
            {
                  id: "PKT003",
                  nama: "Paket Sapi Super",
                  deskripsi: "Sapi limosin impor, bobot besar dan berkualitas",
                  harga: "Rp 35.000.000",
                  jenis: "Sapi",
                  berat: "400 - 450 kg",
                  stok: 2,
                  status: "Tersedia",
                  tanggal: "2025-06-18",
                  pembayaran: "Transfer Bank",
                  statusPembayaran: "Lunas",
                  dokumentasi: "https://example.com/foto3.jpg",
                  sertifikat: "https://example.com/sertifikat3.pdf",
                  lokasi: "Bandung, Jawa Barat",
            },
            {
                  id: "PKT004",
                  nama: "Paket Kambing Ekonomis",
                  deskripsi: "Pilihan terjangkau untuk qurban keluarga",
                  harga: "Rp 2.900.000",
                  jenis: "Kambing",
                  berat: "30 - 35 kg",
                  stok: 20,
                  status: "Tersedia",
                  tanggal: "2025-06-25",
                  pembayaran: "E-Wallet",
                  statusPembayaran: "Pending",
                  dokumentasi: "-",
                  sertifikat: "-",
                  lokasi: "Depok, Jawa Barat",
            },
            {
                  id: "PKT005",
                  nama: "Paket Sapi Kolektif",
                  deskripsi: "Sapi besar untuk 7 orang, cocok untuk patungan",
                  harga: "Rp 28.000.000",
                  jenis: "Sapi",
                  berat: "350 - 400 kg",
                  stok: 3,
                  status: "Tersedia",
                  tanggal: "2025-06-22",
                  pembayaran: "Transfer Bank",
                  statusPembayaran: "Lunas",
                  dokumentasi: "https://example.com/foto5.jpg",
                  sertifikat: "https://example.com/sertifikat5.pdf",
                  lokasi: "Sleman, Yogyakarta",
            },
      ];

      const [search, setSearch] = useState("");
      const [filterStatus, setFilterStatus] = useState("Semua");
      const [sortHarga, setSortHarga] = useState("default");

      const filteredData = data
            .filter(item =>
                  item.nama.toLowerCase().includes(search.toLowerCase()) ||
                  item.id.toLowerCase().includes(search.toLowerCase()) ||
                  item.lokasi.toLowerCase().includes(search.toLowerCase())
            )
            .filter(item =>
                  filterStatus === "Semua" ? true : item.statusPembayaran === filterStatus
            )
            .sort((a, b) => {
                  if (sortHarga === "naik") {
                        return parseInt(a.harga.replace(/\D/g, '')) - parseInt(b.harga.replace(/\D/g, ''));
                  } else if (sortHarga === "turun") {
                        return parseInt(b.harga.replace(/\D/g, '')) - parseInt(a.harga.replace(/\D/g, ''));
                  }
                  return 0;
            });

      return (
            <>
                  <Head>
                        <title>Amazing Qurban - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-gray-50 p-6'>
                              {/* Header Section */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 lg:gap-0 mb-6'>
                                    <h2 className='font-semibold lg:text-[50px] text-[24px] leading-tight text-green-800 font-baloo'>
                                          Amazing Qurban Anda
                                    </h2>
                                    <p className='text-sm text-gray-400'>
                                          Satu Amal Dua Pahala. Kelola dan pantau paket qurban Anda dengan mudah
                                    </p>
                              </div>

                              {/* Stats Cards */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Total Paket</p>
                                                      <h3 className="text-2xl font-bold text-green-700">{data.length}</h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="cow" className="lg:w-9 w-8 h-max text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Lunas</p>
                                                      <h3 className="text-2xl font-bold text-green-700">
                                                            {data.filter(item => item.statusPembayaran === "Lunas").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-green-50">
                                                      <Icon name="check_circle" className="lg:w-6 w-5 h-6 text-green-600" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs text-gray-500">Pending</p>
                                                      <h3 className="text-2xl font-bold text-yellow-600">
                                                            {data.filter(item => item.statusPembayaran === "Pending").length}
                                                      </h3>
                                                </div>
                                                <div className="p-3 rounded-lg bg-yellow-50">
                                                      <Icon name="clock" className="lg:w-6 w-5 h-6 text-yellow-600" />
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
                                                            placeholder="Cari Nama / ID / Lokasi"
                                                            className="w-full px-4 py-2 pl-10 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none"
                                                            value={search}
                                                            onChange={(e) => setSearch(e.target.value)}
                                                      />
                                                      <Icon name="search" className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Filter Status Pembayaran */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={filterStatus}
                                                            onChange={(e) => setFilterStatus(e.target.value)}
                                                      >
                                                            <option value="Semua">Semua Status</option>
                                                            <option value="Lunas">Lunas</option>
                                                            <option value="Pending">Pending</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>

                                          {/* Urutkan Harga */}
                                          <div className="w-full md:w-[200px]">
                                                <div className="relative">
                                                      <select
                                                            className="w-full px-4 py-2 pr-8 lg:text-sm text-xs text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                            value={sortHarga}
                                                            onChange={(e) => setSortHarga(e.target.value)}
                                                      >
                                                            <option value="default">Urutkan Harga</option>
                                                            <option value="naik">Harga Terendah</option>
                                                            <option value="turun">Harga Tertinggi</option>
                                                      </select>
                                                      <Icon name="chevron_down" className="absolute right-3 top-1/2 -translate-y-1/2 lg:w-3 w-2 h-max text-gray-400" />
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Current Qurban Table */}
                              <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-green-100 mb-10">
                                    <div className="p-4 border-b border-green-100 bg-green-50">
                                          <h3 className="font-semibold text-green-800">Paket Qurban Aktif</h3>
                                    </div>
                                    <div className="w-full overflow-x-auto">
                                          <table className="min-w-[1500px] w-full table-auto text-sm">
                                                <thead className="bg-green-50 text-green-800">
                                                      <tr>
                                                            <th className="p-4 text-left w-[120px]">ID Paket</th>
                                                            <th className="p-4 text-left min-w-[200px]">Nama Paket</th>
                                                            <th className="p-4 text-left w-[160px]">Jenis / Berat</th>
                                                            <th className="p-4 text-left w-[140px]">Harga</th>
                                                            <th className="p-4 text-left w-[120px]">Status</th>
                                                            <th className="p-4 text-left w-[180px]">Pembayaran</th>
                                                            <th className="p-4 text-left w-[120px]">Tanggal</th>
                                                            <th className="p-4 text-left min-w-[180px]">Lokasi</th>
                                                            <th className="p-4 text-center w-[120px]">Dokumentasi</th>
                                                            <th className="p-4 text-center w-[120px]">Sertifikat</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {filteredData.map((item, idx) => (
                                                            <tr
                                                                  key={item.id}
                                                                  className={idx % 2 === 0 ? "bg-white" : "bg-green-50"}
                                                            >
                                                                  <td className="p-4 whitespace-nowrap font-medium text-green-700">{item.id}</td>
                                                                  <td className="p-4">
                                                                        <Link href={`/dashboard/amqur/${item.id}`} className="font-semibold text-green-900 hover:text-green-700 hover:underline">
                                                                              {item.nama}
                                                                        </Link>                                                                        <p className="text-xs text-gray-500 break-words">{item.deskripsi}</p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <span className="font-medium">{item.jenis}</span>
                                                                        <span className="text-gray-500"> / {item.berat}</span>
                                                                  </td>
                                                                  <td className="p-4 text-green-700 font-semibold">{item.harga}</td>
                                                                  <td className="p-4">
                                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${item.status === "Tersedia"
                                                                              ? "bg-green-100 text-green-800"
                                                                              : "bg-red-100 text-red-800"
                                                                              }`}>
                                                                              {item.status}
                                                                        </span>
                                                                  </td>
                                                                  <td className="p-4 text-sm">
                                                                        <p className="text-gray-700">{item.pembayaran}</p>
                                                                        <p className={`text-xs font-medium ${item.statusPembayaran === "Lunas"
                                                                              ? "text-green-600"
                                                                              : "text-yellow-600"
                                                                              }`}>
                                                                              {item.statusPembayaran}
                                                                        </p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.tanggal}</td>
                                                                  <td className="p-4 text-gray-700">{item.lokasi}</td>
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
                                    {filteredData.length === 0 && (
                                          <div className="w-full p-8 text-center">
                                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-3">
                                                      <Icon name="frown" className="w-8 h-8 text-gray-400" />
                                                </div>
                                                <h4 className="text-gray-600 font-medium">Tidak ada data yang ditemukan</h4>
                                                <p className="text-sm text-gray-500">Coba ubah filter pencarian Anda</p>
                                          </div>
                                    )}
                              </div>

                              {/* History Qurban Table */}
                              <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                                          <h3 className="font-semibold text-gray-800">History Qurban Anda</h3>
                                    </div>
                                    <div className="w-full overflow-x-auto">
                                          <table className="min-w-[1500px] w-full table-auto text-sm">
                                                <thead className="bg-gray-50 text-gray-800">
                                                      <tr>
                                                            <th className="p-4 text-left w-[120px]">ID Paket</th>
                                                            <th className="p-4 text-left min-w-[200px]">Nama Paket</th>
                                                            <th className="p-4 text-left w-[160px]">Jenis / Berat</th>
                                                            <th className="p-4 text-left w-[140px]">Harga</th>
                                                            <th className="p-4 text-left w-[120px]">Status</th>
                                                            <th className="p-4 text-left w-[180px]">Pembayaran</th>
                                                            <th className="p-4 text-left w-[120px]">Tanggal</th>
                                                            <th className="p-4 text-left min-w-[180px]">Lokasi</th>
                                                            <th className="p-4 text-center w-[120px]">Dokumentasi</th>
                                                            <th className="p-4 text-center w-[120px]">Sertifikat</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {[
                                                            {
                                                                  id: "PKT006",
                                                                  nama: "Paket Kambing Sukses 2024",
                                                                  deskripsi: "Kambing qurban telah disalurkan dengan sukses",
                                                                  harga: "Rp 3.200.000",
                                                                  jenis: "Kambing",
                                                                  berat: "33 kg",
                                                                  stok: 0,
                                                                  status: "Selesai",
                                                                  tanggal: "2024-06-29",
                                                                  pembayaran: "Transfer Bank",
                                                                  statusPembayaran: "Lunas",
                                                                  dokumentasi: "https://example.com/foto-history.jpg",
                                                                  sertifikat: "https://example.com/sertifikat-history.pdf",
                                                                  lokasi: "Bekasi, Jawa Barat",
                                                            },
                                                            {
                                                                  id: "PKT007",
                                                                  nama: "Paket Sapi Kolektif 2023",
                                                                  deskripsi: "Qurban kolektif selesai dan tersertifikasi",
                                                                  harga: "Rp 30.000.000",
                                                                  jenis: "Sapi",
                                                                  berat: "390 kg",
                                                                  stok: 0,
                                                                  status: "Selesai",
                                                                  tanggal: "2023-06-29",
                                                                  pembayaran: "Transfer Bank",
                                                                  statusPembayaran: "Lunas",
                                                                  dokumentasi: "https://example.com/foto-history2.jpg",
                                                                  sertifikat: "https://example.com/sertifikat-history2.pdf",
                                                                  lokasi: "Semarang, Jawa Tengah",
                                                            }
                                                      ].map((item, idx) => (
                                                            <tr key={item.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                                  <td className="p-4 whitespace-nowrap font-medium text-gray-700">{item.id}</td>
                                                                  <td className="p-4">
                                                                        <Link href={`/dashboard/amqur/${item.id}`} className="font-semibold text-green-900 hover:text-green-700 hover:underline">
                                                                              {item.nama}
                                                                        </Link>                                                                        <p className="text-xs text-gray-500 break-words">{item.deskripsi}</p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap">
                                                                        <span className="font-medium">{item.jenis}</span>
                                                                        <span className="text-gray-500"> / {item.berat}</span>
                                                                  </td>
                                                                  <td className="p-4 text-green-700 font-semibold">{item.harga}</td>
                                                                  <td className="p-4">
                                                                        <span className="px-3 py-1 text-xs rounded-full font-medium bg-blue-100 text-blue-800">
                                                                              {item.status}
                                                                        </span>
                                                                  </td>
                                                                  <td className="p-4 text-sm">
                                                                        <p className="text-gray-700">{item.pembayaran}</p>
                                                                        <p className="text-xs font-medium text-green-600">
                                                                              {item.statusPembayaran}
                                                                        </p>
                                                                  </td>
                                                                  <td className="p-4 whitespace-nowrap text-gray-700">{item.tanggal}</td>
                                                                  <td className="p-4 text-gray-700">{item.lokasi}</td>
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
                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      )
}