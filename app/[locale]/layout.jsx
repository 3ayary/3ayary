import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/ui/NavBar";
import Footer from "./_components/ui/Footer";
import {NextIntlClientProvider} from 'next-intl';
import LanguageSwitcher from "./_components/LangButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ayari",
  description: "ayari full-stack developer portfolio",
  openGraph: {
    title: "ayari",
    description: "ayari full-stack developer portfolio",
    url: "https://ayari.vercel.app",
    siteName: "ayari",
    images: [
    
    ],
    locale: "en_US",
    type: "website",
  }
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={locale=='ar'?'rtl':'ltr'} className="scroll-smooth">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <NextIntlClientProvider>
        <NavBar/>
        {children}
        <Footer/>
        <LanguageSwitcher/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
