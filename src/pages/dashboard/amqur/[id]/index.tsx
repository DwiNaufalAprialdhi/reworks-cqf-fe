/* eslint-disable @next/next/no-img-element */
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Icon from '@/components/Icons/Icon'

export default function QurbanDetail() {
      const router = useRouter()

      // Sample data - in real app you would fetch this based on router.query.id
      const data = {
            id: "PKT001",
            nama: "Paket Sapi Premium",
            deskripsi: "Sapi lokal premium, sehat dan sesuai syariat. Paket ini cocok untuk keluarga besar atau kolektif 7 orang.",
            harga: "Rp 25.000.000",
            jenis: "Sapi",
            berat: "300 - 350 kg",
            stok: 5,
            status: "Tersedia",
            tanggalQurban: "15 Juni 2025",
            tanggalPemesanan: "10 Mei 2025",
            pembayaran: "Transfer Bank",
            statusPembayaran: "Pending",
            dokumentasi: "/assets/images/sapi-premium.png",
            sertifikat: "/sample-sertifikat.pdf",
            lokasi: "Lombok, NTB",
            alamatPenyaluran: "Desa Sembalun, Kec. Sembalun, Kab. Lombok Timur, NTB",
            penerimaManfaat: "150 keluarga dhuafa",
            metodePenyembelihan: "Syariat Islam oleh jagal profesional",
            dokumentasiTambahan: [
                  "/assets/images/sapi-premium.png",
                  "/assets/images/sapi-premium.png",
                  "/assets/images/sapi-premium.png"
            ],
            syaratKetentuan: [
                  "Pemesanan dapat dibatalkan maksimal 7 hari sebelum hari H",
                  "Harga sudah termasuk biaya penyembelihan dan penyaluran",
                  "Sertifikat digital akan dikirim via email setelah proses qurban selesai"
            ]
      }

      return (
            <>
                  <Head>
                        <title>{data.nama} - Amazing Qurban | CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-gradient-to-b from-green-50 to-white p-4 md:p-6'>
                              {/* Back Button */}
                              <button
                                    onClick={() => router.back()}
                                    className="flex items-center text-green-700 hover:text-green-900 mb-6 transition-colors group"
                              >
                                    <Icon name="chevron_down" className="lg:w-3 lg:h-3 w-2 h-2 mr-2 rotate-90 group-hover:-translate-x-1 transition-transform" />
                                    <span className="font-medium">Kembali ke Daftar Qurban</span>
                              </button>

                              {/* Header Section */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 mb-8'>
                                    <div className="flex items-center gap-3 mb-3">
                                          <span className={`px-3 py-1 text-xs rounded-full font-medium ${data.status === "Tersedia" ?
                                                "bg-green-100 text-green-800 border border-green-200" :
                                                "bg-blue-100 text-blue-800 border border-blue-200"
                                                }`}>
                                                {data.status}
                                          </span>
                                          <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
                                                ID: {data.id}
                                          </span>
                                    </div>
                                    <h1 className='font-bold lg:text-[32px] text-2xl text-green-900 leading-tight'>
                                          {data.nama}
                                    </h1>
                                    <p className='font-normal lg:text-base text-sm text-gray-600 mt-3 leading-relaxed max-w-3xl'>
                                          {data.deskripsi}
                                    </p>
                              </div>

                              {/* Main Content */}
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Left Column - Package Details */}
                                    <div className="lg:col-span-2 space-y-6">
                                          {/* Package Info Card */}
                                          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                                                <div className="p-6 bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                                                      <h3 className="font-semibold text-xl text-green-800 flex items-center">
                                                            <Icon name="cow" className="w-5 h-5 mr-2 text-green-600" />
                                                            Informasi Paket
                                                      </h3>
                                                </div>
                                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                                      <DetailItem
                                                            label="Jenis Hewan"
                                                            value={data.jenis}
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Berat"
                                                            value={data.berat}
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Harga"
                                                            value={data.harga}
                                                            isPrice
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Stok Tersedia"
                                                            value={`${data.stok}`}
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Tanggal Qurban"
                                                            value={data.tanggalQurban}
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Lokasi"
                                                            value={data.lokasi}
                                                            icon="cow"
                                                      />
                                                </div>
                                          </div>

                                          {/* Payment Info Card */}
                                          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                                                <div className="p-6 bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                                                      <h3 className="font-semibold text-xl text-green-800 flex items-center">
                                                            <Icon name="saldo" className="w-5 h-5 mr-2 text-green-600" />
                                                            Status Pembayaran
                                                      </h3>
                                                </div>
                                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                                      <DetailItem
                                                            label="Metode Pembayaran"
                                                            value={data.pembayaran}
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Status"
                                                            value={data.statusPembayaran}
                                                            valueClassName={data.statusPembayaran === "Lunas" ?
                                                                  "text-green-600 bg-green-50 px-2 py-1 rounded-md lg:text-sm text-xs" :
                                                                  "text-yellow-600 bg-yellow-50 px-2 py-1 rounded-md lg:text-sm text-xs"}
                                                            icon={data.statusPembayaran === "Lunas" ? "clock" : "clock"}
                                                      />
                                                      <DetailItem
                                                            label="Tanggal Pemesanan"
                                                            value={data.tanggalPemesanan}
                                                            icon="cow"
                                                      />
                                                </div>

                                                {data.statusPembayaran !== "Lunas" && (
                                                      <div className="bg-yellow-50/80 border-t border-yellow-100 mx-6 mb-6 p-4 rounded-lg">
                                                            <div className="flex items-start">
                                                                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                                                                        <Icon name="clock" className="w-4 h-4 text-yellow-600" />
                                                                  </div>
                                                                  <div>
                                                                        <p className="font-medium text-yellow-800">Pembayaran Belum Lunas</p>
                                                                        <p className="text-sm text-yellow-700 mt-1">
                                                                              Silakan selesaikan pembayaran Anda untuk mengkonfirmasi paket qurban.
                                                                        </p>
                                                                        <button className="mt-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md lg:text-sm text-xs">
                                                                              Lanjutkan Pembayaran
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                )}
                                          </div>

                                          {/* Distribution Info Card */}
                                          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                                                <div className="p-6 bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                                                      <h3 className="font-semibold text-xl text-green-800 flex items-center">
                                                            <Icon name="truck" className="w-5 h-5 mr-2 text-green-600" />
                                                            Informasi Penyaluran
                                                      </h3>
                                                </div>
                                                <div className="p-6 space-y-6">
                                                      <DetailItem
                                                            label="Lokasi Penyaluran"
                                                            value={data.alamatPenyaluran}
                                                            fullWidth
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Penerima Manfaat"
                                                            value={data.penerimaManfaat}
                                                            fullWidth
                                                            icon="cow"
                                                      />
                                                      <DetailItem
                                                            label="Metode Penyembelihan"
                                                            value={data.metodePenyembelihan}
                                                            fullWidth
                                                            icon="cow"
                                                      />
                                                </div>
                                          </div>

                                          {/* Terms & Conditions */}
                                          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                                                <div className="p-6 bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                                                      <h3 className="font-semibold text-xl text-green-800 flex items-center">
                                                            <Icon name="paper" className="w-5 h-5 mr-2 text-green-600" />
                                                            Syarat & Ketentuan
                                                      </h3>
                                                </div>
                                                <div className="p-6">
                                                      <ul className="space-y-4">
                                                            {data.syaratKetentuan.map((item, index) => (
                                                                  <li key={index} className="flex items-start">
                                                                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                                                                              <Icon name="horn" className="lg:w-4 lg:h-4 w-3 h-3 text-green-600" />
                                                                        </div>
                                                                        <span className="text-gray-700">{item}</span>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Right Column - Documentation & Actions */}
                                    <div className="space-y-6">
                                          {/* Documentation Card */}
                                          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                                                <div className="p-6 bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                                                      <h3 className="font-semibold text-xl text-green-800 flex items-center">
                                                            {/* <Icon name="image" className="w-5 h-5 mr-2 text-green-600" /> */}
                                                            Dokumentasi
                                                      </h3>
                                                </div>
                                                <div className="p-6 space-y-6">
                                                      <div>
                                                            <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                                                  {/* <Icon name="camera" className="w-4 h-4 mr-2 text-gray-500" /> */}
                                                                  Foto Hewan Qurban
                                                            </p>
                                                            <div className="rounded-xl overflow-hidden border-2 border-green-100 shadow-inner">
                                                                  <img
                                                                        src={data.dokumentasi}
                                                                        alt={`${data.jenis} Qurban`}
                                                                        className="w-full h-52 object-cover"
                                                                  />
                                                            </div>
                                                      </div>

                                                      <div>
                                                            <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                                                  {/* <Icon name="grid" className="w-4 h-4 mr-2 text-gray-500" /> */}
                                                                  Galeri Tambahan
                                                            </p>
                                                            <div className="grid grid-cols-3 gap-3">
                                                                  {data.dokumentasiTambahan.map((img, index) => (
                                                                        <a
                                                                              key={index}
                                                                              href={img}
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                              className="rounded-lg overflow-hidden border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md"
                                                                        >
                                                                              <img
                                                                                    src={img}
                                                                                    alt={`Dokumentasi ${index + 1}`}
                                                                                    className="w-full h-24 object-cover"
                                                                              />
                                                                        </a>
                                                                  ))}
                                                            </div>
                                                      </div>

                                                      <div>
                                                            <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                                                  {/* <Icon name="file" className="w-4 h-4 mr-2 text-gray-500" /> */}
                                                                  Sertifikat Qurban
                                                            </p>
                                                            <a
                                                                  href={data.sertifikat}
                                                                  className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-green-200 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 font-medium text-green-700 hover:text-green-900"
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                            >
                                                                  <Icon name="download" className="w-5 h-5 mr-2" />
                                                                  Unduh Sertifikat
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Action Buttons Card */}
                                          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                                                <div className="p-6 bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                                                      <h3 className="font-semibold text-xl text-green-800 flex items-center">
                                                            <Icon name="zap" className="w-5 h-5 mr-2 text-green-600" />
                                                            Tindakan
                                                      </h3>
                                                </div>
                                                <div className="p-6 space-y-4">
                                                      <button className="w-full flex items-center justify-center px-5 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md">
                                                            <Icon name="share" className="w-5 h-5 mr-2" />
                                                            Bagikan Paket
                                                      </button>
                                                      <button className="w-full flex items-center justify-center px-5 py-3 border-2 border-green-600 text-green-700 hover:bg-green-50 rounded-xl font-medium transition-all hover:shadow-sm">
                                                            <Icon name="printer" className="w-5 h-5 mr-2" />
                                                            Cetak Detail
                                                      </button>
                                                      <button className="w-full flex items-center justify-center px-5 py-3 border-2 border-theme-ascent text-theme-ascent hover:bg-blue-50 rounded-xl font-medium transition-all hover:shadow-sm">
                                                            <Icon name="message_square" className="w-5 h-5 mr-2" />
                                                            Chat Admin
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      )
}

// Enhanced DetailItem component with icons
function DetailItem({ label = "", value = "", isPrice = false, fullWidth = false, valueClassName = "", icon = "" }) {
      return (
            <div className={`${fullWidth ? "col-span-2" : ""} flex items-start`}>
                  {icon && (
                        <div className="rounded-lg mr-3 mt-0.5">
                              <Icon name="tags" className="w-4 h-4 text-green-600" />
                        </div>
                  )}
                  <div>
                        <p className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">{label}</p>
                        <p className={`font-medium ${isPrice ? "text-green-700 text-lg" : "text-gray-800"} ${valueClassName}`}>
                              {value}
                        </p>
                  </div>
            </div>
      )
}