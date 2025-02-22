import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";

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
        <div className="min-h-screen flex justify-center">
          <div className="flex w-full max-w-4xl">
            <div className="hidden md:block w-48">
              <Sidebar />
            </div>
            <div className="flex-1 pl-10 md:pl-0">
              {children}
            </div>
          </div>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}

