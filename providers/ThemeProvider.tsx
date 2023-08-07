'use client'

import { ThemeProvider } from 'next-themes'

export function CustomThemeProvider({ children }) {
  return <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
}