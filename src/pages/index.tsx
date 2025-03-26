import AmazingGroup from '@/components/layouts/AmazingGroup'
import Banner from '@/components/layouts/Banner'
import Bussines from '@/components/layouts/Bussines'
import ChoiceDonation from '@/components/layouts/ChoiceDonation'
import Event from '@/components/layouts/Event'
import Footer from '@/components/layouts/Footer'
import Hero from '@/components/layouts/Hero'
import Inspiration from '@/components/layouts/Inspiration'
import Navbar from '@/components/layouts/Navbar'
import OptionProgram from '@/components/layouts/OptionProgram'
import OrnamentHero from '@/components/ui/OrnamentHero'
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
      <div className='w-full h-max relative masking'>
        <OrnamentHero />
        <Hero />
        <Event />
      </div>
      <OptionProgram />
      <ChoiceDonation />
      <Bussines />
      <Inspiration />
      <AmazingGroup />
      <Banner />
      <Footer />
    </>
  )
}
