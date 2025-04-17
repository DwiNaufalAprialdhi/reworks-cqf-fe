import React from 'react'
import CardBussines from '../ui/Bussines/CardBussines'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Bussines() {
      return (
            <>
                  <main className='w-full h-auto lg:pt-[100px] pt-[20px] lg:pb-[100px] pb-[50px] bg-transparent font-smooth relative z-20'>
                        <section className='container_section px-5 lg:px-0 grid grid-cols-1'>
                              <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    breakpoints={{
                                          0: {
                                                slidesPerView: 1.1,
                                                spaceBetween: 10,
                                          },
                                          320: {
                                                slidesPerView: 1.1,
                                                spaceBetween: 10,
                                          },
                                          640: {
                                                slidesPerView: 3,
                                                spaceBetween: 10,
                                          },
                                          768: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                          },
                                          1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                          },
                                          1280: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                          }
                                    }}
                                    className="bussines-swiper w-full col-span-1"
                              >
                                    <SwiperSlide>
                                          <CardBussines
                                                link={'/zakat100%'}
                                                image={'/assets/images/zakat.svg'}
                                                title={'Zakat 100%'}
                                                description={'Tunaikan Zakat Anda melalui Program Zakat 100% Amanah.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardBussines
                                                link={'#'}
                                                image={'/assets/images/babe.svg'}
                                                title={'Barang Berkah'}
                                                description={'Yuk berikan barang bekas yang masih layak pakai untuk sahabat kita.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardBussines
                                                link={'#'}
                                                image={'/assets/images/ambox.svg'}
                                                title={'Amazing Box'}
                                                description={'Isi penuh Amazing Box selama 1 bulan, kembalikan kepada kami.'}
                                          />
                                    </SwiperSlide>
                              </Swiper>
                        </section>
                  </main>
            </>
      )
}
