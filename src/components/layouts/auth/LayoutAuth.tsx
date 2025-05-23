import Image from 'next/image'
import React from 'react'

type Props = {
      children: React.ReactNode
}

export default function LayoutAuth(props: Props) {
      return (
            <>
                  <div className='w-full h-full min-h-screen relative overflow-x-hidden'>
                        {/* Ornament */}
                        <div className='absolute top-0 left-0 w-full h-auto z-[1] bounce01'>
                              <Image src='/assets/ornament/ornament-01.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute top-0 left-0 w-full h-auto z-[2] bounce02'>
                              <Image src='/assets/ornament/ornament-02.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute top-0 left-0 w-full h-auto z-[3] bounce03'>
                              <Image src='/assets/ornament/ornament-03.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute top-0 left-0 w-full h-auto z-[4] bounce04'>
                              <Image src='/assets/ornament/ornament-04.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>

                        <div className='w-full flex items-center justify-center md:py-[50px] py-5 px-5 lg:px-0 relative z-10'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
