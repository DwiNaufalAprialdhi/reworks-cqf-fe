import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      link: string
      image: string
      category: string
      title: string
      description: string
      time: string
      views: string
}

export default function CardNewsUpdate(props: Props) {
      return (
            <>
                  <Link href={props.link} className='w-full h-max flex flex-col rounded-[16px] overflow-hidden shadow-md bg-white md:hover:-translate-y-1 duration-300 transition-all transform'>
                        {/* image */}
                        <div className='w-full h-[360px] rounded-t-[16px] overflow-hidden'>
                              <Image
                                    src={props.image}
                                    alt='news-update'
                                    width={360} height={360}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        {/* CONTENT */}
                        <div className='w-full flex flex-col gap-2 py-[22px] px-5'>
                              {/* category */}
                              <div className='w-max h-max py-1 px-2 rounded-full bg-theme-ascent/5 font-normal lg:text-xs text-[10px] text-theme-ascent'>
                                    <h2>
                                          {props.category}
                                    </h2>
                              </div>
                              {/* title */}
                              <h2 className='font-semibold lg:text-[20px] text-base leading-tight line-clamp-2'>
                                    {props.title}
                              </h2>
                              {/* description */}
                              <p className='font-normal lg:text-sm text-xs text-theme-secondary line-clamp-4'>
                                    {props.description}
                              </p>
                              {/* time and views */}
                              <div className='w-full flex items-center justify-between'>
                                    <p className='font-normal lg:text-sm text-xs text-[#9B9B9B]'>
                                          {props.time}
                                    </p>
                                    <div className='flex items-center justify-end font-normal lg:text-sm text-xs gap-1 text-[#9B9B9B]'>
                                          <Icon name="views" className="lg:w-5 lg:h-5 w-4 h-4" />
                                          {props.views} views
                                    </div>
                              </div>
                        </div>
                  </Link>
            </>
      )
}
