import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ButtonIconOutline from '../materials/ButtonIconOutline'

export default function Banner() {
      return (
            <main className='w-full h-auto overflow-hidden pb-[100px] lg:pt-[70px] pt-[50px] lg:pb-0 font-smooth relative z-10'>
                  <section className='container_section px-5 lg:px-0'>
                        <div className='w-full h-auto lg:p-10 p-5 rounded-[24px] overflow-hidden flex flex-col lg:gap-y-6 gap-y-5 relative group'>
                              {/* Image */}
                              <div className='absolute w-full h-full top-0 left-0 group-hover:scale-110 duration-1000 z-[1]'>
                                    <Image src='/assets/images/banner.svg' width={718} height={400} alt='Banner' className='w-full h-full object-cover' />
                              </div>
                              {/* Layer */}
                              <div className='absolute w-full h-full top-0 left-0 z-[3] bg-gradient-to-r from-theme-ascent/85 to-theme-green/85'></div>
                              {/* Content */}
                              <h2 className='w-full lg:max-w-[718px] max-w-none font-semibold lg:text-[32px] text-[24px] text-white text-center lg:text-start relative z-[5]'>
                                    Mari Bergabung Bersama CintaQuran Foundation Satu Hati Menggemakan #IndonesiaCintaQuran
                              </h2>
                              <Link href='#' className='w-full lg:max-w-[390px] max-w-none relative z-[5]'>
                                    <ButtonIconOutline>
                                          Daftar Sekarang
                                    </ButtonIconOutline>
                              </Link>
                        </div>
                  </section>
            </main>
      )
}
