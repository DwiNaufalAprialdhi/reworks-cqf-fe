import React from 'react'
import ItemUpdate from './ItemUpdate'
import Image from 'next/image'
import Icon from '@/components/Icons/Icon'

export default function Content() {
      return (
            <>
                  <section className='container_section_view lg:pb-[0px] pb-[50px] grid grid-cols-12 lg:gap-6 gap-5'>
                        {/* Grid Left */}
                        <div className='w-full lg:col-span-8 col-span-12 flex flex-col'>
                              {/* Content */}
                              <div className='w-full flex flex-col gap-y-3'>
                                    <Image
                                          src={'/assets/images/news-update.png'}
                                          alt='cqf'
                                          width={500}
                                          height={500}
                                          className='w-full h-auto object-cover md:rounded-2xl rounded-lg'
                                    />
                                    <p className='font-baloo font-normal lg:text-lg text-base text-theme-secondary'>
                                          Alhamdulillah, pasca libur Idul Fitri 1446 H, para mahasantri/wati Ma’had Cinta Quran Center (CQC) telah kembali ke lingkungan Ma’had dengan semangat baru dalam menuntut ilmu dan berdakwah.
                                          Sebagai bentuk komitmen menjaga kesehatan bersama, Ma’had CQC mewajibkan setiap mahasantri/wati menyerahkan surat keterangan sehat dan bebas scabies sebelum kembali ke lingkungan pesantren. Langkah ini diambil untuk menjaga kenyamanan dan mencegah penyebaran penyakit yang berpotensi merugikan banyak pihak.
                                    </p>
                              </div>
                              {/* Content */}
                              <div className='w-full flex flex-col gap-y-3 mt-3'>
                                    <Image
                                          src={'/assets/images/news-update.png'}
                                          alt='cqf'
                                          width={500}
                                          height={500}
                                          className='w-full h-auto object-cover md:rounded-2xl rounded-lg'
                                    />
                                    <p className='font-baloo font-normal lg:text-lg text-base text-theme-secondary'>
                                          Alhamdulillah, pasca libur Idul Fitri 1446 H, para mahasantri/wati Ma’had Cinta Quran Center (CQC) telah kembali ke lingkungan Ma’had dengan semangat baru dalam menuntut ilmu dan berdakwah.
                                          Sebagai bentuk komitmen menjaga kesehatan bersama, Ma’had CQC mewajibkan setiap mahasantri/wati menyerahkan surat keterangan sehat dan bebas scabies sebelum kembali ke lingkungan pesantren. Langkah ini diambil untuk menjaga kenyamanan dan mencegah penyebaran penyakit yang berpotensi merugikan banyak pihak.
                                    </p>
                              </div>
                              {/* Share */}
                              <div className='w-full border-t border-theme-gray_lg pt-5 mt-5 flex items-center justify-center'>
                                    <div className='w-max flex items-center justify-start gap-x-2 mx-auto'>
                                          <h2 className='font-baloo font-medium lg:text-xl text-base text-theme-dark'>
                                                Bagikan Update ini :
                                          </h2>
                                          <div className='flex items-center justify-start gap-x-2'>
                                                <a href='#' target='_blank' className='flex items-center justify-center bg-theme-secondary rounded-full md:w-8 md:h-8 w-6 h-6 overflow-hidden hover:-translate-y-[2px] duration-200'>
                                                      <Icon name='facebook' className='md:w-5 md:h-5 w-3 h-3 text-white' />
                                                </a>
                                                <a href='#' target='_blank' className='flex items-center justify-center bg-theme-secondary rounded-full md:w-8 md:h-8 w-6 h-6 overflow-hidden hover:-translate-y-[2px] duration-200'>
                                                      <Icon name='whatsapp' className='md:w-5 md:h-5 w-3 h-3 text-white' />

                                                </a>
                                                <a href='#' target='_blank' className='flex items-center justify-center bg-theme-secondary rounded-full md:w-8 md:h-8 w-6 h-6 overflow-hidden hover:-translate-y-[2px] duration-200'>
                                                      <Icon name='twitter' className='md:w-5 md:h-5 w-3 h-3 text-white' />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Grid Right */}
                        <div className='w-full lg:col-span-4 col-span-12 relative'>
                              <div className='w-full h-max p-5 bg-white border border-theme-gray_lg md:rounded-2xl rounded-xl flex flex-col gap-3 lg:sticky lg:top-[75px] lg:inset-x-0'>
                                    {/* Title Update */}
                                    <h2 className="font-baloo font-semibold text-theme-dark md:text-2xl text-lg tracking-tight">
                                          Update Terbaru
                                    </h2>
                                    {/* Item Update */}
                                    <div className='w-full flex flex-col divide divide-y divide-theme-gray_lg gap-3'>
                                          <ItemUpdate
                                                link={'#'}
                                                title={'Pasca Libur Idul Fitri, Mahasantri/wati Kembali ke Ma’had dengan Semangat Baru!'}
                                                time={'3 hari yang lalu'}
                                                views={'65'}
                                          />
                                          <ItemUpdate
                                                link={'#'}
                                                title={'Pasca Libur Idul Fitri, Mahasantri/wati Kembali ke Ma’had dengan Semangat Baru!'}
                                                time={'3 hari yang lalu'}
                                                views={'65'}
                                          />
                                          <ItemUpdate
                                                link={'#'}
                                                title={'Pasca Libur Idul Fitri, Mahasantri/wati Kembali ke Ma’had dengan Semangat Baru!'}
                                                time={'3 hari yang lalu'}
                                                views={'65'}
                                          />
                                          <ItemUpdate
                                                link={'#'}
                                                title={'Pasca Libur Idul Fitri, Mahasantri/wati Kembali ke Ma’had dengan Semangat Baru!'}
                                                time={'3 hari yang lalu'}
                                                views={'65'}
                                          />
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      )
}
