// app/layout.tsx
import './globals.css'
import { Poppins, Josefin_Sans } from 'next/font/google'
import { Providers } from './Provider'
import { Toaster } from 'react-hot-toast'
import Loader from './components/Loader/Loader'
import ThemeSwitcher from '../app/utils/ThemeSwitcher'

const poppins = Poppins({
  variable: '--font-Poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const josefin = Josefin_Sans({
  variable: '--font-Josefin',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.variable} ${josefin.variable}`}>
        <Providers>
          <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
            <header className='p-4 flex justify-end'>
              <ThemeSwitcher />
            </header>
            {children}
          </div>
          <Toaster position='top-center' reverseOrder={false} />
        </Providers>
      </body>
    </html>
  )
}
