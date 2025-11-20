import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls more than 10px, else false
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <header
        id="main-header"
        className={`w-full top-0 z-50 transition-all duration-500 ease-in-out border-b bg-white  ${
          isScrolled ? "sticky border-gray-200" : "sticky border-transparent"
        }`}
      >
        <div
          id="sub-header-container"
          className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between w-full transition-all duration-500 ease-in-out"
        >
          {/* Brand Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight"
            >
              Influex.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-10">
            <Link
              to="/"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Case Studies
            </a>
            <Link
              to="/contact"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="hidden items-center gap-4 shrink-0">
            <Link
              to="/apply"
              className="py-2.5 px-6 text-sm font-medium text-gray-800 border border-gray-400 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Apply As a Creator
            </Link>
          </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="ri-menu-line text-[21px]"></i>
            </button>
        </div>
      </header>

      <header
        id="main-header"
        className={`hidden z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "fixed  w-full max-w-[1700px] top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200"
            : "absolute w-[90%] sm:w-[94%] max-w-[1540px] top-5 bg-white"
        }`}
      >
        <div
          id="sub-header-container"
          className={`container mx-auto flex items-center justify-between w-full transition-all duration-500 ease-in-out ${
            isScrolled
              ? "h-20 sm:h-24 px-4 sm:px-6"
              : "h-20 sm:h-24 p-3 sm:p-4 md:p-3 xl:py-5 xl:pl-10 xl:pr-[52px]"
          }`}
        >
          {/* Brand Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight"
            >
              Influex.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-10">
            <Link
              to="/"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Case Studies
            </a>
            <Link
              to="/contact"
              className="text-base text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/apply"
              className="hidden md:inline-block py-2.5 px-6 text-sm font-medium text-gray-800 border border-gray-400 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Apply As a Creator
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="ri-menu-line text-[21px]"></i>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/25 z-50 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg p-6 z-60 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
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
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-lg text-gray-800 hover:text-gray-900"
          >
            Home
          </Link>
          <a
            href="#services"
            onClick={toggleMenu}
            className="text-lg text-gray-800 hover:text-gray-900"
          >
            Services
          </a>
          <a
            href="#case-studies"
            onClick={toggleMenu}
            className="text-lg text-gray-800 hover:text-gray-900"
          >
            Case Studies
          </a>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-lg text-gray-800 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            to="/apply"
            onClick={toggleMenu}
            className="mt-6 py-3 w-full text-center text-base font-medium text-gray-800 border border-gray-400 hover:bg-gray-900 hover:text-white transition-colors"
          >
            Apply As a Creator
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
