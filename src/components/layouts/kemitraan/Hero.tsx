import React, { useEffect, useState } from 'react'
import AOS from "aos";
import Image from 'next/image';
import InputSearch from '../program/InputSearch';
import Statistics from '@/components/ui/Statistics';
import { useRouter } from 'next/router';
import Head from 'next/head';

const generateRandomDelay = () => `${Math.random() * 5}s`;

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
                  <main className="w-full h-max lg:pt-[140px] pt-[85px] lg:pb-[180px] md:pb-[100px] pb-[80px] overflow-hidden relative z-[5]" style={{ clipPath: `url(#${clipId})` }}>
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
                        <section className='container_section_view grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[70px] gap-5 relative z-[5]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full col-span-1 lg:order-1 order-2 flex flex-col'>
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-white lg:mb-5 mb-4">
                                          Kemitraan
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-gray_lg lg:mb-6 mb-5">
                                          Cinta Quran Foundation siap menjadi mitra strategis Perusahaan/Lembaga/Instansi, dalam rangka mewujudkan pemberdayaan dan kemandirian umat.
                                    </p>
                                    <InputSearch />
                                    <div className="lg:mt-[32px] mt-5 w-full grid grid-cols-2 lg:gap-6 gap-2 items-center">
                                          <Statistics name="donatur" title="Total Mitra" value="+124" />
                                          <Statistics name="building" title="Kategori Mitra" value="+43" />
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className="mitra_section w-full lg:h-[480px] h-[200px] col-span-1 lg:order-2 order-1 relative overflow-hidden grid grid-cols-3 gap-4">
                                    {/* Lane 1 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqc.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 2 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqf.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 3 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqstore.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 4 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqf.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 5 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqc.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 6 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqf.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
