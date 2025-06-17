'use client'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Icon from '@/components/Icons/Icon';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


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
                  <main className="w-full h-max lg:pt-[140px] pt-[85px] lg:pb-[180px] md:pb-[150px] pb-[150px] overflow-hidden relative z-[5]" style={{ clipPath: `url(#${clipId})` }}>
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
                                          Kontak
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-gray_lg lg:mb-6 mb-5">
                                          Isi nama, email, nomor telefon, dan juga pesan yang ingin di sampaikan dalam form
                                    </p>
                                    <div className='w-full mb-1 flex items-center gap-1'>
                                          <Icon name="email" className='w-5 h-max text-theme-gray_lg' />
                                          <p className="font-normal lg:text-base text-sm text-theme-gray_lg">
                                                info@cqfoundation.or.id
                                          </p>
                                    </div>
                                    <div className='w-full mb-1 flex items-center gap-1'>
                                          <Icon name="phone" className='w-5 h-max text-theme-gray_lg' />
                                          <p className="font-normal lg:text-base text-sm text-theme-gray_lg">
                                                (0251) 85 717 62
                                          </p>
                                    </div>
                                    <Link href="#" className="font-semibold lg:text-base text-sm text-theme-gray_lg underline lg:mb-10 mb-4">
                                          Customer Support
                                    </Link>
                                    <div className='w-full grid md:grid-cols-2 grid-cols-1 lg:gap-5 gap-4'>
                                          <div className='col-span-1 w-full flex flex-col'>
                                                <h2 className='font-semibold lg:text-base text-sm leading-tight text-theme-gray_lg mb-2 '>
                                                      Customer Support
                                                </h2>
                                                <p className='font-normal lg:text-sm text-xs text-theme-gray_lg'>
                                                      Support tim kami siap membantu Anda dan semua kebutuhan Anda
                                                </p>
                                          </div>
                                          <div className='col-span-1 w-full flex flex-col'>
                                                <h2 className='font-semibold lg:text-base text-sm leading-tight text-theme-gray_lg mb-2 '>
                                                      Kritik dan Saran
                                                </h2>
                                                <p className='font-normal lg:text-sm text-xs text-theme-gray_lg'>
                                                      Kita sangat mengharapkan kritik dan saran dari sahabat Cinta Quran sekalian agar selalu memberikan yang terbaik.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className="w-full h-max lg:p-6 p-4 bg-white shadow-md lg:order-2 order-1 flex flex-col rounded-[14px]">
                                    <h2 className='font-semibold lg:text-[24px] text-base text-theme-dark leading-normal'>
                                          Get in touch
                                    </h2>
                                    <p className='font-normal lg:text-base text-sm text-theme-dark leading-normal lg:mb-6 mb-4'>
                                          Hubungi kami kapanpun
                                    </p>
                                    <form action="#" className='w-full flex flex-col lg:gap-y-[14px] gap-y-3'>
                                          {/* ROW 1 */}
                                          <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-[14px] gap-3'>
                                                <div className='w-full col-span-1 relative'>
                                                      <input type="text" name='first_name' id='first_name' className='w-full rounded-full bg-transparent p-3 font-normal lg:text-xs text-[10px] leading-normal outline-none border border-theme-gray_lg' placeholder='Nama Depan' required />
                                                </div>
                                                <div className='w-full col-span-1 relative'>
                                                      <input type="text" name='last_name' id='last_name' className='w-full rounded-full bg-transparent p-3 font-normal lg:text-xs text-[10px] leading-normal outline-none border border-theme-gray_lg' placeholder='Nama Belakang' required />
                                                </div>
                                          </div>
                                          {/* ROW 2 */}
                                          <div className='w-full relative'>
                                                <Icon name='email' className="w-4 h-max absolute top-1/2 -translate-y-1/2 left-[14px] text-theme-gray" />
                                                <input type="email" name='email' id='email' className='w-full rounded-full bg-transparent pr-[14px] pl-9 py-3 font-normal lg:text-xs text-[10px] leading-normal outline-none border border-theme-gray_lg' placeholder='Alamat Email' required />
                                          </div>
                                          {/* ROW 3 */}
                                          <div className='w-full relative'>
                                                <PhoneInput
                                                      country={'id'}
                                                      enableSearch
                                                      inputProps={{
                                                            name: 'phone',
                                                            required: true,
                                                      }}
                                                      containerClass="w-full"
                                                      inputClass="!w-full !rounded-full !bg-transparent !pr-[14px] !pl-[45px] !py-5 !font-normal !lg:text-xs !text-[10px] !leading-normal !outline-none !border !border-theme-gray_lg"
                                                      buttonClass="!w-max !h-max !bg-transparent !border-none !outline-none !left-[10px] !top-1/2 !-translate-y-1/2"
                                                      dropdownClass="!text-xs"
                                                />
                                          </div>
                                          {/* ROW 4 */}
                                          <div className='w-full relative'>
                                                <textarea rows={7} name='description' id='description' className='w-full rounded-[20px] bg-transparent px-[14px] py-3 font-normal lg:text-xs text-[10px] leading-normal outline-none border border-theme-gray_lg' placeholder='Apa yang bisa kami bantu?' required />
                                          </div>
                                          <button type='submit' className='w-full p-[10px] rounded-full bg-theme-ascent flex items-center justify-center text-center font-medium lg:text-sm text-xs text-white hover:bg-opacity-80 duration-200 lg:mt-[10px] mt-[5px]'>
                                                Submit
                                          </button>
                                          <span className='w-full inline-block text-center leading-snug lg:mt-[10px] mt-[5px] font-normal lg:text-sm text-xs'>
                                                Dengan menghubungi kami, maka Anda setuju dengan <Link href="/terms" className='font-semibold'>Terms of service</Link> dan <Link href="/privacy" className='font-semibold'>Privacy Policy</Link>
                                          </span>
                                    </form>
                              </div>
                        </section>
                  </main>
            </>
      )
}
