import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 poppins border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-8 lg:pt-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10">
          {/* Column 1: Brand & Socials */}
          <div className="sm:col-span-2 md:col-span-4 xl:col-span-2 md:text-center xl:text-left">
            <Link to="/" className="text-3xl font-semibold text-gray-900">
              Influex.
            </Link>
            <p className="text-gray-500 text-sm max-w-2xl xl:max-w-sm md:mx-auto xl:mx-0 mt-4 leading-relaxed">
              As a premier talent agency, we bridge the gap between India's top
              creators and leading brands, fostering powerful collaborations
              that define the future of digital content.
            </p>
            <div className="flex md:justify-center xl:justify-start space-x-4 pt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sm:col-span-1 xl:col-span-1">
            <h4 className="text-base font-semibold tracking-wider uppercase text-gray-500">
              Explore
            </h4>
            <nav className="mt-4 space-y-3 text-sm lg:text-base">
              <Link
                to="/"
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <a
                href="#services"
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#case-studies"
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                Case Studies
              </a>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className="sm:col-span-1 xl:col-span-1">
            <h4 className="text-base font-semibold tracking-wider uppercase text-gray-500">
              Company
            </h4>
            <nav className="mt-4 space-y-3 text-sm lg:text-base">
              <Link
                to="/about"
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/apply"
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                Join as Creator
              </Link>
              <Link
                to="/privacy"
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="sm:col-span-2 md:col-span-2 xl:col-span-2">
            <h4 className="text-base font-semibold tracking-wider uppercase text-gray-500">
              Stay Updated
            </h4>
            <p className="text-gray-500 text-sm mt-4">
              Get the latest creator economy news and insights from us.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-l-md bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 text-xs lg:text-base"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-3 rounded-r-md font-semibold hover:bg-black transition-colors shrink-0 text-xs lg:text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Influex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
