import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export const navItems = [
  { path: '/', label: 'Home', icon: HomeRoundedIcon },
  { path: '/about', label: 'About', icon: PersonRoundedIcon },
  { path: '/services', label: 'Services', icon: DesignServicesRoundedIcon },
  { path: '/skills', label: 'Skills', icon: BoltRoundedIcon },
  { path: '/projects', label: 'Projects', icon: CodeRoundedIcon },
  { path: '/resume', label: 'Resume', icon: DescriptionRoundedIcon },
  { path: '/certificates', label: 'Certificates', icon: WorkspacePremiumRoundedIcon },
  { path: '/contact', label: 'Contact', icon: CallRoundedIcon },
];

export const NavLinks = ({ mobile, setOpen }) => {
  return (
    <div className={`flex ${mobile ? 'flex-col gap-2 w-full' : 'items-center gap-6 xl:gap-8'}`}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => mobile && setOpen(false)}
          className={({ isActive }) => `
            flex items-center gap-3 font-medium transition-all duration-300 relative group
            ${mobile ? 'p-3 rounded-xl hover:bg-slate-50' : 'text-sm'}
            ${isActive ? 'text-blue-600 ' + (mobile ? 'bg-blue-50/50' : '') : 'text-slate-600 hover:text-blue-600'}
          `}
        >
          {({ isActive }) => (
            <>
              {mobile && <item.icon fontSize="small" className={isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'} />}
              <span>{item.label}</span>
              {/* Active & Hover Underline (Desktop Only) */}
              {!mobile && (
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 
                  ${isActive ? 'w-full shadow-[0_2px_8px_rgba(37,99,235,0.4)]' : 'w-0 group-hover:w-full'}`}></span>
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};
