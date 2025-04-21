import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/layouts/update/Hero'
import Introduction from '@/components/layouts/update/Introduction'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>News & Update - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <Introduction />
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
