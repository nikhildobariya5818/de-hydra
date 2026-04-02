import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "De'hydra Food Venture | Premium B2B Dehydrated Foods",
  description:
    "Export-grade dehydrated vegetables, fruits & spices. Powered by Sryshaya Group. Trusted by 200+ global B2B buyers.",
  keywords: "dehydrated food, B2B food supplier, export vegetables, spices, India",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="theme-color" content="#1A8A8A" />
      </head>
      <body className="font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
