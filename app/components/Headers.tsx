'use client'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi'

import NavItems from '../utils/NavItems'
import { ThemeSwitcher } from '../utils/ThemeSwitcher'
import CustomModal from '../utils/CustomModal'
import SignUp from './Auth/SignUp'
import Verification from './Auth/Verification'
import Login from './Auth/Login'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import avatar from "../../public/assests/avatar.png"
import { useSession } from 'next-auth/react'
import { useSocialAuthMutation } from '@/redux/featuures/auth/authApi'
import toast from 'react-hot-toast'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  activeItem: number
  route: string
  setRoute: (route: string) => void
}

const Headers: FC<Props> = ({ open, activeItem, setOpen, route, setRoute }) => {
  const [active, setActive] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const { user } = useSelector((state: any) => state.auth)
  const [socialAuth, { isSuccess, data, error }] = useSocialAuthMutation()
  const { data: session } = useSession()

  

  useEffect(() => {
    if (!user) {
      if (data) {
        socialAuth({email:data?.user?.email, name:data?.user?.name, avatar:data?.user.image})
      }
    }
    if (isSuccess) {
      toast.success("Login Successfuly...")
    }
    if (error) {
      if ('data' in error) {
      const errorData = error as any
      toast.error(errorData.data.message)
      }
    }

  }, [data, user, error])
  
  


  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 85) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  const handleClose = (e: any) => {
    if (e.taget.id === 'screen') {
      setOpenSidebar(false)
    }
  }
console.log('user.avatar:', user)
console.log('session.user.image:', session?.user)

  return (
    <div className='w-full relative'>
      <div
        className={`${
          active
            ? 'dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500 '
            : 'w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow'
        }`}
      >
        <div className='w-[95%] 800px:w-[92%] m-auto py-2 h-full'>
          <div className='w-full h-[80px] flex items-center justify-between p-3'>
            <div>
              <Link
                href='/'
                className={`text-[25px] font-poppins font-[500] texr-black dark:text-white`}
              >
                Elearning
              </Link>
            </div>

            <div className='flex items-center'>
              <NavItems activeItem={activeItem} isMobile={false} />

              <ThemeSwitcher />

              {/* {only for mobile} */}

              <div className='md:hidden'>
                <HiOutlineMenuAlt3
                  size={25}
                  className='cursor-pointer dark:text-white text-black'
                  onClick={() => setOpenSidebar(true)}
                />
              </div>

              <HiOutlineUserCircle
                size={25}
                className='cursor-pointer hidden md:block dark:text-white text-black'
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* {mobile sidebar} */}

        {openSidebar && (
          <div
            className='fixed w-full h-screen top-0 left-0 z-[999999] dark:bg-[unset] bg-[#00000024]'
            onClick={handleClose}
            id='screen'
          >
            <div
              className='w-[70%] fixed z-[9999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0'>
              <NavItems
                activeItem={activeItem} isMobile={true}
              />

              {
                user || session?.user ? (
                  <Link
                  href={"/profile"}>
                    <Image
                      src={user?.avatar || session?.user?.image || avatar }
                      alt={user?.name || session?.user?.name || 'User Avatar'}
                      className='w-[30px] h-[30px] rounded-full cursor-pointer'
                    />
                  </Link>
                ): (
                  <HiOutlineUserCircle
                    size={25}
                    className='cursor-pointer ml-5 my-2 text-black dark:text-white'
                    onClick={() => setOpen(true)}
                  />
                )

              }

              <br />
              <br />
              <p className='text-[16px] px-2 pl-5 text-black dark:text-white'>
                Copyright &#169; 2025 ELearning
              </p>
            </div>
          </div>
        )}
      </div>
      {route === 'Login' && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
            />
          )}
        </>
      )}
      {route === 'Sign-Up' && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )}
      {route === 'Verification' && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
      
    </div>
  )
}

export default Headers
