import './globals.css'
import { Inter } from 'next/font/google'
import 'material-icons/iconfont/material-icons.css';
import Sidebar from './components/Sidebar.component';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fleet Wise',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
