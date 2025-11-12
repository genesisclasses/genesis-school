import React from 'react'
import ProjectDarpanComponent from '@/components/projectdarpan/ProjectDarpanComponent'
import DarpanStorySection from '@/components/projectdarpan/DarpanStorySection'
import DarpanCards from '@/components/projectdarpan/DarpanCards'
import SupportSystem from '@/components/projectdarpan/SupportSystem'

const ProjectDarpan = () => {
  return (
    <div
      className=""
      style={{
        background: `linear-gradient(
          180deg,
          #E8F1F5 0%,
          #FFF9EB 23%,
          #FFFBF0 46%,
          #FFFCF2 73%,
          #FFFDF7 200%,
          #FFFFFF 100%
        )`
      }}
    >
      <ProjectDarpanComponent noBg />
      <DarpanStorySection/>
      {/* <DarpanCards/> */}
      <SupportSystem/>
    </div>
  )
}

export default ProjectDarpan
