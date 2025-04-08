import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardInspirationProps = {
      image: string
      category: string
      title: string
      date: string
      time: string
}

export default function CardInspiration(props: CardInspirationProps) {
      return (
            <>
                  <Link href="#" className='block w-full h-max rounded-[16px] overflow-hidden shadow-md lg:hover:-translate-y-1 duration-200 transition-all transform'>
                        {/* IMAGE */}
                        <div className='w-full h-[369px] rounded-t-[16px] overflow-hidden'>
                              <Image
                                    src={props.image}
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
                                          {props.category}
                                    </h2>
                              </div>
                              {/* title */}
                              <h2 className='font-semibold lg:text-[20px] text-base leading-tight line-clamp-1'>
                                    {props.title}
                              </h2>
                              {/* date */}
                              <p className='font-semibold lg:text-base text-sm text-theme-ascent line-clamp-1'>
                                    {props.date}
                              </p>
                              {/* time */}
                              <p className='font-normal lg:text-sm text-xs'>
                                    {props.time}
                              </p>
                        </div>
                  </Link>
            </>
      )
}
