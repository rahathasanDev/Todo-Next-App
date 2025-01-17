"use client"
import Link from 'next/link';
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
        <Link href="/"><p>Rahat&apos;s Todo App</p></Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-yellow-300 transition duration-300">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition duration-300">About</Link>
          <Link href="#services" className="text-white hover:text-yellow-300 transition duration-300">Services</Link>
          <Link href="#contact" className="text-white hover:text-yellow-300 transition duration-300">Contact</Link>
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
        <Link href="/" className="block py-2">Home</Link>
        <Link href="/about" className="block py-2">About</Link>
        <Link href="#services" className="block py-2">Services</Link>
        <Link href="#contact" className="block py-2">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
