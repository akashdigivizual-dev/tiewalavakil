
import React from 'react';

interface LogoProps {
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isWhite = false }) => {
  const textColor = isWhite ? 'text-white' : 'text-brand-primary';
  const iconColor = isWhite ? 'white' : '#1a202c';

  return (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke={iconColor} strokeWidth="4"/>
          <circle cx="50" cy="50" r="42" stroke={iconColor} strokeWidth="2"/>
          <path d="M25 35H45" stroke={iconColor} strokeWidth="6" strokeLinecap="round"/>
          <path d="M25 45H40" stroke={iconColor} strokeWidth="6" strokeLinecap="round"/>
          <path d="M25 65 L50 30 L75 65 L62.5 65 L50 45 L37.5 65 H25" stroke={iconColor} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
      </div>
      <div className={`flex flex-col justify-center -space-y-1 ${textColor}`}>
        <span className="font-serif font-bold text-2xl tracking-tight">Tiewala</span>
        <span className="font-serif text-2xl" style={{fontFamily: "'Merriweather', serif"}}>वकील</span>
      </div>
    </div>
  );
};

export default Logo;
