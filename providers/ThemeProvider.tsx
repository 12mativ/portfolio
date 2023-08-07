'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

interface CustomThemeProviderProps {
  children: React.ReactNode
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  return <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
}

export default CustomThemeProvider