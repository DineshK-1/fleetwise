import "./globals.css";
import { Raleway } from "next/font/google";
import "material-icons/iconfont/outlined.css";
import Sidebar from "./components/Sidebar.component";
import { Providers } from "./providers";
import { ErrorProviders } from "./components/errorContext";

// Raleway font is imported and used as a global style.
const raleway = Raleway({ subsets: ["latin"] });

// Metadata for the web application, including title and description.
export const metadata = {
  title: "Fleet Wise",
  description: "Generated by create next app",
};

/**
 * RootLayout Component
 *
 * The RootLayout component serves as the root layout for the entire web application.
 * It sets up global styles, imports fonts, and renders a consistent structure with a sidebar
 * and a main content wrapper for the application.
 *
 * The component also provides a context provider (`Providers`) to manage application-wide state
 * and share data with nested components.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The JSX representation of the RootLayout component.
 */

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Providers>
          <ErrorProviders>
            <Sidebar />
            <div className="main-wrapper">{children}</div>
          </ErrorProviders>

        </Providers>
      </body>
    </html>
  );
}
