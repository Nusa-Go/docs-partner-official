import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // 1. Pastikan import ini ada
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      {/* 2. Panggil komponen Navbar di sini agar muncul di atas */}
      <Navbar /> 
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;