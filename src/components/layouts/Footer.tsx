import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonIconFooter from '../materials/ButtonIconFooter'
// import Icon from '../Icons/Icon'
import MenuIconLink from './footer/MenuIconLink'
export default function Footer() {
      return (
            <>
                  <main className='hidden lg:block w-full pt-[100px] pb-[50px] h-auto overflow-hidden relative z-10 font-smooth'>
                        {/* Footer */}
                        <footer className='container_section relative z-[8]'>
                              <div data-aos='fade-up' className='w-full grid grid-cols-3 gap-[50px]'>
                                    {/* Column 1 */}
                                    <div className='w-full col-span-1 flex flex-col'>
                                          <Link href='#' className='block'>
                                                <Image src='/assets/logo/cqf.svg' alt='logo' width={180} height={40} className='w-[180px] h-auto object-cover mb-6' />
                                          </Link>
                                          <p className='font-normal text-sm mb-[25px]'>
                                                Cinta Quran Foundation adalah lembaga independen yang mendakwahkan Alquran sebagai solusi dan inspirasi untuk negeri.
                                          </p>
                                          <Link href='/report' className='block w-max mb-[50px]'>
                                                <ButtonIconFooter>
                                                      Laporan Lembaga
                                                </ButtonIconFooter>
                                          </Link>
                                          <p className='font-normal text-sm mb-[25px]'>
                                                Jl. Parikesit Raya No.35-37 Bantarjati, Bogor Utara, Kota Bogor 16153, Jawa Barat, Indonesia.
                                          </p>
                                          <p className='font-normal text-sm mb-[20px]'>
                                                info@cqfoundation.or.id
                                          </p>
                                          <h2 className="font-medium text-[20px] mb-[25px]">
                                                (0251) 85 717 62
                                          </h2>
                                          <MenuIconLink />

                                    </div>
                                    <div className='w-full col-span-2 grid grid-cols-3'>
                                          {/* Column 2 */}
                                          <div className='w-full col-span-1 grid grid-cols-1 gap-x-1'>
                                                <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                      <h2 className='font-medium text-base'>
                                                            Main
                                                      </h2>
                                                      <Link href='/program' className='block'>
                                                            <h2 className='menu_footer_link'>Program</h2>
                                                      </Link>
                                                      <Link href='/live-donation' className='block'>
                                                            <h2 className='menu_footer_link'>Donasi</h2>
                                                      </Link>
                                                      <Link href='/kajian' className='block'>
                                                            <h2 className='menu_footer_link'>Kajian</h2>
                                                      </Link>
                                                      <Link href='/kemitraan' className='block'>
                                                            <h2 className='menu_footer_link'>Kemitraan</h2>
                                                      </Link>
                                                      <Link href='/inspiration' className='block'>
                                                            <h2 className='menu_footer_link'>Inspirasi</h2>
                                                      </Link>
                                                </div>
                                          </div>
                                          {/* Column 3 */}
                                          <div className='w-full col-span-1 grid grid-cols-1 gap-x-1'>
                                                <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                      <h2 className='font-medium text-base'>
                                                            More
                                                      </h2>
                                                      <Link href='/volunteer' className='block'>
                                                            <h2 className='menu_footer_link'>Volunteer</h2>
                                                      </Link>
                                                      <Link href='/about' className='block'>
                                                            <h2 className='menu_footer_link'>Tentang Kami</h2>
                                                      </Link>
                                                      <Link href='/faq' className='block'>
                                                            <h2 className='menu_footer_link'>FAQ</h2>
                                                      </Link>
                                                      <Link href='/terms' className='block'>
                                                            <h2 className='menu_footer_link'>Syarat & Ketentuan</h2>
                                                      </Link>
                                                      <Link href='/privacy' className='block'>
                                                            <h2 className='menu_footer_link'>Kebijakan Privasi</h2>
                                                      </Link>
                                                </div>
                                          </div>
                                          {/* Column 4 */}
                                          <div className='w-full col-span-1 grid grid-cols-1 gap-x-1'>
                                                <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                      <h2 className='font-medium text-base'>
                                                            Information
                                                      </h2>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Return & Refund Policy</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Delivery Policy</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Privacy Policy</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Syarat & Ketentuan</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Terms & Conditions</h2>
                                                      </Link>
                                                </div>
                                          </div>
                                          {/* Column 4 */}
                                          <div className='w-full col-span-1 grid grid-cols-1 gap-x-1'>
                                                <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                      <h2 className='font-medium text-base'>
                                                            Group
                                                      </h2>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Cinta Quran Foundation</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Cinta Quran Learning</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Cinta Quran Store</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Cinta Quran Center</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Amazing Journey</h2>
                                                      </Link>
                                                </div>
                                          </div>
                                          {/* Column 5 */}
                                          <div className='w-full col-span-1 grid grid-cols-1 gap-x-1'>
                                                <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                      <h2 className='font-medium text-base'>
                                                            Program
                                                      </h2>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Humanity</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Sedekah</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Wakaf</h2>
                                                      </Link>
                                                      <Link href='#' className='block'>
                                                            <h2 className='menu_footer_link'>Pendidikan</h2>
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <h2 className='font-normal text-sm pt-[100px]'>© Copyright CintaQuran® Foundation All Rights Reserved.</h2>
                        </footer>
                  </main>
            </>
      )
}
