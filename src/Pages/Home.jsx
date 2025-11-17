import React from 'react';
import Header from '../Components/Layouts/Header';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white relative overflow-hidden">
          {/* Desktop Background Image */}
          <img src="img/hero-section-img/img-1.jpg" alt="Desktop Hero Background"
            className="absolute inset-0 object-cover w-full h-full opacity-20 hidden md:block"
          />
          {/* mobile Background Image */}
          <img src="img/hero-section-img/img-2.jpg" alt="Mobile Hero Background"
            className="absolute inset-0 object-cover w-full h-full opacity-30 md:hidden"
          />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-48 w-full">
          {/* Floating Image Card 1: Top Left */}
          <div className="animate-bubble-1 absolute top-10 left-32 w-56 h-56 rounded-full overflow-hidden hidden lg:block transform -rotate-6">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/img/other-img/img-3.jpg" // Make sure you have this image
                alt="Floating creator content 1"
              />
            </div>
          </div>

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/10"></div> */}

          {/* Content */}
          <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6">
            <h1 className="text-[26px] font-bold tracking-tight sm:text-6xl md:text-7xl">
              Amplify Your Influence.
            </h1>
            <p className="mt-3 md:mt-6 max-w-2xl text-sm sm:text-lg text-gray-800">
              We partner with India's top creators to build iconic brands, secure game-changing deals, and shape the future of digital content.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/apply"
                className="text-sm sm:text-base rounded-full bg-pink-400 px-10 py-3 font-medium text-white hover:bg-pink-500"
              >
                Apply Now
              </Link>
              <a
                href="#services"
                className="text-sm sm:text-base font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true" className='ml-1'>→</span>
              </a>
            </div>
            {/* <div className="mt-12 flex items-center space-x-6">
              <i className="ri-instagram-line text-3xl text-gray-300 transition-colors hover:text-white"></i>
              <i className="ri-youtube-line text-3xl text-gray-300 transition-colors hover:text-white"></i>
              <i className="ri-facebook-box-line text-3xl text-gray-300 transition-colors hover:text-white"></i>
              <i className="ri-twitter-x-line text-3xl text-gray-300 transition-colors hover:text-white"></i>
            </div> */}
          </div>

          {/* Floating Image Card 2: Bottom Right */}
          <div className="animate-bubble-2 absolute bottom-0 right-24 w-72 h-72 rounded-full overflow-hidden hidden lg:block transform rotate-6">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/img/other-img/img-2.jpg" // Make sure you have this image
                alt="Floating creator content 2"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;