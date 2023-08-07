import './globals.css'
import type {Metadata} from 'next'
import React from 'react'
import {Figtree} from 'next/font/google'
import Header from '@/components/Header'
import CustomThemeProvider from "@/providers/ThemeProvider";
import Head from 'next/head'

const font = Figtree({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Watch mativ's portfolio"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <Head>
        <meta name="google-site-verification" content="9KfTN60UutIfDgfF4fdhyP7LftxyqAqc4Snu0nVOyl0" />
      </Head>
      <body className={font.className}>
        <CustomThemeProvider>
          <Header>{children}</Header>
        </CustomThemeProvider>
      </body>
    </html>
  )
}
