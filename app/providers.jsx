'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
    return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>
}