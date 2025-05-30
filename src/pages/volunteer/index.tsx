import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/layouts/volunteer/Hero'
import List from '@/components/layouts/volunteer/List'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import OrnamentVolunteer from '@/components/ui/OrnamentVolunteer'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Volunteer - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <div className="w-full overflow-hidden relative">
                        <OrnamentVolunteer />
                        <Hero />
                        <List />
                  </div>
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
