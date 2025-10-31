import React from 'react'

import SecondSection from '../components/home/SecondSection'
import YoungMinds from '../components/home/YoungMinds'
import GenesisPath from '../components/home/GenesisPath'


const Home = () => {
  return (
    <div>
       <Hero />
       <Herocard/>
    <SecondSection/>
    <YoungMinds/>
    <GenesisPath/>
    </div>
  )
}

export default Home;