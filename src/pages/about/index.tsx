import Hero from '@/components/layouts/about/Hero'
import ProfileLegalitas from '@/components/layouts/about/ProfileLegalitas'
import Structure from '@/components/layouts/about/Structure'
import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>About - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <ProfileLegalitas />
                  <Structure />
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
