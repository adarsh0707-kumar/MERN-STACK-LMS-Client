// app/Provider.tsx
'use client'

import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from './utils/theme-provider'
import { store } from '../redux/store'

export function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system' // Set explicit default
          enableSystem={true} // Disable system preference to avoid flicker
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  )
}
