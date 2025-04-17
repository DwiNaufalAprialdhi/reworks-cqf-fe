import React, { useRef, useState } from 'react'
import ButtonTabMenu from '../materials/ButtonTabMenu'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper"; // ✅ Import SwiperType dari 'swiper'
import { Navigation } from "swiper/modules";
import 'swiper/css';
import Icon from '../Icons/Icon';
import CardChoice from '../ui/ChoiceDonation/CardChoice';

export default function ChoiceDonation() {
      const swiperRef = useRef<SwiperType | null>(null); // ✅ Gunakan SwiperType untuk ref
      const [progress, setProgress] = useState(0);
      return (
            <>
                  <main className="inspiration w-full h-auto relative z-[10] overflow-hidden font-smooth">
                        <section className='container_section relative z-10'>
                              {/* Header */}
                              <div className='flex flex-col items-center justify-center gap-y-4 lg:mb-[32px] mb-5'>
                                    <h2 className='font-semibold md:text-[48px] text-[24px] leading-tight text-center'>Donasi Pilihan</h2>
                                    <div className='flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-6'>
                                          <p className='w-full px-5 font-normal text-base text-theme-secondary text-center'>
                                                Pilih dan salurkan donasi melalui program-program kami yang berarti bagi sahabat Cinta quran.
                                          </p>
                                    </div>
                              </div>
                              {/* Tab Menu */}
                              <div className='w-full h-max overflow-x-scroll scroll-smooth lg:px-0 px-5'>
                                    <div className='w-max h-max mx-auto p-2 bg-theme-ascent/5 rounded-full flex items-center justify-center lg:gap-6 gap-3 flex-shrink-0'>
                                          <ButtonTabMenu title={'Semua Kategori'} defaultChecked={true} name={'buttonTabMenuDonation'} />
                                          <ButtonTabMenu title={'Humanity'} name={'buttonTabMenuDonation'} />
                                          <ButtonTabMenu title={'Sedekah'} name={'buttonTabMenuDonation'} />
                                          <ButtonTabMenu title={'Wakaf'} name={'buttonTabMenuDonation'} />
                                    </div>
                              </div>
                        </section>
                        {/* Swiper */}
                        <section className="relative z-10 w-full h-max flex justify-center lg:my-[32px] my-5">
                              <div className="w-full lg:max-w-[1200px] md:max-w-[696px] max-w-none md:pl-0 pl-5 pr-5">
                                    <Swiper
                                          onSwiper={(swiper) => (swiperRef.current = swiper)}
                                          onSlideChange={(swiper) => setProgress((swiper.activeIndex + 1) / swiper.slides.length)}
                                          slidesPerView={3.3}
                                          spaceBetween={24}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 1.2,
                                                      spaceBetween: 20,
                                                },
                                                768: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 24,
                                                },
                                                1024: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          centeredSlides={false}
                                          navigation={{
                                                nextEl: ".choice-donation-button-next",
                                                prevEl: ".choice-donation-button-prev",
                                          }}
                                          modules={[Navigation]}
                                          className="inspiration-swiper w-full h-max scroll-smooth cursor-grab"
                                    >
                                          {[...Array(10)].map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <CardChoice
                                                            link={'#'}
                                                            image={'/assets/images/program.svg'}
                                                            title={'Sedekah Beras untuk seluruh para keluarga di afrika selatan'}
                                                            amount={'Rp 500.000.124'}
                                                            date={'2 Hari Lagi'}
                                                            progress={30} />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </section>

                        {/* Progress Bar Pagination and Navigation */}
                        <section className="container_section lg:px-0 px-5 relative z-10 flex items-center justify-between lg:gap-14 gap-5">
                              {/* Progress Bar Pagination */}
                              <div className="flex-grow w-full md:h-2 h-[7px] bg-[#D0D0D0] rounded-full relative">
                                    <div
                                          className="absolute top-0 left-0 md:h-2 h-[7px] bg-theme-ascent rounded-full transition-all duration-300"
                                          style={{ width: `${progress * 100}%` }} // Progress Bar Dynamic Width
                                    ></div>
                              </div>

                              {/* Navigation */}
                              <div className="flex-shrink-0 flex items-center md:gap-6 gap-4">
                                    <button
                                          className="choice-donation-button-prev"
                                          onClick={() => swiperRef.current?.slidePrev()} // ✅ Tidak error lagi
                                    >
                                          <Icon name="navigate" className="md:w-8 md:h-8 w-7 h-7 text-theme-ascent" />
                                    </button>
                                    <button
                                          className="choice-donation-button-next"
                                          onClick={() => swiperRef.current?.slideNext()} // ✅ Tidak error lagi
                                    >
                                          <Icon name="navigate" className="md:w-8 md:h-8 w-7 h-7 text-theme-ascent rotate-180" />
                                    </button>
                              </div>
                        </section>
                  </main>
            </>
      )
}
