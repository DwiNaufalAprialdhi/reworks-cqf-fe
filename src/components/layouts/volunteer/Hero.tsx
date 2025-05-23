import InputSearch from '../program/InputSearch'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import Statistics from '@/components/ui/Statistics';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import HeroItem from './HeroItem';
import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Hero() {
      const [clipId, setClipId] = useState('hero-clip-desktop');
      const router = useRouter(); // ⬅️ Ambil router instance

      // Fungsi penyesuaian ukuran
      const updateClipPath = () => {
            if (typeof window !== "undefined") {
                  if (window.innerWidth < 768) {
                        setClipId('hero-clip-mobile');
                  } else {
                        setClipId('hero-clip-desktop');
                  }
            }
      };

      useEffect(() => {
            AOS.init({
                  duration: 1000,
                  once: true,
            });

            updateClipPath(); // Jalankan pertama kali
            window.addEventListener('resize', updateClipPath);

            // Jalankan kembali saat berpindah halaman
            router.events.on('routeChangeComplete', updateClipPath);

            return () => {
                  window.removeEventListener('resize', updateClipPath);
                  router.events.off('routeChangeComplete', updateClipPath);
            };
      }, [router.events]); // ← pastikan efek ini tergantung pada events router
      return (
            <>
                  <Head>
                        {/* Tambah 2 clipPath: desktop & mobile */}
                        <svg width="0" height="0">
                              <defs>
                                    <clipPath id="hero-clip-desktop" clipPathUnits="objectBoundingBox">
                                          <path d="M0,0 H1 V0.7 C0.75,1,0.25,1,0,0.9 Z" />
                                    </clipPath>
                                    <clipPath id="hero-clip-mobile" clipPathUnits="objectBoundingBox">
                                          <path d="M0,0 H1 V0.8 C0.85,1,0.15,1,0,0.95 Z" />
                                    </clipPath>
                              </defs>
                        </svg>
                  </Head>
                  <main className="w-full h-max lg:pt-[0px] pt-[85px] lg:pb-[150px] md:pb-[100px] pb-[80px] overflow-hidden relative z-[5]" style={{ clipPath: `url(#${clipId})` }}>
                        {/* Layer Background */}
                        <div className='w-full h-full absolute top-0 inset-x-0 z-[1]'>
                              <Image
                                    src="/assets/images/discover-hero.png"
                                    alt="discover"
                                    width={1000} height={800}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        {/* Filter */}
                        <div className='w-full h-full bg-gradient-to-r from-black/50 via-black/40 to-theme-ascent/80 absolute top-0 left-0 z-[2]'></div>
                        {/* Ornament */}
                        {/* <div data-aos="fade-down" className='absolute lg:-top-[310px] md:-top-[120px] -top-[50px] left-0 w-full h-auto z-[1]'>
                              <Image src='/assets/ornament/ohd-01.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div data-aos="fade-down" className='absolute lg:-top-[310px] md:-top-[120px] -top-[50px] left-0 w-full h-auto z-[2]'>
                              <Image src='/assets/ornament/ohd-02.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div data-aos="fade-down" className='absolute lg:-top-[310px] md:-top-[120px] -top-[50px] left-0 w-full h-auto z-[3]'>
                              <Image src='/assets/ornament/ohd-03.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div data-aos="fade-down" className='absolute lg:-top-[310px] md:-top-[120px] -top-[50px] left-0 w-full h-auto z-[4]'>
                              <Image src='/assets/ornament/ohd-04.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div> */}


                        {/* Content */}
                        <section className='container_section_view grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-5 relative z-[5]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full lg:pt-[160px] pt-0 col-span-1 lg:order-1 order-2 flex flex-col'>
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-white lg:mb-5 mb-4">
                                          Volunteer
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-gray_lg lg:mb-6 mb-5">
                                          Bergabung menjadi volunteer CintaQuran & sebarkan kebahagiaan serta kebaikan.
                                    </p>
                                    <InputSearch />
                                    <div className="lg:mt-[32px] mt-5 w-full grid grid-cols-2 lg:gap-6 gap-2 items-center">
                                          <Statistics name="donatur" title="Volunteer Akhi" value="+124" />
                                          <Statistics name="donatur" title="Volunteer Ukhti" value="+43" />
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className='w-full lg:pt-[90px] pt-[0px] h-max col-span-1 lg:order-2 order-1 grid grid-cols-1'>
                                    <Swiper
                                          direction={'vertical'}
                                          slidesPerView={4} // Menampilkan 4 slide per tampilan
                                          spaceBetween={20} // Jarak antar slide
                                          loop={true}
                                          autoplay={{
                                                delay: 3000, // Waktu delay antar slide (dalam milidetik)
                                                disableOnInteraction: false, // Otomatis melanjutkan slideshow meskipun pengguna berinteraksi
                                          }}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 10,
                                                },
                                                320: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 3, // Pada layar kecil, tampilkan 1 slide
                                                      spaceBetween: 14, // Jarak antar slide
                                                },
                                                768: {
                                                      slidesPerView: 3, // Pada layar medium, tampilkan 2 slide
                                                      spaceBetween: 14, // Jarak antar slide
                                                },
                                                1024: {
                                                      slidesPerView: 4, // Pada layar besar, tampilkan 3 slide
                                                      spaceBetween: 20, // Jarak antar slide
                                                },
                                                1280: {
                                                      slidesPerView: 4, // Pada layar lebih besar, tampilkan 4 slide
                                                      spaceBetween: 20, // Jarak antar slide
                                                },
                                          }}
                                          modules={[Autoplay]}
                                          className="volunteer-swiper volunteer_main w-full cursor-grab col-span-1 lg:h-[500px] md:h-[400px] h-[350px]"
                                    >
                                          {Array.from({ length: 10 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <HeroItem
                                                            avatar={'/assets/images/pay.jpg'}
                                                            message={'Lorem ipsum dolor sit amet consectetur. Sed lectus elit luctus nibh cras ullamcorper odio. Sit blandit at tristique vitae. Volutpat vestibulum aenean bibendum sit arcu fermentum molestie donec vivamus. Velit pulvinar diam turpis ac lorem amet.'}
                                                      />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </section>
                  </main>
            </>
      )
}
