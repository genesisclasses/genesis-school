import Campus from '@/components/co-curricular/Campus'
import CocurricularBanner from '@/components/co-curricular/CocurricularBanner'
import Events from '@/components/co-curricular/Events'
import React from 'react'

const page = () => {
  return (
    <div>
      <CocurricularBanner/>
      <Events/>
      <Campus/>
    </div>
  )
}

export default page
