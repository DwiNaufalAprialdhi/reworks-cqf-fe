/* eslint-disable @typescript-eslint/no-unused-vars */
import Icon from '@/components/Icons/Icon';
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard';
import Navbar from '@/components/layouts/dashboard/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function CallSessionDetail() {
      const router = useRouter();
      const { id } = router.query;

      // Sample data - in a real app, this would come from an API
      const sessionData = {
            id: "CQC-2023-002",
            peserta: {
                  nama: "Siti Aminah",
                  usia: 28,
                  kota: "Bandung",
                  kontak: "081234567890",
                  email: "siti.aminah@example.com"
            },
            mentor: {
                  nama: "Ustzh. Fatimah",
                  spesialisasi: "Qira'ah & Tajwid",
                  kontak: "081234567891"
            },
            paket: {
                  nama: "Tilawah Lanjutan",
                  durasi: "8 Minggu",
                  target: "Menguasai waqaf dan ibtida' dengan benar"
            },
            jadwal: {
                  hari: "Selasa & Jumat",
                  jam: "19:00-20:00 WIB",
                  platform: "Zoom Meeting",
                  link: "https://zoom.us/j/123456789"
            },
            progress: "60%",
            status: "Aktif",
            catatan: "Sudah bagus dalam waqaf dan ibtida', perlu perbaikan pada ghunnah",
            riwayat: [
                  {
                        tanggal: "2023-05-16",
                        durasi: "55 menit",
                        materi: "Surat Al-Baqarah ayat 1-50",
                        catatan: "Peserta sudah menunjukkan peningkatan signifikan",
                        rekaman: "https://example.com/recording1"
                  },
                  {
                        tanggal: "2023-05-12",
                        durasi: "50 menit",
                        materi: "Surat Al-Fatihah",
                        catatan: "Perlu latihan tambahan untuk makhraj huruf",
                        rekaman: "https://example.com/recording2"
                  }
            ]
      };

      const [activeTab, setActiveTab] = useState('detail');

      return (
            <>
                  <Head>
                        <title>Sesi {sessionData.id} - Cinta Quran Call</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-gray-50 p-6'>
                              {/* Back Button */}
                              <button
                                    onClick={() => router.back()}
                                    className="flex items-center text-green-700 hover:text-green-900 mb-6 transition-colors duration-200 group"
                              >
                                    <Icon name="chevron_down" className="w-3 h-3 mr-2 rotate-90 group-hover:-translate-x-1 transition-transform duration-200" />
                                    <span className="font-medium">Kembali ke Daftar Sesi</span>
                              </button>

                              {/* Header */}
                              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
                                    <div>
                                          <h2 className='font-semibold text-2xl lg:text-[32px] text-green-800 mb-1'>
                                                Sesi {sessionData.id}
                                          </h2>
                                          <p className='text-sm text-gray-500'>
                                                Pendampingan {sessionData.paket.nama} • {sessionData.peserta.nama}
                                          </p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3 md:mt-0'>
                                          <span className={`px-3 py-1 text-xs rounded-full font-medium ${sessionData.status === "Aktif"
                                                ? "bg-green-100 text-green-800"
                                                : sessionData.status === "Selesai"
                                                      ? "bg-purple-100 text-purple-800"
                                                      : "bg-blue-100 text-blue-800"
                                                }`}>
                                                {sessionData.status}
                                          </span>
                                          <div className="flex items-center">
                                                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                                                      <div
                                                            className={`h-2 rounded-full ${parseInt(sessionData.progress) < 30
                                                                  ? "bg-red-500"
                                                                  : parseInt(sessionData.progress) < 70
                                                                        ? "bg-yellow-500"
                                                                        : "bg-green-500"}`}
                                                            style={{ width: sessionData.progress }}
                                                      ></div>
                                                </div>
                                                <span className="text-xs text-gray-700">{sessionData.progress}</span>
                                          </div>
                                    </div>
                              </div>

                              {/* Tabs */}
                              <div className="flex border-b border-gray-200 mb-6">
                                    <button
                                          className={`px-4 py-2 text-sm font-medium ${activeTab === 'detail'
                                                ? 'text-green-600 border-b-2 border-green-600'
                                                : 'text-gray-500 hover:text-gray-700'}`}
                                          onClick={() => setActiveTab('detail')}
                                    >
                                          Detail Sesi
                                    </button>
                                    <button
                                          className={`px-4 py-2 text-sm font-medium ${activeTab === 'riwayat'
                                                ? 'text-green-600 border-b-2 border-green-600'
                                                : 'text-gray-500 hover:text-gray-700'}`}
                                          onClick={() => setActiveTab('riwayat')}
                                    >
                                          Riwayat Sesi
                                    </button>
                                    <button
                                          className={`px-4 py-2 text-sm font-medium ${activeTab === 'materi'
                                                ? 'text-green-600 border-b-2 border-green-600'
                                                : 'text-gray-500 hover:text-gray-700'}`}
                                          onClick={() => setActiveTab('materi')}
                                    >
                                          Materi & Evaluasi
                                    </button>
                              </div>

                              {/* Detail Tab */}
                              {activeTab === 'detail' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                          {/* Peserta & Mentor */}
                                          <div className="lg:col-span-2 space-y-6">
                                                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                                                      <h3 className="font-semibold text-lg text-green-800 mb-4">Informasi Peserta</h3>
                                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Nama Lengkap</p>
                                                                  <p className="font-medium">{sessionData.peserta.nama}</p>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Usia</p>
                                                                  <p className="font-medium">{sessionData.peserta.usia} tahun</p>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Kota</p>
                                                                  <p className="font-medium">{sessionData.peserta.kota}</p>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Kontak</p>
                                                                  <p className="font-medium">{sessionData.peserta.kontak}</p>
                                                            </div>
                                                            <div className="md:col-span-2">
                                                                  <p className="text-xs text-gray-500 mb-1">Email</p>
                                                                  <p className="font-medium">{sessionData.peserta.email}</p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                                                      <h3 className="font-semibold text-lg text-green-800 mb-4">Informasi Mentor</h3>
                                                      <div className="flex items-start">
                                                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                                                  <Icon name="user" className="w-5 h-5 text-green-600" />
                                                            </div>
                                                            <div className="flex-1">
                                                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                        <div>
                                                                              <p className="text-xs text-gray-500 mb-1">Nama Mentor</p>
                                                                              <p className="font-medium">{sessionData.mentor.nama}</p>
                                                                        </div>
                                                                        <div>
                                                                              <p className="text-xs text-gray-500 mb-1">Spesialisasi</p>
                                                                              <p className="font-medium">{sessionData.mentor.spesialisasi}</p>
                                                                        </div>
                                                                        <div>
                                                                              <p className="text-xs text-gray-500 mb-1">Kontak Mentor</p>
                                                                              <p className="font-medium">{sessionData.mentor.kontak}</p>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Jadwal & Paket */}
                                          <div className="space-y-6">
                                                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                                                      <h3 className="font-semibold text-lg text-green-800 mb-4">Jadwal Sesi</h3>
                                                      <div className="space-y-3">
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Hari</p>
                                                                  <p className="font-medium">{sessionData.jadwal.hari}</p>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Jam</p>
                                                                  <p className="font-medium">{sessionData.jadwal.jam}</p>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Platform</p>
                                                                  <div className="flex items-center">
                                                                        {sessionData.jadwal.platform === "Zoom Meeting" && (
                                                                              <Icon name="zoom_meeting" className="w-4 h-4 text-blue-500 mr-2" />
                                                                        )}
                                                                        <p className="font-medium">{sessionData.jadwal.platform}</p>
                                                                  </div>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Link Sesi</p>
                                                                  <a
                                                                        href={sessionData.jadwal.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="font-medium text-blue-600 hover:underline"
                                                                  >
                                                                        Buka {sessionData.jadwal.platform}
                                                                  </a>
                                                            </div>
                                                            <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center">
                                                                  <Icon name="calendar" className="w-4 h-4 mr-2" />
                                                                  Jadwalkan Ulang
                                                            </button>
                                                      </div>
                                                </div>

                                                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                                                      <h3 className="font-semibold text-lg text-green-800 mb-4">Paket Pembelajaran</h3>
                                                      <div className="space-y-3">
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Nama Paket</p>
                                                                  <p className="font-medium">{sessionData.paket.nama}</p>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Durasi</p>
                                                                  <p className="font-medium">{sessionData.paket.durasi}</p>
                                                            </div>
                                                            <div>
                                                                  <p className="text-xs text-gray-500 mb-1">Target Pembelajaran</p>
                                                                  <p className="font-medium">{sessionData.paket.target}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              )}

                              {/* Riwayat Tab */}
                              {activeTab === 'riwayat' && (
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                                          <h3 className="font-semibold text-lg text-green-800 mb-4">Riwayat Sesi</h3>

                                          {sessionData.riwayat.map((sesi, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 mb-4 last:pb-0 last:mb-0">
                                                      <div className="flex justify-between items-start mb-2">
                                                            <div>
                                                                  <h4 className="font-medium">{sesi.materi}</h4>
                                                                  <p className="text-xs text-gray-500">{sesi.tanggal} • {sesi.durasi}</p>
                                                            </div>
                                                            <a
                                                                  href={sesi.rekaman}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="flex items-center text-xs text-blue-600 hover:underline"
                                                            >
                                                                  <Icon name="play" className="w-3 h-3 mr-1" />
                                                                  Lihat Rekaman
                                                            </a>
                                                      </div>
                                                      <p className="text-sm text-gray-700">{sesi.catatan}</p>
                                                </div>
                                          ))}
                                    </div>
                              )}

                              {/* Materi Tab */}
                              {activeTab === 'materi' && (
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                                          <h3 className="font-semibold text-lg text-green-800 mb-4">Materi & Evaluasi</h3>

                                          <div className="mb-6">
                                                <h4 className="font-medium text-gray-800 mb-2">Catatan Mentor</h4>
                                                <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                                                      {sessionData.catatan || "Belum ada catatan dari mentor"}
                                                </p>
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                      <h4 className="font-medium text-gray-800 mb-3">Materi Terkait</h4>
                                                      <div className="space-y-2">
                                                            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                                                                  <Icon name="file" className="w-5 h-5 text-gray-500 mr-3" />
                                                                  <span>Panduan Waqaf & Ibtida&apos;</span>
                                                            </a>
                                                            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                                                                  <Icon name="zoom_meeting" className="w-5 h-5 text-gray-500 mr-3" />
                                                                  <span>Video Tutorial Makhraj Huruf</span>
                                                            </a>
                                                      </div>
                                                </div>

                                                <div>
                                                      <h4 className="font-medium text-gray-800 mb-3">Tambah Evaluasi</h4>
                                                      <textarea
                                                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-400 transition outline-none"
                                                            rows={4}
                                                            placeholder="Tuliskan evaluasi sesi ini..."
                                                      ></textarea>
                                                      <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                                            Simpan Evaluasi
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              )}

                              {/* Action Buttons */}
                              <div className="mt-6 flex flex-wrap gap-3">
                                    {sessionData.status === "Aktif" && (
                                          <>
                                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center">
                                                      <Icon name="phone" className="w-4 h-4 mr-2" />
                                                      Mulai Sesi Sekarang
                                                </button>
                                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                                      <Icon name="edit" className="w-4 h-4 mr-2" />
                                                      Edit Detail Sesi
                                                </button>
                                          </>
                                    )}
                                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center">
                                          <Icon name="message_square" className="w-4 h-4 mr-2" />
                                          Kirim Pesan
                                    </button>
                                    {sessionData.status !== "Selesai" && (
                                          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition flex items-center">
                                                <Icon name="check_circle" className="w-4 h-4 mr-2" />
                                                Tandai Selesai
                                          </button>
                                    )}
                              </div>
                        </main>
                  </LayoutDashboard>
            </>
      );
}