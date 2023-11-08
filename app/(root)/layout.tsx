import Navbar from '@/components/shared/Navbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import InfoNavbar from '@/components/shared/InfoNavbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: "900",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <InfoNavbar />
        <Navbar />
        <main className='flex flex-col '>
          {children}
        </main>
      </body>
    </html>
  )
}
