import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We are a passionate team committed to delivering exceptional services and products. 
          Our mission is to provide innovative solutions tailored to meet the unique needs of 
          our customers. With years of experience and a dedication to excellence, we aim to 
          build long-lasting relationships and create meaningful impacts in our industry.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          At the core of our values are integrity, innovation, and customer satisfaction. 
          Join us on our journey as we continue to grow and transform challenges into opportunities. 
          Together, we can achieve great things!
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="mt-10">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
