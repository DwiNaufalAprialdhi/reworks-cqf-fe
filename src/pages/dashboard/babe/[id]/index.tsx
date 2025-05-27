/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Icon from '@/components/Icons/Icon';
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard';
import Navbar from '@/components/layouts/dashboard/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function BarangBerkahDetail() {
      const router = useRouter();
      const { id } = router.query;

      // Sample data - in a real app, this would come from an API
      const barangData = {
            id: "BBK003",
            nama: "Laptop ASUS Core i5",
            deskripsi: "Laptop ASUS Vivobook core i5 RAM 8GB dengan SSD 256GB. Kondisi sangat baik, baterai masih tahan 5 jam pemakaian normal.",
            kategori: "Elektronik",
            subkategori: "Perangkat Komputer",
            nilai: "Rp 7.500.000",
            kondisi: "Sangat Baik",
            lokasi: "Pesantren Darul Quran, Surabaya",
            status: "Didistribusikan",
            tanggalMasuk: "2025-03-20",
            tanggalDistribusi: "2025-04-10",
            penerima: "Pesantren Darul Quran",
            alamatPenerima: "Jl. Ahmad Yani No. 45, Surabaya",
            dokumentasi: [
                  "/assets/images/asus.jpeg",
                  "/assets/images/asus.jpeg",
                  "/assets/images/asus.jpeg"
            ],
            sertifikat: "https://example.com/sertifikat3.pdf",
            donatur: {
                  nama: "Andi Wijaya",
                  kontak: "081234567891",
                  alamat: "Jl. Diponegoro No. 12, Surabaya"
            },
            spesifikasi: [
                  { label: "Merek", value: "ASUS" },
                  { label: "Model", value: "Vivobook X415" },
                  { label: "Processor", value: "Intel Core i5-1135G7" },
                  { label: "RAM", value: "8GB DDR4" },
                  { label: "Storage", value: "256GB SSD" },
                  { label: "Layar", value: '14" FHD' },
                  { label: "Sistem Operasi", value: "Windows 11 Pro" }
            ],
            catatan: "Laptop ini diwakafkan untuk mendukung kegiatan belajar mengajar di pesantren. Sudah diinstall software pendidikan.",
            riwayat: [
                  {
                        tanggal: "2025-04-10",
                        kegiatan: "Distribusi ke penerima",
                        catatan: "Laptop diserahkan langsung ke pengurus pesantren"
                  },
                  {
                        tanggal: "2025-04-05",
                        kegiatan: "Instalasi software",
                        catatan: "Menginstall Windows 11 Pro dan software pendidikan"
                  },
                  {
                        tanggal: "2025-03-25",
                        kegiatan: "Pengecekan hardware",
                        catatan: "Pembersihan dan pengecekan komponen, semua berfungsi normal"
                  },
                  {
                        tanggal: "2025-03-20",
                        kegiatan: "Penerimaan barang",
                        catatan: "Barang diterima dari donatur dalam kondisi sangat baik"
                  }
            ]
      };

      const [activeTab, setActiveTab] = useState('detail');
      const [expandedImage, setExpandedImage] = useState<string | null>(null);

      const formatDate = (dateString: string) => {
            if (!dateString || dateString === "-") return "-";
            const options: Intl.DateTimeFormatOptions = {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
            };
            return new Date(dateString).toLocaleDateString('id-ID', options);
      };

      const handleImageClick = (imageUrl: string) => {
            setExpandedImage(imageUrl);
      };

      const closeExpandedImage = () => {
            setExpandedImage(null);
      };

      return (
            <>
                  <Head>
                        <title>Detail Barang Berkah - {barangData.id} | CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-gray-50 p-4 md:p-6'>
                              {/* Back Button */}
                              <button
                                    onClick={() => router.back()}
                                    className="flex items-center text-green-700 hover:text-green-900 mb-4 md:mb-6 transition-colors duration-200 group"
                              >
                                    <Icon name="chevron_down" className="lg:w-3 lg:h-3 w-2 h-2 mr-2 rotate-90 group-hover:-translate-x-1 transition-transform duration-200" />
                                    <span className="font-medium text-sm md:text-base">Kembali ke Daftar Barang Berkah</span>
                              </button>

                              {/* Header */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 md:gap-0 mb-4 md:mb-6'>
                                    <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-0'>
                                          <div>
                                                <h2 className='font-semibold text-xl md:text-2xl lg:text-[32px] leading-normal text-green-800 mb-1'>
                                                      {barangData.nama}
                                                </h2>
                                                <p className='text-xs md:text-sm text-gray-500'>
                                                      ID: {barangData.id} • {barangData.kategori} • {barangData.lokasi}
                                                </p>
                                          </div>
                                          <div className='flex items-center gap-2'>
                                                <span className={`px-2 py-1 md:px-3 md:py-1 text-xs rounded-full font-medium transition-all duration-200 ${barangData.status === "Tersedia"
                                                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                                                      : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                                      }`}>
                                                      {barangData.status}
                                                </span>
                                                <span className={`px-2 py-1 md:px-3 md:py-1 text-xs rounded-full font-medium transition-all duration-200 ${barangData.kondisi === "Sangat Baik"
                                                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                                                      : barangData.kondisi === "Baik"
                                                            ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                                      }`}>
                                                      {barangData.kondisi}
                                                </span>
                                          </div>
                                    </div>
                              </div>

                              {/* Tabs */}
                              <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 mb-4 md:mb-6">
                                    <button
                                          className={`px-3 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeTab === 'detail'
                                                ? 'text-green-600 border-b-2 border-green-600 bg-green-50/50'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                                          onClick={() => setActiveTab('detail')}
                                    >
                                          Detail Barang
                                    </button>
                                    <button
                                          className={`px-3 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeTab === 'spesifikasi'
                                                ? 'text-green-600 border-b-2 border-green-600 bg-green-50/50'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                                          onClick={() => setActiveTab('spesifikasi')}
                                    >
                                          Spesifikasi
                                    </button>
                                    <button
                                          className={`px-3 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeTab === 'dokumentasi'
                                                ? 'text-green-600 border-b-2 border-green-600 bg-green-50/50'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                                          onClick={() => setActiveTab('dokumentasi')}
                                    >
                                          Dokumentasi
                                    </button>
                                    <button
                                          className={`px-3 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeTab === 'riwayat'
                                                ? 'text-green-600 border-b-2 border-green-600 bg-green-50/50'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                                          onClick={() => setActiveTab('riwayat')}
                                    >
                                          Riwayat
                                    </button>
                              </div>

                              {/* Detail Tab */}
                              {activeTab === 'detail' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                                          {/* Main Information */}
                                          <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
                                                <h3 className="font-semibold text-base md:text-lg text-green-800 mb-3 md:mb-4">Informasi Barang Wakaf</h3>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                                                      <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                            <p className="text-xs text-gray-500 mb-1">Kategori</p>
                                                            <p className="text-sm font-medium text-gray-800">{barangData.kategori} / {barangData.subkategori}</p>
                                                      </div>
                                                      <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                            <p className="text-xs text-gray-500 mb-1">Nilai Wakaf</p>
                                                            <p className="text-sm font-medium text-green-700">{barangData.nilai}</p>
                                                      </div>
                                                      <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                            <p className="text-xs text-gray-500 mb-1">Tanggal Masuk</p>
                                                            <p className="text-sm font-medium text-gray-800">{formatDate(barangData.tanggalMasuk)}</p>
                                                      </div>
                                                      <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                            <p className="text-xs text-gray-500 mb-1">Tanggal Distribusi</p>
                                                            <p className="text-sm font-medium text-gray-800">{formatDate(barangData.tanggalDistribusi)}</p>
                                                      </div>
                                                </div>

                                                <div className="mb-4 md:mb-6">
                                                      <p className="text-xs text-gray-500 mb-1">Lokasi Sekarang</p>
                                                      <p className="text-sm font-medium text-gray-800 mb-2">{barangData.lokasi}</p>
                                                      {barangData.status === "Didistribusikan" && (
                                                            <>
                                                                  <p className="text-xs text-gray-500 mb-1">Penerima</p>
                                                                  <p className="text-sm font-medium text-gray-800">{barangData.penerima}</p>
                                                                  <p className="text-xs text-gray-600 mt-1">{barangData.alamatPenerima}</p>
                                                            </>
                                                      )}
                                                      <div className="mt-2 h-40 md:h-48 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200/50 transition-colors duration-200 cursor-pointer">
                                                            <Icon name="maps" className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
                                                            <p className="text-xs md:text-sm text-gray-500 ml-2">Peta lokasi akan ditampilkan di sini</p>
                                                      </div>
                                                </div>

                                                <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                      <p className="text-xs text-gray-500 mb-1">Deskripsi</p>
                                                      <p className="text-sm text-gray-800">{barangData.deskripsi}</p>
                                                </div>
                                          </div>

                                          {/* Side Information */}
                                          <div className="space-y-4 md:space-y-6">
                                                {/* Donatur */}
                                                <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
                                                      <h3 className="font-semibold text-base md:text-lg text-green-800 mb-3 md:mb-4">Donatur</h3>
                                                      <div className="flex items-center mb-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 transition-all duration-200 hover:bg-green-200">
                                                                  <Icon name="user" className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                                                            </div>
                                                            <div>
                                                                  <p className="text-sm font-medium text-gray-800">{barangData.donatur.nama}</p>
                                                                  <p className="text-xs text-gray-500">{barangData.donatur.kontak}</p>
                                                            </div>
                                                      </div>
                                                      <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                            <p className="text-xs text-gray-500 mb-1">Alamat Donatur</p>
                                                            <p className="text-xs text-gray-800">{barangData.donatur.alamat}</p>
                                                      </div>
                                                      <button className="w-full mt-2 py-2 bg-green-50 text-green-700 rounded-lg text-xs md:text-sm font-medium hover:bg-green-100 transition-all duration-200 flex items-center justify-center hover:shadow-sm">
                                                            <Icon name="message_square" className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                                            Hubungi Donatur
                                                      </button>
                                                </div>

                                                {/* Dokumen */}
                                                <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
                                                      <h3 className="font-semibold text-base md:text-lg text-green-800 mb-3 md:mb-4">Dokumen Wakaf</h3>
                                                      <div className="space-y-3">
                                                            <a
                                                                  href={barangData.sertifikat}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="flex items-center justify-between p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:border-green-200 hover:shadow-sm"
                                                            >
                                                                  <div className="flex items-center">
                                                                        <div className="p-1 md:p-2 bg-blue-50 rounded-lg mr-2 md:mr-3 transition-all duration-200 hover:bg-blue-100">
                                                                              <Icon name="file" className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                                                                        </div>
                                                                        <div>
                                                                              <p className="text-xs md:text-sm font-medium text-gray-800">Sertifikat Wakaf</p>
                                                                              <p className="text-2xs md:text-xs text-gray-500">PDF • {formatDate(barangData.tanggalMasuk)}</p>
                                                                        </div>
                                                                  </div>
                                                                  <Icon name="download" className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-green-600" />
                                                            </a>
                                                      </div>
                                                </div>

                                                {/* Catatan */}
                                                <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
                                                      <h3 className="font-semibold text-base md:text-lg text-green-800 mb-3 md:mb-4">Catatan</h3>
                                                      <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                            <p className="text-sm text-gray-800">{barangData.catatan || "Tidak ada catatan"}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              )}

                              {/* Spesifikasi Tab */}
                              {activeTab === 'spesifikasi' && (
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
                                          <h3 className="font-semibold text-base md:text-lg text-green-800 mb-3 md:mb-4">Spesifikasi Teknis</h3>

                                          {barangData.spesifikasi && barangData.spesifikasi.length > 0 ? (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                                      {barangData.spesifikasi.map((spec, index) => (
                                                            <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                                  <p className="text-xs text-gray-500 mb-1">{spec.label}</p>
                                                                  <p className="text-sm font-medium text-gray-800">{spec.value}</p>
                                                            </div>
                                                      ))}
                                                </div>
                                          ) : (
                                                <div className="text-center py-6 md:py-8">
                                                      <div className="inline-block p-3 md:p-4 bg-gray-100 rounded-full mb-2 md:mb-3 transition-all duration-200 hover:bg-gray-200">
                                                            {/* <Icon name="info" className="w-6 h-6 md:w-8 md:h-8 text-gray-400" /> */}
                                                      </div>
                                                      <h4 className="text-sm md:text-base text-gray-600 font-medium">Tidak ada spesifikasi teknis</h4>
                                                      <p className="text-xs md:text-sm text-gray-500">Spesifikasi teknis belum dicatat untuk barang ini</p>
                                                </div>
                                          )}
                                    </div>
                              )}

                              {/* Dokumentasi Tab */}
                              {activeTab === 'dokumentasi' && (
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
                                          <h3 className="font-semibold text-base md:text-lg text-green-800 mb-3 md:mb-4">Dokumentasi Barang</h3>

                                          {barangData.dokumentasi && barangData.dokumentasi.length > 0 ? (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                                      {barangData.dokumentasi.map((doc, index) => (
                                                            <div
                                                                  key={index}
                                                                  className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200 cursor-zoom-in"
                                                                  onClick={() => handleImageClick(doc)}
                                                            >
                                                                  <img
                                                                        src={doc}
                                                                        alt={`Dokumentasi ${index + 1}`}
                                                                        className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                                                  />
                                                                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                                                        <div className="p-2 bg-white bg-opacity-80 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                                              <Icon name="maximize" className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      ))}
                                                </div>
                                          ) : (
                                                <div className="text-center py-6 md:py-8">
                                                      <div className="inline-block p-3 md:p-4 bg-gray-100 rounded-full mb-2 md:mb-3 transition-all duration-200 hover:bg-gray-200">
                                                            <Icon name="image" className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                                                      </div>
                                                      <h4 className="text-sm md:text-base text-gray-600 font-medium">Tidak ada dokumentasi</h4>
                                                      <p className="text-xs md:text-sm text-gray-500">Belum ada foto dokumentasi untuk barang ini</p>
                                                      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 flex items-center justify-center mx-auto">
                                                            <Icon name="camera" className="w-4 h-4 mr-2" />
                                                            Tambah Dokumentasi
                                                      </button>
                                                </div>
                                          )}
                                    </div>
                              )}

                              {/* Expanded Image Modal */}
                              {expandedImage && (
                                    <div
                                          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
                                          onClick={closeExpandedImage}
                                    >
                                          <div className="relative max-w-4xl w-full max-h-[90vh]">
                                                <img
                                                      src={expandedImage}
                                                      alt="Expanded Dokumentasi"
                                                      className="w-full h-full object-contain rounded-lg"
                                                />
                                                <button
                                                      className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-200"
                                                      onClick={closeExpandedImage}
                                                >
                                                      {/* <Icon name="x" className="w-6 h-6 text-white" /> */}
                                                </button>
                                          </div>
                                    </div>
                              )}

                              {/* Riwayat Tab */}
                              {activeTab === 'riwayat' && (
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
                                          <h3 className="font-semibold text-base md:text-lg text-green-800 mb-3 md:mb-4">Riwayat Barang</h3>

                                          {barangData.riwayat && barangData.riwayat.length > 0 ? (
                                                <div className="space-y-3 md:space-y-4">
                                                      {barangData.riwayat.map((item, index) => (
                                                            <div
                                                                  key={index}
                                                                  className="flex pb-3 md:pb-4 last:pb-0 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors duration-200 p-2 rounded-lg"
                                                            >
                                                                  <div className="flex flex-col items-center mr-3 md:mr-4">
                                                                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0 transition-all duration-200 ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                                                        {index !== barangData.riwayat.length - 1 && (
                                                                              <div className="w-px h-full bg-gray-200"></div>
                                                                        )}
                                                                  </div>
                                                                  <div className="flex-1">
                                                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 gap-1 md:gap-0">
                                                                              <h4 className="text-xs md:text-sm font-medium text-gray-800">{item.kegiatan}</h4>
                                                                              <span className="text-2xs md:text-xs text-gray-500">{formatDate(item.tanggal)}</span>
                                                                        </div>
                                                                        <p className="text-xs md:text-sm text-gray-600">{item.catatan}</p>
                                                                  </div>
                                                            </div>
                                                      ))}
                                                </div>
                                          ) : (
                                                <div className="text-center py-6 md:py-8">
                                                      <div className="inline-block p-3 md:p-4 bg-gray-100 rounded-full mb-2 md:mb-3 transition-all duration-200 hover:bg-gray-200">
                                                            <Icon name="clock" className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                                                      </div>
                                                      <h4 className="text-sm md:text-base text-gray-600 font-medium">Tidak ada riwayat</h4>
                                                      <p className="text-xs md:text-sm text-gray-500">Belum ada riwayat aktivitas untuk barang ini</p>
                                                </div>
                                          )}
                                    </div>
                              )}

                              {/* Action Buttons */}
                              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                                    {barangData.status === "Tersedia" ? (
                                          <>
                                                <button className="px-3 py-1.5 md:px-4 md:py-2 bg-green-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-green-600/80 transition-all duration-200 flex items-center hover:shadow-md">
                                                      <Icon name="truck" className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                                      Proses Distribusi
                                                </button>
                                                <button className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600/80 transition-all duration-200 flex items-center hover:shadow-md">
                                                      <Icon name="edit" className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                                      Edit Barang
                                                </button>
                                          </>
                                    ) : (
                                          <button className="px-3 py-1.5 md:px-4 md:py-2 bg-yellow-500 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-yellow-500/80 transition-all duration-200 flex items-center hover:shadow-md">
                                                <Icon name="refresh" className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                                Update Status
                                          </button>
                                    )}
                                    <button className="px-3 py-1.5 md:px-4 md:py-2 bg-theme-ascent text-white rounded-lg text-xs md:text-sm font-medium hover:bg-theme-ascent/80 transition-all duration-200 flex items-center hover:shadow-md">
                                          <Icon name="camera" className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                          Tambah Dokumentasi
                                    </button>
                                    <button className="px-3 py-1.5 md:px-4 md:py-2 bg-red-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-red-600/80 transition-all duration-200 flex items-center hover:shadow-md">
                                          <Icon name="trash" className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                          Hapus Barang
                                    </button>
                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      );
}