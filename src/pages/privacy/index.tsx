import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import Privacy from '@/components/ui/Privacy'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Privacy Policy - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Privacy />
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
