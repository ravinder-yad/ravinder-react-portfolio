import React from 'react';
import { SocialIcons } from '../navbar/SocialIcons';

export const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black text-slate-900 mb-2">
              &lt;Ravindra /&gt;
            </span>
            <p className="text-slate-500 font-poppins text-center md:text-left">
              Building digital experiences with passion.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Projects</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          <div>
            <SocialIcons />
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Ravindra Yadav. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
