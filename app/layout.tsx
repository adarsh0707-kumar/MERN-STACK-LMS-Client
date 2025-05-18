import './globals.css'
import { Poppins, Josefin_Sans } from 'next/font/google'
import { ThemeProvider } from './utils/theme-provider'

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
    <html lang='en'>
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
