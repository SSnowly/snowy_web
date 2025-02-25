import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Particles from "./components/Particles";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snowy",
  description: "I'm a self taught full-stack developer. I love creating websites and applications for the better of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Particles />
        <div className="min-h-screen flex justify-center">
          <div className="flex w-full max-w-4xl">
            <div className="hidden md:block w-48">
              <Sidebar />
            </div>
            <div className="flex-1 md:pl-10 h-screen">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
          </div>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}

