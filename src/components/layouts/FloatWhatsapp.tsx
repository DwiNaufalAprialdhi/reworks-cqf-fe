import React from 'react'
import Icon from '../Icons/Icon'
import Link from 'next/link'

export default function FloatWhatsapp() {
      return (
            <>
                  <div className='w-full h-[50px] bg-transparent bottom-[50px] left-0 fixed z-[100] pointer-events-none'>
                        <div className='w-full h-full lg:max-w-[1200px] md:max-w-[696px] max-w-none mx-auto bg-transparent pointer-events-none flex items-center justify-end'>
                              <Link href='#' className='max-w-max bg-[#00C062] py-[11px] px-4 rounded-full flex items-center justify-center gap-x-2 font-semibold lg:text-sm text-xs text-white pointer-events-auto hover:bg-opacity-80 duration-300'>
                                    Hubungi Kami
                                    <Icon name='whatsapp' className='w-4 h-4 text-white' />
                              </Link>
                        </div>
                  </div>
            </>
      )
}
