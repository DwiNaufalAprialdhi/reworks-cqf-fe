import React from 'react'

import ButtonOnScroll from '@/components/materials/ButtonOnScroll'
import Filter from './Filter'
import CardNewsUpdate from '@/components/ui/NewsUpdate/CardNewsUpdate'

export default function Introduction() {
      return (
            <>
                  <main className="w-full h-auto overflow-hidden relative lg:mb-[100px] mb-[50px]">
                        <section className="container_section_view">
                              {/* List Update */}
                              <div data-aos="fade-up" className="w-full flex flex-col gap-y-6">
                                    {/* Filter */}
                                    <div className='flex items-center lg:gap-x-6 gap-x-3'>
                                          <Filter name='filter' id='filter'>
                                                <option value="all">Semua Kategori</option>
                                                <option value="program1">Program 1</option>
                                                <option value="program2">Program 2</option>
                                                <option value="program3">Program 3</option>
                                          </Filter>
                                          <Filter name='filter' id='filter'>
                                                <option value="">Terbaru</option>
                                                <option value="">Terlama</option>
                                          </Filter>
                                    </div>
                                    {/* Card Program */}
                                    <div className="w-full grid grid-cols-3 lg:gap-6 gap-5 lg:pb-1 pb-0">
                                          {/* Item Card Program */}
                                          {Array.from({ length: 6 }).map((_, index) => (
                                                <>
                                                      <div className='w-full lg:col-span-1 col-span-3'>
                                                            <CardNewsUpdate
                                                                  key={index}
                                                                  link={'#'}
                                                                  image={'/assets/images/news-update.png'}
                                                                  category={'Syiar Quran Project'}
                                                                  title={'Sedekah Barang di Momen Ramadhan'}
                                                                  time={'1 jam yang lalu'}
                                                                  views={'325'}
                                                            />
                                                      </div>
                                                </>
                                          ))}
                                          <div className='w-full col-span-3 flex items-center justify-center'>
                                                <div className="w-max h-auto mx-auto">
                                                      <ButtonOnScroll>
                                                            Lihat Lainnya
                                                      </ButtonOnScroll>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
