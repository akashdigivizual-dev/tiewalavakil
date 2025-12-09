
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ fullWidth = false }) => {
  return (
    <Link 
    
      to="/Book Consultation"
      className={`
        inline-block bg-brand-accent text-white font-bold py-3 px-6 rounded-lg 
        shadow-lg hover:bg-brand-accent-hover transform hover:-translate-y-0.5 
        transition-all duration-300 ease-in-out
        ${fullWidth ? 'w-full text-center' : ''}
      `}
    >
      Book a Consultation
    </Link>
  );
};

export default CTAButton;
