'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Don't render until mounted on client
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='p-2 rounded-full focus:outline-none'
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? (
        <FiSun className='w-5 h-5 text-yellow-300' />
      ) : (
        <FiMoon className='w-5 h-5 text-gray-700' />
      )}
    </button>
  )
}
