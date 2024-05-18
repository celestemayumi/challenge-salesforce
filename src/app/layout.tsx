"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import VLibras from "react-vlibras";
import ScreenReader from '../components/ScreenReader';
import React, { useState } from 'react';



const inter = Inter({ subsets: ["latin"] });


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScreenReaderActive, setScreenReaderActive] = useState(false);

  const toggleScreenReader = () => {
    setScreenReaderActive(!isScreenReaderActive);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <VLibras avatar="icaro" safeInit />
        <ScreenReader isActive={isScreenReaderActive} />
        <main>{children}</main>
        <Footer />
        <button className="fixed right-5 bottom-3/4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer z-50 transition-colors duration-300 hover:bg-blue-700" onClick={toggleScreenReader}>
          {isScreenReaderActive ? 'Desativar Leitor de Tela' : 'Ativar Leitor de Tela'}
        </button>
      </body>
    </html>
  );
};

export default RootLayout;