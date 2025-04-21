import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import Terms from '@/components/ui/Terms/Terms'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Terms & Conditions - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Terms />
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
