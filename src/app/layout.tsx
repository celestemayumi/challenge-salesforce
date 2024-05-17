"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import VLibras from "react-vlibras";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <VLibras avatar="icaro" safeInit />
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
