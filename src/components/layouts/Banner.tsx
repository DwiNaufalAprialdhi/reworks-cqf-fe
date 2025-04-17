import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icons/Icon'

export default function Banner() {
      return (
            <main className='w-full h-auto overflow-hidden pb-[100px] lg:pt-[100px] pt-[0px] lg:pb-0 font-smooth relative z-10'>
                  <section className='container_section px-5 lg:px-0'>
                        <div className='w-full h-auto lg:py-10 lg:px-10 py-[80px] px-5 lg:rounded-[24px] rounded-[16px] overflow-hidden flex flex-col lg:gap-y-6 gap-y-5 relative group'>
                              {/* Image */}
                              <div className='absolute w-full h-full top-0 left-0 group-hover:scale-110 duration-1000 z-[1]'>
                                    <Image src='/assets/images/banner.svg' width={718} height={400} alt='Banner' className='w-full h-full object-cover' />
                              </div>
                              {/* Layer */}
                              <div className='absolute w-full h-full top-0 left-0 z-[3] bg-gradient-to-r from-theme-ascent/85 to-theme-green/85'></div>
                              {/* Content */}
                              <h2 className='w-full lg:max-w-[718px] max-w-none font-semibold lg:text-[32px] text-[24px] text-white text-start relative z-[5]'>
                                    Mari Bergabung Bersama CintaQuran Foundation Satu Hati Menggemakan #IndonesiaCintaQuran
                              </h2>
                              <Link href='#' className='w-full lg:max-w-[390px] max-w-none relative z-[5] block'>
                                    <button className='w-full flex items-center lg:gap-x-[10px] gap-x-2 font-normal lg:text-base text-sm text-white'>
                                          <h2>
                                                Daftar Sekarang
                                          </h2>
                                          <div className='w-5 h-5 rounded-full bg-white flex items-center justify-center overflow-hidden group-hover:translate-x-1 duration-200 transition-all'>
                                                <Icon name='arrowRight' className='w-3 h-3 text-theme-ascent' />
                                          </div>
                                    </button>
                              </Link>
                        </div>
                  </section>
            </main>
      )
}
