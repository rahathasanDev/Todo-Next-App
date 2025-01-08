"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">Rahat's Todo App</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-yellow-300 transition duration-300">Home</a>
          <a href="/about" className="text-white hover:text-yellow-300 transition duration-300">About</a>
          <a href="#services" className="text-white hover:text-yellow-300 transition duration-300">Services</a>
          <a href="#contact" className="text-white hover:text-yellow-300 transition duration-300">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4`}
      >
        <a href="#" className="block py-2">Home</a>
        <a href="#about" className="block py-2">About</a>
        <a href="#services" className="block py-2">Services</a>
        <a href="#contact" className="block py-2">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
