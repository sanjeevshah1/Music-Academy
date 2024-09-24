import HeroSection from '@/components/HeroSection'
import React from 'react'
// import Courses from './courses/page'
import {StickyScrollReveal} from '../components/WhyChooseUs'
import  MusicSchoolTestimonials  from '@/components/Testimonies'
import { Webinars } from '@/components/Webinars'
import Instructors from '@/components/Instructors'
import { WavyBackground } from '@/components/ui/wavy-background'
import Footer from '@/components/Footer'
import FeaturedCourses from "./../components/FeaturedCourses"
function Home() {
  return (
    <>
    <div>

      <HeroSection />/
      <FeaturedCourses />
      <StickyScrollReveal />
      <MusicSchoolTestimonials />
      <Webinars/>
    </div>
      <WavyBackground
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveWidth={50}
        blur={10}
        speed="fast"
        waveOpacity={0.5}
         className="relative z-20"
      >
        <Instructors />
      </WavyBackground>
      <Footer />
   </>
  )
}

export default Home