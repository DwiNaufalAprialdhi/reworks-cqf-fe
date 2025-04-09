import Link from 'next/link'
import React from 'react'
import CardAmazingGroup from '../ui/AmazingGroup/CardAmazingGroup'


export default function Mitra() {
      return (
            <>
                  <main className="w-full h-auto lg:mb-[100px] mb-[50px] relative z-10 overflow-hidden font-smooth">
                        {/* Content */}
                        <section className='container_section lg:px-0 px-5 relative z-10'>
                              {/* Header */}
                              <div data-aos='fade-right' className='flex flex-col gap-y-4 mb-4'>
                                    <h2 className='font-semibold md:text-[48px] text-[24px] leading-tight'>Mitra Cinta Quran</h2>
                                    <div className='flex md:flex-row flex-col md:items-end items-start md:justify-between justify-start gap-6'>
                                          <p className='w-full lg:max-w-[646px] md:max-w-[400px] max-w-none font-normal text-base text-theme-secondary'>
                                                Cinta Quran Foundation siap menjadi mitra strategis Lembaga, Perusahaan atau Instansi, dalam rangka mewujudkan pemberdayaan dan kemandirian umat
                                          </p>
                                          <Link href="/kemitraan" className='font-normal lg:text-base text-sm text-theme-ascent hover:text-opacity-70 duration-300'>
                                                Lihat Selengkapnya
                                          </Link>
                                    </div>
                              </div>
                              {/* Column */}
                              <div data-aos='fade-left' className="w-full grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5">
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqf.svg'}
                                          />
                                    </div>
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqc.svg'}
                                          />
                                    </div>
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqstore.svg'}
                                          />
                                    </div>
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqf.svg'}
                                          />
                                    </div>
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqf.svg'}
                                          />
                                    </div>
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqc.svg'}
                                          />
                                    </div>
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqstore.svg'}
                                          />
                                    </div>
                                    <div className='w-full col-span-1'>
                                          <CardAmazingGroup image={'/assets/images/cqf.svg'}
                                          />
                                    </div>
                              </div>

                        </section>
                  </main>
            </>
      )
}
