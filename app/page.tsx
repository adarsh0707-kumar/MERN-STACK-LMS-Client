'use client'

import React, { FC } from 'react'
import Heading from './utils/Heading'

interface Props {}

const Page: FC<Props> = () => {
  return (
    <div>
    <Heading
      title="Elearning"
      description="This is a description of my page."
      keywords="programming, react, nextjs, typescript, web development,ml, ai"  
      />
      
    </div>
  )
}
export default Page
