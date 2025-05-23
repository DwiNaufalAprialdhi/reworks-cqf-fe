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
            statusPembayaran: "Lunas",
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
                        <main className='w-full h-full bg-gray-50 p-4 md:p-6'>
                              {/* Back Button */}
                              <button
                                    onClick={() => router.back()}
                                    className="flex items-center text-green-600 hover:text-green-800 mb-4 transition-colors"
                              >
                                    <Icon name="chevron_down" className="lg:w-3 lg:h-3 w-2 h-2 mr-2 rotate-90" />
                                    Kembali ke Daftar Qurban
                              </button>

                              {/* Header Section */}
                              <div className='w-full flex flex-col items-start justify-start gap-1 mb-6'>
                                    <div className="flex items-center gap-3 mb-2">
                                          <span className={`px-3 py-1 text-xs rounded-full font-medium ${data.status === "Tersedia" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                                                }`}>
                                                {data.status}
                                          </span>
                                          <span className="text-sm text-gray-500">ID: {data.id}</span>
                                    </div>
                                    <h1 className='font-bold lg:text-3xl text-2xl text-green-800 leading-tight'>
                                          {data.nama}
                                    </h1>
                                    <p className='font-normal lg:text-base text-sm text-gray-600 mt-2 leading-tight'>
                                          {data.deskripsi}
                                    </p>
                              </div>

                              {/* Main Content */}
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Left Column - Package Details */}
                                    <div className="lg:col-span-2 space-y-6">
                                          {/* Package Info Card */}
                                          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
                                                <h3 className="font-semibold text-lg text-green-800 mb-4 pb-2 border-b border-green-100">
                                                      Informasi Paket
                                                </h3>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                      <DetailItem label="Jenis Hewan" value={data.jenis} />
                                                      <DetailItem label="Berat" value={data.berat} />
                                                      <DetailItem label="Harga" value={data.harga} isPrice />
                                                      <DetailItem label="Stok Tersedia" value={`${data.stok}`} />
                                                      <DetailItem label="Tanggal Qurban" value={data.tanggalQurban} />
                                                      <DetailItem label="Lokasi" value={data.lokasi} />
                                                </div>
                                          </div>

                                          {/* Payment Info Card */}
                                          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
                                                <h3 className="font-semibold text-lg text-green-800 mb-4 pb-2 border-b border-green-100">
                                                      Status Pembayaran
                                                </h3>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                      <DetailItem label="Metode Pembayaran" value={data.pembayaran} />
                                                      <DetailItem
                                                            label="Status"
                                                            value={data.statusPembayaran}
                                                            valueClassName={data.statusPembayaran === "Lunas" ? "text-green-600" : "text-yellow-600"}
                                                      />
                                                      <DetailItem label="Tanggal Pemesanan" value={data.tanggalPemesanan} />
                                                </div>

                                                {data.statusPembayaran !== "Lunas" && (
                                                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                                            <div className="flex items-start">
                                                                  {/* <Icon name="info" className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> */}
                                                                  <div>
                                                                        <p className="font-medium text-yellow-800">Pembayaran Belum Lunas</p>
                                                                        <p className="text-sm text-yellow-700 mt-1">
                                                                              Silakan selesaikan pembayaran Anda untuk mengkonfirmasi paket qurban.
                                                                        </p>
                                                                        <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                                                              Lanjutkan Pembayaran
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                )}
                                          </div>

                                          {/* Distribution Info Card */}
                                          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
                                                <h3 className="font-semibold text-lg text-green-800 mb-4 pb-2 border-b border-green-100">
                                                      Informasi Penyaluran
                                                </h3>

                                                <div className="space-y-4">
                                                      <DetailItem label="Lokasi Penyaluran" value={data.alamatPenyaluran} fullWidth />
                                                      <DetailItem label="Penerima Manfaat" value={data.penerimaManfaat} fullWidth />
                                                      <DetailItem label="Metode Penyembelihan" value={data.metodePenyembelihan} fullWidth />
                                                </div>
                                          </div>

                                          {/* Terms & Conditions */}
                                          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
                                                <h3 className="font-semibold text-lg text-green-800 mb-4 pb-2 border-b border-green-100">
                                                      Syarat & Ketentuan
                                                </h3>

                                                <ul className="space-y-3">
                                                      {data.syaratKetentuan.map((item, index) => (
                                                            <li key={index} className="flex items-start">
                                                                  <span className="text-green-500 mr-2 mt-0.5">•</span>
                                                                  <span className="text-gray-700">{item}</span>
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>

                                    {/* Right Column - Documentation & Actions */}
                                    <div className="space-y-6">
                                          {/* Documentation Card */}
                                          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
                                                <h3 className="font-semibold text-lg text-green-800 mb-4 pb-2 border-b border-green-100">
                                                      Dokumentasi
                                                </h3>

                                                <div className="mb-4">
                                                      <p className="text-sm text-gray-500 mb-2">Foto Hewan Qurban</p>
                                                      <div className="rounded-lg overflow-hidden border border-gray-200">
                                                            <img
                                                                  src={data.dokumentasi}
                                                                  alt={`${data.jenis} Qurban`}
                                                                  className="w-full h-48 object-cover"
                                                            />
                                                      </div>
                                                </div>

                                                <div className="mb-4">
                                                      <p className="text-sm text-gray-500 mb-2">Galeri Tambahan</p>
                                                      <div className="grid grid-cols-3 gap-2">
                                                            {data.dokumentasiTambahan.map((img, index) => (
                                                                  <a
                                                                        key={index}
                                                                        href={img}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="rounded-md overflow-hidden border border-gray-200 hover:border-green-300 transition-colors"
                                                                  >
                                                                        <img
                                                                              src={img}
                                                                              alt={`Dokumentasi ${index + 1}`}
                                                                              className="w-full h-20 object-cover"
                                                                        />
                                                                  </a>
                                                            ))}
                                                      </div>
                                                </div>

                                                <div>
                                                      <p className="text-sm text-gray-500 mb-2">Sertifikat Qurban</p>
                                                      <a
                                                            href={data.sertifikat}
                                                            className="inline-flex items-center justify-center px-4 py-2 border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-normal lg:text-sm text-xs"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                      >
                                                            <Icon name="download" className="w-5 h-5 text-green-600 mr-2" />
                                                            Unduh Sertifikat
                                                      </a>
                                                </div>
                                          </div>

                                          {/* Action Buttons Card */}
                                          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
                                                <h3 className="font-semibold text-lg text-green-800 mb-4 pb-2 border-b border-green-100">
                                                      Tindakan
                                                </h3>

                                                <div className="space-y-3">
                                                      <button className="w-full flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                                                            <Icon name="share" className="w-5 h-5 mr-2" />
                                                            Bagikan
                                                      </button>
                                                      <button className="w-full flex items-center justify-center px-4 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors">
                                                            <Icon name="paper" className="w-5 h-5 mr-2" />
                                                            Cetak Detail
                                                      </button>
                                                      <button className="w-full flex items-center justify-center px-4 py-3 border border-theme-ascent text-theme-ascent hover:bg-theme-ascent/5 rounded-lg font-medium transition-colors">
                                                            <Icon name="whatsapp" className="w-5 h-5 mr-2" />
                                                            Tanya Admin
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

// Reusable component for detail items
function DetailItem({ label = "", value = "", isPrice = false, fullWidth = false, valueClassName = "" }) {
      return (
            <div className={fullWidth ? "col-span-2" : ""}>
                  <p className="text-sm text-gray-500 mb-1">{label}</p>
                  <p className={`font-medium ${isPrice ? "text-green-700 text-lg" : "text-gray-700"} ${valueClassName}`}>
                        {value}
                  </p>
            </div>
      )
}