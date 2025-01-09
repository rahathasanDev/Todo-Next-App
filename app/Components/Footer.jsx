import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2">Todo APP</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for all your needs. Dedicated to providing the best services with excellence and integrity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</li>
              <li><i className="fas fa-phone"></i> +123 456 7890</li>
              <li><i className="fas fa-envelope"></i> support@company.com</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <div className="flex justify-center space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
