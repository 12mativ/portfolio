import './globals.css'
import type {Metadata} from 'next'
import React from 'react'
import {Figtree} from 'next/font/google'
import Header from '@/components/Header'
import {CustomThemeProvider} from "@/providers/ThemeProvider";

const font = Figtree({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Watch mativ's portfolio",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <CustomThemeProvider>
          <Header>{children}</Header>
        </CustomThemeProvider>
      </body>
    </html>
  )
}
