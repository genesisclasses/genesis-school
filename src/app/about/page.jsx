import Aboutgenesis from '@/components/about/Aboutgenesis'
import DirectorMessage from '@/components/about/Directorsection'
import AboutSection from '@/components/about/Mission'
import PillarsOfGenesis from '@/components/about/Pillarsofgenesis'

import Whythegenesis from '@/components/about/Whythegenesis'
import React from 'react'

const page = () => {
  return (
    <div>
      <Aboutgenesis/>
      <AboutSection/>
      <DirectorMessage/>
      <Whythegenesis/>
      <PillarsOfGenesis/>

    </div>
  )
}

export default page
