'use client'

import React, { FC, useState } from 'react'

import Heading from './utils/Heading'
import Headers from './components/Headers'

interface Props {}

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div>
      <Heading
        title='Elearning'
        description='This is a description of my page.'
        keywords='programming, react, nextjs, typescript, web development,ml, ai'
      />
      
      <Headers
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
    </div>
  )
}
export default Page
