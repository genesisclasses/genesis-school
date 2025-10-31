import React from 'react'

import SecondSection from '../components/home/SecondSection'
import YoungMinds from '../components/home/YoungMinds'
import Hero from '../components/home/Hero'
import Herocard from '../components/home/Herocard'


const Home = () => {
  return (
    <div>
       <Hero />
       <Herocard/>
    <SecondSection/>
    <YoungMinds/>
    </div>
  )
}

export default Home;