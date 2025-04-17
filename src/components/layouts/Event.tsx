import Link from 'next/link'
import React, { useEffect } from 'react'
import Icon from '../Icons/Icon'
import Image from 'next/image'
import AOS from "aos";


export default function Event() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <main className='w-full h-auto overflow-x-hidden relative z-[7] lg:pb-[200px] pb-[50px] font-smooth'>
                        <section className='container_section_view grid lg:grid-cols-2 grid-cols-1 md:gap-[50px] gap-5'>
                              {/* LEFT */}
                              <div className='w-full h-auto col-span-1 flex flex-col'>
                                    {/* Animate Pulse */}
                                    <div className='max-w-max max-h-max py-1 px-2 rounded-full flex items-center justify-center bg-[#D82525] animate-pulse mb-4'>
                                          <p className='font-normal lg:text-xs text-[10px] text-white'>
                                                Event
                                          </p>
                                    </div>
                                    {/* Title */}
                                    <h2 className='font-semibold md:text-[48px] text-[42px] leading-tight mb-4'>
                                          Rise of The Promised Land
                                    </h2>
                                    {/* Desc */}
                                    <p className='font-normal lg:text-base text-sm text-theme-secondary line-clamp-5'>
                                          Lorem ipsum dolor sit amet consectetur. Proin mattis vitae phasellus diam velit viverra. Mauris consectetur ut leo lacus in lectus. Nunc viverra morbi sapien consequat amet tellus dignissim. Interdum velit adipiscing scelerisque massa sed tincidunt porttitor condimentum.
                                    </p>
                                    {/* CTA */}
                                    <Link href='#' className="w-max flex items-center justify-start gap-2 bg-theme-ascent hover:bg-opacity-85 duration-300 py-[10px] px-[14px] rounded-full md:mt-[35px] mt-5">
                                          <h2 className='font-semibold lg:text-base text-sm text-white'>
                                                Daftar Sekarang
                                          </h2>
                                          <div className='lg:w-5 lg:h-5 w-4 h-4 rounded-full bg-white flex items-center justify-center'>
                                                <Icon name='arrowRight' className='w-3 h-3 text-theme-ascent' />
                                          </div>
                                    </Link>
                              </div>
                              {/* RIGHT */}
                              <div className='w-full h-auto col-span-1 flex flex-col'>
                                    <div className='w-full md:h-[303px] h-[243px] rounded-[16px] overflow-hidden group mb-[20px]'>
                                          <Image
                                                src='/assets/images/thumbnail.png'
                                                alt='event'
                                                width={539} height={303}
                                                className='w-full h-full object-cover group-hover:scale-105 duration-500'
                                          />
                                    </div>
                                    <div className='w-full flex items-center lg:justify-start justify-center gap-6'>
                                          <div className='flex items-center gap-x-2'>
                                                <Icon name='markLocationV2' className='w-5 h-5 text-theme-ascent' />
                                                <p className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      Cinta Quran Center
                                                </p>
                                          </div>
                                          <div className='flex items-center gap-x-2'>
                                                <Icon name='clockV2' className='w-5 h-5 text-theme-ascent' />
                                                <p className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      09.00 - 12.00 WIB
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
