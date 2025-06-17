import Icon from '@/components/Icons/Icon'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
      return (
            <>
                  <main className="w-full h-auto overflow-hidden relative lg:mb-[50px] mb-[50px] lg:pt-[100px] pt-[50px] z-[5]">
                        <section className="container_section_view">
                              <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
                                    {/* LEFT */}
                                    <div className='w-full lg:h-[400px] h-[350px] col-span-1 overflow-hidden rounded-[14px] shadow-md lg:order-1 order-2'>
                                          <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.824789566757!2d106.80032486017393!3d-6.590079881263846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c42446ab9739%3A0x8da319e18f6f25e8!2sCinta%20Quran%20Foundation!5e0!3m2!1sid!2sid!4v1750126386632!5m2!1sid!2sid" loading="lazy"></iframe>
                                    </div>
                                    {/* RIGHT */}
                                    <div className='w-full col-span-1 flex flex-col lg:order-2 order-1'>
                                          <h3 className='font-normal lg:text-[20px] text-base leading-tight text-theme-secondary lg:mb-2 mb-1'>
                                                Lokasi Kami
                                          </h3>
                                          <h2 className='font-semibold lg:text-[48px] text-[24px] text-theme-dark leading-tight lg:mb-6 mb-5'>
                                                Hubungi jauh dan dekat
                                          </h2>
                                          <Link href="https://www.google.com/maps?ll=-6.59008,106.810625&z=14&t=m&hl=id&gl=ID&mapclient=embed&cid=10206029637116437992" target='_blank' className='font-medium lg:text-base text-sm text-theme-dark leading-tight underline mb-2'>
                                                Kantor Cinta Quran Foundation
                                          </Link>
                                          <div className='flex items-start justify-start gap-2'>
                                                <Icon name="mark" className='lg:w-6 lg:h-6 w-5 h-5 text-theme-dark block flex-shrink-0' />
                                                <p className='flex-grow block w-full lg:max-w-[242px] max-w-none font-light lg:text-sm text-xs text-theme-dark '>
                                                      Jl. Cimanuk No.B3 No.9, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
