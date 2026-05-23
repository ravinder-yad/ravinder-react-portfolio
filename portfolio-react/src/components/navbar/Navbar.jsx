import React, { useState, useEffect } from 'react';
import { NavLinks } from './NavLinks';
import { SocialIcons } from './SocialIcons';
import { MobileMenu } from './MobileMenu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm' : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 origin-left z-50" 
          style={{ scaleX }} 
        />
        
        <div className="container mx-auto px-6 h-[70px] md:h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center group cursor-pointer relative">
            <motion.span 
              whileHover={{ rotate: 3, scale: 1.05 }}
              className="text-2xl font-poppins font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 drop-shadow-sm"
            >
              &lt;Ravindra /&gt;
            </motion.span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <NavLinks mobile={false} />
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-slate-500 hover:text-blue-600 transition-colors hover:scale-110 transform">
              <LightModeRoundedIcon />
            </button>
            <SocialIcons />
            <button className="relative group overflow-hidden bg-blue-600 text-white px-7 py-2.5 rounded-full font-medium shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all hover:-translate-y-[2px] active:translate-y-[1px]">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-slate-600 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuRoundedIcon fontSize="large" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
