import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-900">
      <Navbar />
      <main className="pt-[80px]">
        <Outlet />
      </main>
    </div>
  );
};
