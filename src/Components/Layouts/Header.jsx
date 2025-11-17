import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto flex py-4 sm:py-6 items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold text-gray-900">
            Influex.
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden items-center lg:flex gap-1 border border-[#ebebeb] rounded-full p-1">
          <Link to="/" className="py-2 px-6 rounded-full text-[15px] hover:bg-[#f5f5f5] bg-pink-400 text-white">
            Home
          </Link>
          <a href="#services" className="py-2 px-6 rounded-full text-[15px] hover:bg-[#f5f5f5] text-gray-900">
            Services
          </a>
          <a href="#case-studies" className="py-2 px-6 rounded-full text-[15px] hover:bg-[#f5f5f5] text-gray-900">
            Case Studies
          </a>
          <Link to="/contact" className="py-2 px-6 rounded-full text-[15px] hover:bg-[#f5f5f5] text-gray-900">
            Contact
          </Link>
        </nav>

        {/* CTA and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link to="/apply" className="hidden py-3 px-7 text-[15px] text-white bg-gray-700 rounded-full sm:block">
            Apply As a Creator
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/25 z-50 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg p-6 z-60 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-semibold text-gray-900">Menu</span>
          <button onClick={toggleMenu} className="p-2">
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        <nav className="flex flex-col gap-y-4">
          <Link to="/" onClick={toggleMenu} className="text-gray-800 hover:text-pink-500">Home</Link>
          <a href="#services" onClick={toggleMenu} className="text-gray-800 hover:text-pink-500">Services</a>
          <a href="#case-studies" onClick={toggleMenu} className="text-gray-800 hover:text-pink-500">Case Studies</a>
          <Link to="/contact" onClick={toggleMenu} className="text-gray-800 hover:text-pink-500">Contact</Link>
          <Link to="/apply" onClick={toggleMenu} className="mt-4 py-3 px-7 text-center text-[15px] text-white bg-pink-400 rounded-full">Apply As a Creator</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;