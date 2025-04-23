import Icon from '@/components/Icons/Icon'
import Link from 'next/link'
import React from 'react'

type Props = {
      link: string
      title: string
      time: string
      views: string
}

export default function ItemUpdate(props: Props) {
      return (
            <>
                  <Link href={props.link} className='w-full flex flex-col gap-1 pt-2 hover:-translate-y-1 duration-200 transform transition-all'>
                        <h2 className='font-baloo font-semibold md:text-lg text-base leading-tight tracking-tight'>
                              {props.title}
                        </h2>
                        <div className='w-max flex items-center justify-start gap-x-2 translate-x-4'>
                              <h2 className='font-baloo font-normal text-theme-secondary md:text-sm text-xs'>
                                    {props.time}
                              </h2>
                              <div className='flex items-center justify-start gap-x-1'>
                                    <Icon name="views" className='w-3 h-3 text-theme-secondary' />
                                    <h2 className='font-baloo font-normal text-theme-secondary md:text-sm text-xs'>
                                          {props.views} views
                                    </h2>
                              </div>
                        </div>
                  </Link>
            </>
      )
}
