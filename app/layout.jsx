'use client'
import '../styles/globals.css'
import Footer from './components/Footer';
import Navigation from "./components/Navigation";
import { info } from '../data.js'
import { ThemeProvider } from "next-themes";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <title>Natanael Acero</title>
      <meta name="description" content="Natanael Acero's Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="bg-slate-100 text-gray-800 dark:bg-zinc-900 dark:text-gray-200" >
        <ThemeProvider attribute="class">
          <Navigation />
          {children}
          <Footer socialMedia={info.socialMedia} />
        </ThemeProvider>
      </body>
    </html>
  )
}
