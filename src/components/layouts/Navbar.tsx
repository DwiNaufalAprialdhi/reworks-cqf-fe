import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Icon from '../Icons/Icon'
import { motion } from 'framer-motion';
import ButtonOutline from '../materials/ButtonOutline';
import AOS from "aos";
import { useRouter } from 'next/router';


export default function Navbar() {
      const router = useRouter();
      const isHome = router.pathname === "/";
      const [isSearchOpen, setIsSearchOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 0);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const [, setScrollY] = useState(0);

      useEffect(() => {
            const handleScroll = () => {
                  setScrollY(window.scrollY);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const [isOverlayVisible, setOverlayVisible] = useState(false);

      const handleMoreClick = () => {
            setOverlayVisible(!isOverlayVisible);
      };

      const [isNavbarVisible, setIsNavbarVisible] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);

      useEffect(() => {
            const handleScroll = () => {
                  const currentScrollY = window.scrollY;

                  // Hide navbar on scroll down, show on scroll up
                  if (currentScrollY > lastScrollY) {
                        setIsNavbarVisible(false);
                  } else {
                        setIsNavbarVisible(true);
                  }

                  setLastScrollY(currentScrollY);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, [lastScrollY]);

      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);

      return (
            <>
                  {/* DESKTOP */}
                  <nav className={`${isScrolled ? 'fixed w-full h-max lg:pt-0 lg:pb-0 pb-0 pt-0 z-50 bg-white' : 'fixed w-full h-max lg:pt-5 lg:pb-5 pb-3 pt-3 z-50'} transition-all duration-500 transform ${isHome ? 'xl:scale-[1.1]' : ''}`}>
                        {/* Content */}
                        <div data-aos='fade-down' className='w-full lg:max-w-[1200px] md:max-w-[696px] max-w-none mx-auto py-3 px-5 lg:px-0 flex items-center gap-6 transition-all duration-500 transform'>
                              <div className='flex-shrink-0 flex items-center justify-start gap-[70px]'>
                                    {/* LOGO */}
                                    <Link href='/' className='w-max h-max block'>
                                          <Image
                                                src={isScrolled ? 'assets/logo/cqf.svg' : 'assets/logo/cqf-white.svg'}
                                                alt='logo'
                                                width={100}
                                                height={100}
                                                className='lg:w-[150px] w-[100px] h-max object-contain'
                                          />
                                    </Link>
                                    {/* MENU */}
                                    <div className='hidden lg:flex items-center gap-6'>
                                          <Link href='/program' className={`${isScrolled ? 'menu_navbar_scrolled' : 'menu_navbar'}`}>
                                                Program
                                          </Link>
                                          <Link href='/kajian' className={`${isScrolled ? 'menu_navbar_scrolled' : 'menu_navbar'}`}>
                                                Kajian
                                          </Link>
                                          <Link href='/live-donation' className={`${isScrolled ? 'menu_navbar_scrolled' : 'menu_navbar'}`}>
                                                Donasi
                                          </Link>
                                          <Link href='/kemitraan' className={`${isScrolled ? 'menu_navbar_scrolled' : 'menu_navbar'}`}>
                                                Kemitraan
                                          </Link>
                                          <Link href='/update' className={`${isScrolled ? 'menu_navbar_scrolled' : 'menu_navbar'}`}>
                                                Update
                                          </Link>
                                          <Link href='/contact' className={`${isScrolled ? 'menu_navbar_scrolled' : 'menu_navbar'}`}>
                                                Kontak
                                          </Link>
                                    </div>
                              </div>
                              <div className='flex-grow flex items-center justify-end lg:gap-6 gap-2'>
                                    {/* Input Search */}
                                    <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: isSearchOpen ? "auto" : 0, opacity: isSearchOpen ? 1 : 0 }}
                                          transition={{ duration: 0.3 }}
                                          className='overflow-hidden flex-grow'
                                    >
                                          <input type="text" name='search' id='search' className={`${isScrolled ? 'search_navbar_scrolled' : 'search_navbar'} w-full`} placeholder='Cari...' />
                                    </motion.div>
                                    <div className='flex-shrink-0 flex items-center lg:gap-6 gap-3'>
                                          {isSearchOpen ? <>
                                                <button className='w-max h-max hover:opacity-60 duration-300' onClick={() => setIsSearchOpen(!isSearchOpen)}>
                                                      <Icon name='close' className={`lg:w-4 lg:h-4 w-3 h-3 ${isScrolled ? 'text-slate-800' : 'text-white'} `} />
                                                </button>
                                          </> : <>
                                                <button className='w-max h-max hover:opacity-60 duration-300' onClick={() => setIsSearchOpen(!isSearchOpen)}>
                                                      <Icon name='search' className={`lg:w-4 lg:h-4 w-3 h-3 ${isScrolled ? 'text-slate-800' : 'text-white'} `} />
                                                </button>
                                          </>}
                                          {/* Kondisi Belum Login */}
                                          <Link href="/auth/login" className={`${isScrolled ? 'btn_navbar_scrolled' : 'btn_navbar'} hidden lg:block `}>
                                                Masuk
                                          </Link>
                                          {/* Kondisi Sudah Login */}
                                          {/* <div className="hidden lg:flex items-center gap-2 relative cursor-pointer">
                                                <div className='w-7 h-7 rounded-full overflow-hidden'>
                                                      <Image src={'/assets/images/profile-placeholder.png'}
                                                            alt='avatar'
                                                            width={100} height={100}
                                                            className='w-full h-full object-cover'
                                                      />
                                                </div>
                                                <Icon name='chevronDownv2' className={`w-4 h-4 ${isScrolled ? 'text-slate-800' : 'text-white'} `} />
                                          </div> */}
                                    </div>
                              </div>
                        </div>
                  </nav>

                  {/* Mobile */}
                  <nav className={`fixed lg:hidden bottom-0 inset-x-0 z-[70] w-full h-auto bg-transparent transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                        <div className='container_section lg:px-0 py-3 px-5 rounded-t-[16px] flex items-center justify-around bg-white shadow-sm border-t border-[#D0D0D0] border-opacity-10'>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='home' className='w-6 h-6 text-theme-ascent group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-ascent group-hover:text-theme-ascent'>
                                          Home
                                    </h2>
                              </Link>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='donation' className='w-6 h-6 text-theme-gray group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-gray group-hover:text-theme-ascent'>
                                          Donasi
                                    </h2>
                              </Link>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='program' className='w-6 h-6 text-theme-gray group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-gray group-hover:text-theme-ascent'>
                                          Program
                                    </h2>
                              </Link>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='kajian' className='w-6 h-6 text-theme-gray group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-gray group-hover:text-theme-ascent'>
                                          Kajian
                                    </h2>
                              </Link>
                              <div onClick={handleMoreClick} className='flex flex-col items-center justify-center gap-y-1 group cursor-pointer'>
                                    <Icon name='more' className={`w-6 h-6 ${isOverlayVisible ? 'text-theme-ascent' : 'text-theme-gray'} group-hover:text-theme-ascent`} />
                                    <h2 className={`font-normall text-[10px] leading-[20px] ${isOverlayVisible ? 'text-theme-ascent' : 'text-theme-gray'} group-hover:text-theme-ascent`}>
                                          Lainnya
                                    </h2>
                              </div>
                        </div>
                  </nav>

                  {/* Overlay */}
                  <div className={`fixed lg:hidden top-0 inset-x-0 w-full h-full min-h-screen pb-[100px] overflow-y-auto bg-white z-[60] transform ${isOverlayVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`} >
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50'>
                              {/* Kondisi Ketika Belum Login */}
                              <div className='w-full px-5 flex items-center justify-center'>
                                    <Link href='#' className='w-full bg-white py-[10px] px-[32px] flex items-center justify-center font-normal text-theme-ascent text-base rounded-full hover:opacity-70 duration-300'>
                                          Masuk
                                    </Link>
                                    <Link href='#' className='w-full bg-theme-ascent py-[10px] px-[32px] flex items-center justify-center font-normal text-white text-base rounded-full hover:opacity-70 duration-300'>
                                          Daftar
                                    </Link>
                              </div>
                              {/* Kondisi Ketika Sudah Login */}
                              {/* <div className='w-full px-5 flex items-center gap-x-3'>
                                    <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
                                          <Image src='/assets/images/profile-placeholder.png' alt='images' width={48} height={48} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col'>
                                          <p className='font_baloo font-semibold  text-sm leading-tight'>John Doe</p>
                                          <p className='font_baloo font-normal text-xs leading-tight'>johndoe@gmail.com</p>
                                    </div>
                              </div> */}
                        </div>
                        {/* Kondisi Ketika Sudah Login */}
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='navbar_link_menu'>Kajian</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Amazing Box</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Barang Berkah</Link>
                                    <Link href={'#'} className='navbar_link_menu'>CintaQuran Call</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Konfirmasi Pembayaran</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Fundraiser</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Pengingat Donasi</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Pengaturan</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='navbar_link_menu'>Program</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Kajian</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Donasi</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Kemitraan</Link>
                                    <Link href={'#'} className='navbar_link_menu'>News & Update</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='navbar_link_menu'>Volunteer</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Tentang Kami</Link>
                                    <Link href={'#'} className='navbar_link_menu'>FAQ</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Syarat & Ketentuan</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Kebijakan Privasi</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <a href={'/report'} className='w-full'>
                                          <ButtonOutline type='button' className='w-full'>Laporan Lembaga</ButtonOutline>
                                    </a>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-y-3">
                                    <h2 className='font_baloo font-medium text-base'>Follow Us</h2>
                                    <div className='flex items-center justify-center gap-x-6'>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='facebook' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='twitter' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='youtube' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='instagram' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='linkedin' className='w-4 h-4 text-white' />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
