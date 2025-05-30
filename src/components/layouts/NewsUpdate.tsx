import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardNewsUpdate from '../ui/NewsUpdate/CardNewsUpdate';

export default function NewsUpdate() {
      return (
            <>
                  <main className="w-full h-auto pb-[50px] lg:pb-[100px] relative z-10 overflow-hidden font-smooth">
                        {/* Content */}
                        <section className='container_section lg:px-0 px-5 relative z-10'>
                              {/* Header */}
                              <div className='flex flex-col gap-y-4 mb-4'>
                                    <h2 className='font-semibold md:text-[48px] text-[24px] leading-tight'>News & Updates</h2>
                                    <div className='flex md:flex-row flex-col md:items-end items-start md:justify-between justify-start gap-6'>
                                          <p className='w-full lg:max-w-[646px] md:max-w-[400px] max-w-none font-normal text-base text-theme-secondary'>
                                                Berbagai hikmah sepanjang perjalanan Cinta Quran Foundation menuju peradaban dunia yang lebih baik
                                          </p>
                                          <Link href="/update" className='font-normal lg:text-base text-sm text-theme-ascent hover:text-opacity-70 duration-300'>
                                                Lihat Selengkapnya
                                          </Link>
                                    </div>
                              </div>
                              {/* Column Swiper */}
                              <section className="relative z-10 w-full h-max flex justify-center lg:my-[32px] my-5">
                                    <div className="w-full lg:max-w-[1200px] md:max-w-[696px] max-w-none">
                                          <Swiper
                                                slidesPerView={3.3}
                                                spaceBetween={24}
                                                breakpoints={{
                                                      0: {
                                                            slidesPerView: 1.1,
                                                            spaceBetween: 20,
                                                      },
                                                      768: {
                                                            slidesPerView: 2.1,
                                                            spaceBetween: 24,
                                                      },
                                                      1024: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 24,
                                                      },
                                                      1280: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 24,
                                                      }
                                                }}
                                                centeredSlides={false}
                                                navigation={{
                                                      nextEl: ".inspiration-button-next",
                                                      prevEl: ".inspiration-button-prev",
                                                }}
                                                className="inspiration-swiper w-full h-max scroll-smooth"
                                          >
                                                {[...Array(3)].map((_, index) => (
                                                      <SwiperSlide key={index}>
                                                            <CardNewsUpdate
                                                                  link={'/update/sedekah-barang-di-momen-ramadhan'}
                                                                  image={'/assets/images/news-update.png'}
                                                                  category={'Syiar Quran Project'}
                                                                  title={'Sedekah Barang di Momen Ramadhan'}
                                                                  description={'Berbuat baik bisa dilakukan dengan berbagai cara, salah satunya dengan menyumbangkan barang yang sudah tidak digunakan...'}
                                                                  time={'1 jam yang lalu'}
                                                                  views={'325'}
                                                            />
                                                      </SwiperSlide>
                                                ))}
                                          </Swiper>
                                    </div>
                              </section>
                              <button className="w-full h-max mx-auto font-normal text-xs text-theme-ascent hover:opacity-70 duration-200">
                                    Lihat yang lainnya
                              </button>
                        </section>
                  </main>
            </>
      )
}
