import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/layouts/report/Hero'
import Footer from '@/components/layouts/Footer'
import OnlineReport from '@/components/layouts/report/OnlineReport'
import OfflineReport from '@/components/layouts/report/OfflineReport'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import Banner from '@/components/layouts/Banner'


export default function index() {
      return (
            <>
                  <Head>
                        <title>Laporan Lembaga - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <OnlineReport />
                  <OfflineReport />
                  <div className="w-full h-max relative footer_main overflow-hidden">
                        <OrnamentFooter />
                        <Banner />
                        <Footer />
                  </div>
            </>
      )
}
