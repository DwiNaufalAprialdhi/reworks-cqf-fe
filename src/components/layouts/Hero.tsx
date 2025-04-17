import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../Icons/Icon';
import Head from 'next/head';
import AOS from "aos";

const dataSlider = [
      {
            id: 1,
            image: '/assets/images/highlight-01.svg',
            title: 'Dukung Program Dakwah Syiar Qur’an Project 01.',
            description: 'Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan program-program islami terbaik dan kreatif.',
            link: '#',
            teaser: '#',
      },
      {
            id: 2,
            image: '/assets/images/highlight-01.svg',
            title: 'Dukung Program Dakwah Syiar Qur’an Project 02.',
            description: 'Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan program-program islami terbaik dan kreatif.',
            link: '#',
            teaser: '#',
      },
      {
            id: 3,
            image: '/assets/images/highlight-01.svg',
            title: 'Dukung Program Dakwah Syiar Qur’an Project 03.',
            description: 'Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan program-program islami terbaik dan kreatif.',
            link: '#',
            teaser: '#',
      },
]

export default function Hero() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <Head>
                        {/* Menambahkan SVG clipPath global di head */}
                        <svg width="0" height="0">
                              <defs>
                                    <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
                                          <path d="M0,0 H1 V0.7 C0.75,1,0.25,1,0,0.9 Z" />
                                    </clipPath>
                              </defs>
                        </svg>
                  </Head>
                  <main className="w-full h-max relative z-[7] overflow-hidden lg:pb-[100px] lg:mb-[100px] pb-[50px] mb-[0px]">
                        {/* LAYER SLIDER */}
                        <div className="w-full lg:h-[850px] h-[600px] relative z-10 overflow-hidden grid grid-cols-1" style={{ clipPath: "url(#hero-clip)" }}>
                              {/* SWIPER HERO */}
                              <Swiper
                                    loop={true}
                                    autoplay={{
                                          delay: 5000,
                                          disableOnInteraction: false,
                                    }}
                                    pagination={{
                                          el: ".new-hero-swiper-pagination", // Hubungkan pagination ke div yang ada
                                          clickable: true, // Aktifkan interaksi
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    className="new-hero-swiper w-full h-full col-span-1 cursor-grab transition-all duration-300 transform"
                              >
                                    {dataSlider.map((item, index) => (
                                          <SwiperSlide key={index}>
                                                <div className='w-full h-full block relative overflow-hidden'>
                                                      {/* Filter */}
                                                      <div className='w-full h-full bg-gradient-to-r from-black/50 to-theme-ascent/70 absolute top-0 left-0 z-[2]'></div>
                                                      {/* Image */}
                                                      <Image src={item.image}
                                                            alt={item.title}
                                                            width={1920}
                                                            height={1080}
                                                            className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
                                                      />
                                                      {/* Content */}
                                                      <div className='w-full h-max mx-auto lg:max-w-[1200px] md:max-w-[696px] max-w-none relative z-[10] lg:pt-[250px] pt-[130px] px-5 pb-5 lg:px-0 lg:pb-0'>
                                                            <div data-aos="fade-right" className='w-full lg:max-w-[552px] max-w-none flex flex-col'>
                                                                  <h2
                                                                        className='font-bold lg:text-[48px] md:text-[40px] text-[40px] leading-tight text-white line-clamp-4 lg:mb-5 mb-4'>
                                                                        {item.title}
                                                                  </h2>
                                                                  <p
                                                                        className='lg:font-normal font-semibold lg:text-base text-sm text-[#E9E9E9] leading-tight lg:mb-[32px] mb-6'>
                                                                        {item.description}
                                                                  </p>
                                                                  <Link
                                                                        href={item.link} className="w-max flex items-center justify-start gap-2">
                                                                        <h2 className='font-semibold lg:text-base text-sm text-white'>
                                                                              Donasi Sekarang
                                                                        </h2>
                                                                        <div className='lg:w-5 lg:h-5 w-4 h-4 rounded-full bg-white flex items-center justify-center'>
                                                                              <Icon name='arrowRight' className='w-3 h-3 text-theme-ascent' />
                                                                        </div>
                                                                  </Link>
                                                            </div>
                                                            <button data-aos="fade-left"
                                                                  className='absolute lg:-bottom-[100px] bottom-[15px] lg:right-0 right-5 pointer-events-auto lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center z-[1] hover:bg-slate-100 duration-200 group'>
                                                                  <Icon name='play' className='lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4 group-hover:scale-110 duration-200' />
                                                            </button>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                              {/* PAGINATION */}
                              <div data-aos="fade-right" className='absolute top-0 left-0 w-full h-full bg-transparent z-20 pointer-events-none'>
                                    <div className="w-full lg:max-w-[1200px] md:max-w-[696px] max-w-none mx-auto h-full bg-transparent relative">
                                          <div className="absolute w-max bg-transparent lg:bottom-52 md:bottom-16 bottom-16 lg:left-0 left-1/2 lg:-translate-x-0 -translate-x-1/2 z-10 pointer-events-auto">
                                                <div className="new-hero-swiper-pagination"></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </main>
            </>
      )
}
