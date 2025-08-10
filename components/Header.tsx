
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-indigo-900 rounded-full"></span>
              <h1 className="text-2xl font-bold text-indigo-900">Textil Ramírez</h1>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-gray-600 font-medium hover:text-indigo-700 transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-indigo-900 focus:outline-none">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={toggleMenu} className="text-3xl font-semibold text-gray-800 hover:text-indigo-700 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
