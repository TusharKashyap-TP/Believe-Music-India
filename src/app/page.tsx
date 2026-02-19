import Cards from '@/components/Cards'
import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import Tap from '@/components/Tap'
import Upcoming from '@/components/Upcoming'
import Us from '@/components/Us'
import Contact from '@/components/Contact'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-[#04091A] antialiased bg-grid-white/[0.02]">
      <Hero />
      <Featured />
      <Tap />
      <Cards />
      <Upcoming />
      <Us />
      <Contact />
    </main>
  )
}

export default page