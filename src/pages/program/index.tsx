import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/layouts/program/Hero'
import Introduction from '@/components/layouts/program/Introduction'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import OrnamentProgram from '@/components/ui/OrnamentProgram'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Program - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <div className="w-full overflow-hidden relative lg:pb-[70px] lg:mb-[70px] pb-[20px] mb-[20px]">
                        <OrnamentProgram />
                        <Hero />
                  </div>
                  <Introduction />
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
