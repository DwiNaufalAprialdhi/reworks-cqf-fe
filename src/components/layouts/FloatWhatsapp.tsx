import React, { useEffect } from 'react'
import Icon from '../Icons/Icon'
import Link from 'next/link'
import AOS from "aos";


export default function FloatWhatsapp() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <div data-aos='fade-left' className='w-full h-[50px] lg:bottom-[50px] md:bottom-8 bottom-20 left-0 fixed z-[100] pointer-events-none'>
                        <div className='w-full h-full xl:scale-[1.1] lg:max-w-[1200px] md:max-w-[696px] max-w-none mx-auto bg-transparent pointer-events-none flex items-center justify-end lg:pr-0 pr-5'>
                              <Link href='#' className='max-w-max bg-[#00C062] md:py-[11px] py-3 md:px-4 px-3 rounded-full flex items-center justify-center gap-x-2 font-semibold lg:text-sm text-xs text-white pointer-events-auto hover:bg-opacity-90 duration-300 group transition-all transform ease-in-out'>
                                    <h2 className='hidden md:block'>
                                          Hubungi Kami
                                    </h2>
                                    <Icon name='whatsapp' className='w-4 h-4 text-white' />
                              </Link>
                        </div>
                  </div>
            </>
      )
}
