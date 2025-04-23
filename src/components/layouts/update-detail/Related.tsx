import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardNewsUpdate from '@/components/ui/NewsUpdate/CardNewsUpdate';

export default function Related() {
      return (
            <>
                  <section className="container_section_view lg:pt-[100px] pt-[0px] lg:pb-[50px] pb-[50px]">
                        <h2 className='block md:mb-4 mb-2 font-baloo font-bold md:text-[31px] text-lg leading-tight'>
                              Update Terkait
                        </h2>
                        <div className='w-full grid grid-cols-1'>
                              <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={24}
                                    pagination={{
                                          clickable: true,
                                    }}
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
                                                slidesPerView: 2,
                                                spaceBetween: 24,
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
                                          }
                                    }}
                                    className="related-swiper w-full col-span-1"
                              >
                                    <SwiperSlide>
                                          <CardNewsUpdate
                                                link={'/update/sedekah-barang-di-momen-ramadhan'}
                                                image={'/assets/images/news-update.png'}
                                                category={'Syiar Quran Project'}
                                                title={'Sedekah Barang di Momen Ramadhan'}
                                                time={'1 jam yang lalu'}
                                                views={'325'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardNewsUpdate
                                                link={'/update/sedekah-barang-di-momen-ramadhan'}
                                                image={'/assets/images/news-update.png'}
                                                category={'Syiar Quran Project'}
                                                title={'Sedekah Barang di Momen Ramadhan'}
                                                time={'1 jam yang lalu'}
                                                views={'325'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardNewsUpdate
                                                link={'/update/sedekah-barang-di-momen-ramadhan'}
                                                image={'/assets/images/news-update.png'}
                                                category={'Syiar Quran Project'}
                                                title={'Sedekah Barang di Momen Ramadhan'}
                                                time={'1 jam yang lalu'}
                                                views={'325'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardNewsUpdate
                                                link={'/update/sedekah-barang-di-momen-ramadhan'}
                                                image={'/assets/images/news-update.png'}
                                                category={'Syiar Quran Project'}
                                                title={'Sedekah Barang di Momen Ramadhan'}
                                                time={'1 jam yang lalu'}
                                                views={'325'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardNewsUpdate
                                                link={'/update/sedekah-barang-di-momen-ramadhan'}
                                                image={'/assets/images/news-update.png'}
                                                category={'Syiar Quran Project'}
                                                title={'Sedekah Barang di Momen Ramadhan'}
                                                time={'1 jam yang lalu'}
                                                views={'325'}
                                          />
                                    </SwiperSlide>
                              </Swiper>
                        </div>
                  </section>
            </>
      )
}
