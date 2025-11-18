import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white poppins">
      <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Socials */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="text-3xl font-semibold text-white">
              Influex.
            </Link>
            <p className="text-gray-400 text-sm max-w-xs mt-4">
              Connecting creators with brands to build the future of digital
              content.
            </p>
            <div className="flex space-x-4 pt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-box-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-semibold tracking-wider uppercase text-gray-300">
              Explore
            </h4>
            <nav className="mt-4 space-y-3">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <a
                href="#services"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#case-studies"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Case Studies
              </a>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-base font-semibold tracking-wider uppercase text-gray-300">
              Company
            </h4>
            <nav className="mt-4 space-y-3">
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/apply"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Join as Creator
              </Link>
              <Link
                to="/privacy"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold tracking-wider uppercase text-gray-300">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mt-4">
              Get the latest creator economy news and insights from us.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2.5 rounded-md font-semibold hover:bg-pink-600 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Influex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;