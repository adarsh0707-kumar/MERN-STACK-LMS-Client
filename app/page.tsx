'use client'

import React, { FC, useState } from 'react'

import Heading from './utils/Heading'
import Headers from './components/Headers'
import Hero from './components/Route/Hero'

interface Props {}

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  const [route, setRoute] = useState("Login")

  return (
    <div>
      <Heading
        title='Elearning'
        description='This is a description of my page.'
        keywords='Ml, Ai, javaScript, typescript'
      />

      
      <Headers
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />

      <Hero />
    </div>
  )
}
export default Page
