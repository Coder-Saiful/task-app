import { Poppins } from "next/font/google";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import "./responsive.css";
import Header from "../components/Includes/Header";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthContext";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"/> */}
          <script src="https://kit.fontawesome.com/380b207d69.js"></script>
        </head>
        <body className={`${poppins.className}`}>
          <AuthProvider>
          <Header />
          <main>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              // transition: Bounce
            />
            
            {children}
          </main>
          </AuthProvider>
          {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> */}
          {/* <Script src="bootstrap/dist/js/bootstrap.bundle.min.js" /> */}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
        </body>
      </html>
    );
}
