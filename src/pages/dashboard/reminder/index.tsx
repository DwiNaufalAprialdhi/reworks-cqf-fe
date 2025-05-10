import Icon from '@/components/Icons/Icon'
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Pengingat Donasi - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* Select */}
                                    <div className={`block lg:hidden w-full h-max relative mb-[48px]`}>
                                          {/* Icon */}
                                          <Icon name="chevronDown" className='absolute w-4 h-4 top-3 right-4 text-theme-dark z-[1] pointer-events-none' />
                                          <select
                                                name="select"
                                                id="select"
                                                className='py-3 pl-4 pr-[42px] border border-[#9B9B9B] rounded-[4px] appearance-none w-full bg-transparent font-medium text-xs outline-none'
                                          >
                                                <option value="CintaQuranFoundation">Cinta Quran Foundation</option>
                                                <option value="CintaQuranLearning">Cinta Quran Learning</option>
                                                <option value="CintaQuranCall">Cinta Quran Call</option>
                                          </select>
                                    </div>
                                    {/* Pengingat Donasi Title */}
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal mb-4'>
                                          Pengingat Donasi
                                    </h2>
                                    {/* Content */}
                                    <form className="w-full h-max bg-[#F7F9FB] rounded-[16px] lg:py-[32px] lg:px-6 py-5 px-5">
                                          <div className='w-full flex flex-col gap-y-2 lg:mb-[32px] mb-5'>
                                                <label htmlFor="reminder"
                                                      className='reminder_label'
                                                >
                                                      Tanggal Pengingat Donasi<span className='text-red-500'>*</span>
                                                </label>
                                                <div className='w-full relative'>
                                                      <input
                                                            type="date"
                                                            name="reminder"
                                                            id="reminder"
                                                            className='reminder_input'
                                                            required
                                                      />
                                                </div>
                                          </div>
                                          <div className='w-full flex flex-wrap gap-3 items-center gap-x-[10px]'>
                                                <button type='submit' className='reminder_submit'>
                                                      Ingatkan Saya Donasi Tiap Bulan
                                                </button>
                                                <button type="reset" className='reminder_reset'>
                                                      Reset
                                                </button>
                                          </div>
                                    </form>
                              </section>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
