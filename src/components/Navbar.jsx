import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
       
        <div className="text-lg font-semibold">
          <a href="/" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">KUMAR STORE</a>
        </div>

       
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">Home</a>
          <a href="/about" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">About</a>
          <a href="/services" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">Services</a>
          <a href="/contact" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">Contact</a>
        </div>

      
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl hover:text-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          {isMobileMenuOpen ? '×' : '☰'}
        </button>
      </div>

      
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="/" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">Home</a>
          <a href="/about" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">About</a>
          <a href="/services" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">Services</a>
          <a href="/contact" className="hover:text-gray-300 hover:text-2xl transition-all duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
