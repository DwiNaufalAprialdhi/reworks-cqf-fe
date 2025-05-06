import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Hero from '@/components/layouts/kemitraan/Hero'
import ListMitra from '@/components/layouts/kemitraan/ListMitra'
import Navbar from '@/components/layouts/Navbar'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import OrnamentKemitraan from '@/components/ui/OrnamentKemitraan'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Kemitraan - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <div className="w-full overflow-hidden relative lg:pb-[70px] lg:mb-[70px] pb-[20px] mb-[20px]">
                        <OrnamentKemitraan />
                        <Hero />
                  </div>
                  <ListMitra />
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
