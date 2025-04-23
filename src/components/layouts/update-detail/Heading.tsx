import Icon from '@/components/Icons/Icon'
import BadgeCategory from '@/components/ui/Update/BadgeCategory'
import React from 'react'

export default function Heading() {
      return (
            <>
                  <section className='container_section_view lg:pt-[105px] pt-[85px] lg:pb-[50px] pb-[20px]'>
                        <div className='w-full h-max flex flex-col font-smooth'>
                              {/* Category */}
                              <BadgeCategory>
                                    Cinta Quran Center
                              </BadgeCategory>
                              {/* Title */}
                              <h2 className='block md:my-4 my-2 font-baloo font-bold md:text-[31px] text-lg leading-tight'>
                                    Pasca Libur Idul Fitri, Mahasantri/wati Kembali ke Ma’had dengan Semangat Baru!
                              </h2>
                              {/* Date & Views */}
                              <div className='max-w-max flex items-center justify-start gap-x-3'>
                                    <h2 className='font-baloo font-normal text-theme-secondary md:text-lg text-sm'>
                                          3 hari yang lalu
                                    </h2>
                                    <div className='flex items-center justify-start gap-x-1'>
                                          <Icon name='views' className='md:w-5 md:h-5 w-3 h-3 text-theme-secondary' />
                                          <h2 className='font-baloo font-normal text-theme-secondary md:text-lg text-sm'>
                                                65 views
                                          </h2>
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      )
}
