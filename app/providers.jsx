'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
    return <ThemeProvider enableSystem={false} defaultTheme='dark'>{children}</ThemeProvider>
}