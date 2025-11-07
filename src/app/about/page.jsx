import Aboutgenesis from '@/components/about/Aboutgenesis'
import DirectorMessage from '@/components/about/Directorsection'
import AboutSection from '@/components/about/Mission'
import PillarsOfGenesis from '@/components/about/Pillarsofgenesis'

import Whythegenesis from '@/components/about/Whythegenesis'
import AdmissionsSection from '@/components/home/AdmissionsSection'
import SchoolLife from '@/components/home/SchoolLife'
import React from 'react'

const page = () => {
  return (
    <div>
      <Aboutgenesis/>
      <AboutSection/>
      <DirectorMessage/>
      <Whythegenesis/>
      <PillarsOfGenesis/>
      <SchoolLife/>
      <div className="-mb-8">
        <AdmissionsSection />
      </div>
    </div>
  )
}

export default page
