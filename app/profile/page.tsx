'use client'

import React, { FC, useState } from 'react'
import Protected from '../hooks/useProtected'
import Heading from '../utils/Heading'
import Headers from '../components/Headers'
import Profile from '../components/Profile/Profile'

type Props = {}

const page: FC<Props> = props => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Protected>
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

        <Profile />
      </Protected>
    </div>
  )
}

export default page
