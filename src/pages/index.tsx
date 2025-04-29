import AmazingGroup from '@/components/layouts/AmazingGroup'
import Banner from '@/components/layouts/Banner'
import Bussines from '@/components/layouts/Bussines'
import ChoiceDonation from '@/components/layouts/ChoiceDonation'
import Event from '@/components/layouts/Event'
import FloatWhatsapp from '@/components/layouts/FloatWhatsapp'
import Footer from '@/components/layouts/Footer'
import Hero from '@/components/layouts/Hero'
import Inspiration from '@/components/layouts/Inspiration'
import Mitra from '@/components/layouts/Mitra'
import Navbar from '@/components/layouts/Navbar'
import NewsUpdate from '@/components/layouts/NewsUpdate'
import OptionProgram from '@/components/layouts/OptionProgram'
import OrnamentFooter from '@/components/ui/OrnamentFooter'
import OrnamentHero from '@/components/ui/OrnamentHero'
import OrnamentInspiration from '@/components/ui/OrnamentInspiration'
// import OrnamentMitra from '@/components/ui/OrnamentMitra'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>
      <Head>
        <title>CINTA QURAN FOUNDATION</title>
        <meta name="description" content="Mewujudkan #IndonesiaCintaQuran" />
      </Head>
      <Navbar />
      <div className='scale-wrapper-view'>
        <div className='w-full h-max relative hero-masking'>
          <OrnamentHero />
          <Hero />
          <Event />
        </div>
        <OptionProgram />
        <div className="w-full h-max relative masking">
          <OrnamentInspiration />
          <Inspiration />
          <ChoiceDonation />
          <Bussines />
        </div>
        <div className="w-full h-max relative before-footer-masking">
          {/* <OrnamentMitra /> */}
          <Mitra />
          <AmazingGroup />
          <NewsUpdate />
        </div>
        <div className="w-full h-max relative footer_main overflow-hidden">
          <OrnamentFooter />
          <Banner />
          <Footer />
        </div>
      </div>
      <FloatWhatsapp />
    </>
  )
}
