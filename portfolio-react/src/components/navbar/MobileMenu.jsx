import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './NavLinks';
import { SocialIcons } from './SocialIcons';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const MobileMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 w-[280px] sm:w-[320px] h-screen bg-white/95 backdrop-blur-2xl border-l border-slate-200 z-50 p-6 flex flex-col shadow-2xl"
        >
          <div className="flex items-center justify-between mb-8">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm"
            >
              RY
            </motion.span>
            <button 
              onClick={() => setOpen(false)} 
              className="text-slate-500 hover:text-blue-600 transition-colors hover:rotate-90 transform duration-300"
            >
              <CloseRoundedIcon fontSize="large" />
            </button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 overflow-y-auto"
          >
            <NavLinks mobile setOpen={setOpen} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-auto flex flex-col gap-6 border-t border-slate-100 pt-6"
          >
            <SocialIcons />
            <button className="relative group overflow-hidden w-full bg-blue-600 text-white font-medium py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10 text-lg">Hire Me</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
