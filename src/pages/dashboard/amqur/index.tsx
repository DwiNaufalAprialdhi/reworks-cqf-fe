/* eslint-disable react-hooks/rules-of-hooks */
import Icon from '@/components/Icons/Icon';
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
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
                        <main className='w-full h-full bg-white p-6'>
                              {/* Amazing Qurban Title */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 lg:gap-0 mb-4'>
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal text-[#6B9353]'>
                                          Amazing Qurban Anda
                                    </h2>
                              </div>
                              <div className="w-full flex flex-wrap items-center gap-4 mb-6">
                                    {/* Input Pencarian */}
                                    <div className="w-full md:w-[260px]">
                                          <label className="block mb-1 lg:text-xs text-[10px] font-medium text-[#6B9353]">Pencarian</label>
                                          <input
                                                type="text"
                                                placeholder="Cari Nama / ID / Lokasi"
                                                className="w-full px-3 py-2 lg:text-sm text-xs text-slate-700 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                          />
                                    </div>

                                    {/* Filter Status Pembayaran */}
                                    <div className="w-full md:w-[200px]">
                                          <label className="block mb-1 lg:text-xs text-[10px] font-medium text-[#6B9353]">Status Pembayaran</label>
                                          <select
                                                className="w-full px-3 py-2 lg:text-sm text-xs text-slate-700 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                value={filterStatus}
                                                onChange={(e) => setFilterStatus(e.target.value)}
                                          >
                                                <option value="Semua">Semua</option>
                                                <option value="Lunas">Lunas</option>
                                                <option value="Pending">Pending</option>
                                          </select>
                                    </div>

                                    {/* Urutkan Harga */}
                                    <div className="w-full md:w-[200px]">
                                          <label className="block mb-1 lg:text-xs text-[10px] font-medium text-[#6B9353]">Urutkan Harga</label>
                                          <select
                                                className="w-full px-3 py-2 lg:text-sm text-xs text-slate-700 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none appearance-none"
                                                value={sortHarga}
                                                onChange={(e) => setSortHarga(e.target.value)}
                                          >
                                                <option value="default">Default</option>
                                                <option value="naik">Harga Terendah</option>
                                                <option value="turun">Harga Tertinggi</option>
                                          </select>
                                    </div>
                              </div>
                              <div className="w-full overflow-x-auto block rounded-xl shadow bg-white">
                                    <table className="min-w-[1500px] w-full table-auto text-sm text-slate-700">
                                          <thead className="bg-green-100 text-green-800">
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
                                                            className={idx % 2 === 0 ? "bg-green-50" : "bg-white"}
                                                      >
                                                            <td className="p-4 whitespace-nowrap font-medium">{item.id}</td>
                                                            <td className="p-4">
                                                                  <div className="font-semibold text-green-900">{item.nama}</div>
                                                                  <p className="text-xs text-slate-400 break-words">{item.deskripsi}</p>
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap">{item.jenis} / {item.berat}</td>
                                                            <td className="p-4 text-green-700 font-semibold">{item.harga}</td>
                                                            <td className="p-4">
                                                                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${item.status === "Tersedia"
                                                                        ? "bg-green-200 text-green-800"
                                                                        : "bg-red-200 text-red-800"
                                                                        }`}>
                                                                        {item.status}
                                                                  </span>
                                                            </td>
                                                            <td className="p-4 text-sm">
                                                                  <p>{item.pembayaran}</p>
                                                                  <p className={`text-xs font-medium ${item.statusPembayaran === "Lunas"
                                                                        ? "text-green-600"
                                                                        : "text-yellow-600"
                                                                        }`}>
                                                                        {item.statusPembayaran}
                                                                  </p>
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap">{item.tanggal}</td>
                                                            <td className="p-4">{item.lokasi}</td>
                                                            <td className="p-4 text-center">
                                                                  {item.dokumentasi !== "-" ? (
                                                                        <a
                                                                              href={item.dokumentasi}
                                                                              className="flex items-center justify-center hover:opacity-80 duration-200"
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                        >
                                                                              <Icon name="eye" className='md:w-5 w-4 h-max text-theme-ascent' />
                                                                        </a>
                                                                  ) : (
                                                                        <span className="text-slate-400">-</span>
                                                                  )}
                                                            </td>
                                                            <td className="p-4 text-center">
                                                                  {item.sertifikat !== "-" ? (
                                                                        <a
                                                                              href={item.sertifikat}
                                                                              className='flex items-center justify-center hover:opacity-80 duration-200'
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                        >
                                                                              <Icon name="download" className='md:w-5 w-4 h-max text-theme-ascent' />
                                                                        </a>
                                                                  ) : (
                                                                        <span className="text-slate-400">-</span>
                                                                  )}
                                                            </td>
                                                      </tr>
                                                ))}
                                          </tbody>
                                    </table>

                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
