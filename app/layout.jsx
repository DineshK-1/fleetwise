import './globals.css'
import { Raleway } from 'next/font/google'
import 'material-icons/iconfont/outlined.css';
import Sidebar from './components/Sidebar.component';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Fleet Wise",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Sidebar child={children} />
        <div className="main-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
