
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-card rounded-none border-b border-analytics-gray-200 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 rounded-lg bg-analytics-purple/10 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-analytics-purple to-analytics-blue opacity-20" />
            <span className="text-analytics-purple font-bold text-xl">D</span>
          </div>
          <span className="font-medium text-xl">DataLens</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Services', 'Case Studies', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-analytics-gray-600 hover:text-analytics-gray-900 subtle-underline"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button className="hidden md:flex items-center space-x-2 px-5 py-2 rounded-lg bg-analytics-purple text-white font-medium shadow-sm hover-rise">
          <span>Get Started</span>
        </button>
        
        <button 
          className="md:hidden text-analytics-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 w-full px-6 py-4 border-t border-analytics-gray-200 shadow-lg space-y-4 animate-fade-in">
          {['About', 'Services', 'Case Studies', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block py-2 text-analytics-gray-600 hover:text-analytics-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full flex justify-center items-center space-x-2 px-5 py-2 rounded-lg bg-analytics-purple text-white font-medium shadow-sm">
            <span>Get Started</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
