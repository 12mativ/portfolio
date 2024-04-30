import Projects from '@/components/Projects'
import About from "@/components/About";
import ScrollToTop from "@/components/ScrollToTop";
import React from 'react'
import Achievements from '@/components/Achievements'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-y-6 scroll-m-6' id='top'>
      <ScrollToTop />
      <About/>
      <Achievements />
      <Projects />
    </div>
  )
}
