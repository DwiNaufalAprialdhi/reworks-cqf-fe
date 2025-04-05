import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardInspiration() {
      return (
            <>
                  <Link href="#" className='block w-full h-max rounded-[16px] overflow-hidden shadow-sm lg:hover:-translate-y-1 duration-200 transition-all transform'>
                        {/* IMAGE */}
                        <div className='w-full h-[369px] rounded-t-[16px] overflow-hidden'>
                              <Image
                                    src="/assets/images/mengatasi.svg"
                                    alt="image"
                                    width={369}
                                    height={369}
                                    className="w-full h-full object-cover" />
                        </div>
                        {/* CONTENT */}
                        <div className='w-full bg-white flex flex-col gap-2 px-[15px] pt-[24px] pb-5'>
                              {/* category */}
                              <div className='w-max h-max py-1 px-2 rounded-full bg-theme-ascent/5 font-normal lg:text-xs text-[10px] text-theme-ascent'>
                                    <h2>
                                          Cinta Quran Creative Studio
                                    </h2>
                              </div>
                              {/* title */}
                              <h2 className='font-semibold lg:text-[20px] text-base leading-tight line-clamp-1'>
                                    Menyempurnakan Taqwa
                              </h2>
                              {/* date */}
                              <p className='font-semibold lg:text-base text-sm text-theme-ascent line-clamp-1'>
                                    Kamis, 30 September 2021
                              </p>
                              {/* time */}
                              <p className='font-normal lg:text-sm text-xs'>
                                    09:00 - 10:00
                              </p>
                        </div>
                  </Link>
            </>
      )
}
