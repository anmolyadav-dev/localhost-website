import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'


export const metadata: Metadata = {
  title: 'Localhost',
  description: 'Dev Community of IIIT Pune',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed min-w-full top-0 z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
