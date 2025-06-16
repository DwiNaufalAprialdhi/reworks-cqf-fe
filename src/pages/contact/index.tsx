import Banner from '@/components/layouts/Banner'
import Contact from '@/components/layouts/contact/Contact'
import Hero from '@/components/layouts/contact/Hero'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import OrnamentContact from '@/components/ui/OrnamentContact'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Contact - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <div className="w-full overflow-hidden relative">
                        <OrnamentContact />
                        <Hero />
                        <Contact />
                  </div>
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
