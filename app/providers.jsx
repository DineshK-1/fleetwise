"use client";

import { ThemeProvider } from "next-themes";

/**
 * Providers Component
 *
 * The Providers component is a custom wrapper that provides theming capabilities
 * to its child components. It uses the ThemeProvider from the next-themes library
 * to manage the application's theme.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped with the ThemeProvider.
 * @returns {JSX.Element} The JSX representation of the Providers component.
 */

export function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
