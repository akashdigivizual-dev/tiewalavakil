
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import CTAButton from './CTAButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClasses = "text-gray-700 hover:text-brand-accent transition-colors duration-300 py-2 px-3 rounded-md text-sm font-medium";
  const activeLinkClasses = "text-brand-accent font-semibold";

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/images/Tiewalalogo.png" alt="Tiewalalogo" className="h-20 w-auto md:h-28" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <CTAButton />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-accent focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block text-center ${linkClasses} ${isActive ? activeLinkClasses : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-2">
              <CTAButton fullWidth />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
