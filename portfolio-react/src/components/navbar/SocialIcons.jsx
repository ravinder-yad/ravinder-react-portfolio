import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export const SocialIcons = () => {
  return (
    <div className="flex items-center gap-5">
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noreferrer"
        className="text-slate-500 hover:text-blue-600 transition-colors hover:scale-110 transform hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
      >
        <GitHubIcon />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noreferrer"
        className="text-slate-500 hover:text-blue-600 transition-colors hover:scale-110 transform hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
      >
        <LinkedInIcon />
      </a>
      <a 
        href="mailto:contact@example.com" 
        className="text-slate-500 hover:text-blue-600 transition-colors hover:scale-110 transform hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
      >
        <EmailRoundedIcon />
      </a>
    </div>
  );
};
