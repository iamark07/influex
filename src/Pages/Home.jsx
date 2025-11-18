import React, { useState, useRef, useEffect } from "react";
import Header from "../Components/Layouts/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Layouts/Footer";

function Home() {
  const [activeVideo, setActiveVideo] = useState("right"); // 'left' or 'right'
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  // Effect to control video playback
  useEffect(() => {
    const leftVideo = leftVideoRef.current;
    const rightVideo = rightVideoRef.current;

    if (!leftVideo || !rightVideo) return;

    if (activeVideo === "left") {
      leftVideo.play();
      rightVideo.pause();
    } else {
      leftVideo.pause();
      rightVideo.play();
    }
  }, [activeVideo]);

  return (
    <div className="bg-white relative overflow-hidden">
      <main>
        <Header />
        {/* Hero Section */}
        <section className="relative py-56 w-full">
          {/* Desktop Background Image */}
          <img
            src="img/hero-section-img/img-1.jpg"
            alt="Desktop Hero Background"
            className="absolute inset-0 object-cover w-full h-full opacity-20 hidden md:block"
          />
          {/* mobile Background Image */}
          <img
            src="img/hero-section-img/img-2.jpg"
            alt="Mobile Hero Background"
            className="absolute inset-0 object-cover w-full h-full opacity-30 md:hidden"
          />
          <div className="w-full">
            {/* Content */}
            <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6">
              <div className="mb-4 inline-block rounded-full border border-[#ebebeb] px-5 py-2 text-[11px] md:text-sm font-medium uppercase tracking-wider">
                For India's Top Creators
              </div>
              <h1 className="text-[26px] font-bold tracking-tight sm:text-6xl md:text-7xl">
                Amplify Your Influence.
              </h1>
              <p className="mt-3 md:mt-6 max-w-2xl text-sm sm:text-lg text-gray-800">
                We partner with India's top creators to build iconic brands,
                secure game-changing deals, and shape the future of digital
                content.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/apply"
                  className="text-sm sm:text-base rounded-full bg-pink-400 px-10 py-3 font-medium text-white hover:bg-pink-500 transition-all duration-200"
                >
                  Apply Now
                </Link>
                <a
                  href="#services"
                  className="text-sm sm:text-base font-semibold leading-6 text-gray-900"
                >
                  Learn more{" "}
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Floating Image Card 1: Top Left */}
          <div className="animate-bubble-1 absolute top-32 left-32 w-56 h-56 rounded-full overflow-hidden hidden 2xl:block transform -rotate-6">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="img/other-img/img-3.jpg" // Make sure you have this image
                alt="Floating creator content 1"
              />
            </div>
          </div>
          {/* Floating Image Card 2: Bottom Right */}
          <div className="animate-bubble-2 absolute bottom-10 right-24 w-72 h-72 rounded-full overflow-hidden hidden 2xl:block transform rotate-6">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="img/other-img/img-2.jpg" // Make sure you have this image
                alt="Floating creator content 2"
              />
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <a
            href="#services"
            className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 z-30"
            aria-label="Scroll to next section"
          >
            <div className="animate-scroll-down py-3 px-2 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-pink-500 hover:border-pink-500/50 hover:bg-white/50 transition-all duration-300 cursor-pointer">
              <i className="ri-arrow-down-line text-lg sm:text-2xl"></i>
            </div>
          </a>
        </section>

        {/* Creators Showcase Section */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative">
            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 poppins tracking-tight">
                India’s Fastest Growing Creator Community
              </h2>
              <p className="mt-4 text-sm md:text-lg text-gray-600 font-sans max-w-5xl mx-auto">
                From fashion and lifestyle to tech, gaming, travel, and fitness,
                we provide the strategy and support for creators to thrive in a
                competitive digital landscape.
              </p>
            </div>
            {/* grid */}
            <div className="mt-16 flex flex-col md:flex-row gap-6">
              <div
                className={`relative w-full cursor-pointer transition-all duration-700 ease-in-out rounded-xl overflow-hidden ${
                  activeVideo === "left" ? "lg:w-[65%]" : "lg:w-[35%]"
                }`}
                onClick={() => setActiveVideo("left")}
                onMouseEnter={() => setActiveVideo("left")}
              >
                <video
                  ref={leftVideoRef}
                  src="/videos/video-1.mp4"
                  className="w-full h-full min-h-[250px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
                  loop
                  muted
                  playsInline
                ></video>
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6 lg:p-8">
                  <div
                    className={`transition-all duration-500 ease-out ${
                      activeVideo === "left"
                        ? "translate-y-0"
                        : "translate-y-16 md:translate-y-10"
                    }`}
                  >
                    <h3 className="text-white md:text-lg lg:text-2xl font-bold poppins">
                      Fashion & Lifestyle
                    </h3>
                    <p
                      className={`text-white/80 mt-2 text-xs md:text-sm transition-all duration-500 ease-out lg:whitespace-nowrap ${
                        activeVideo === "left" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Collaborate with top fashion brands and showcase your{" "}
                      <br /> unique style.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`relative w-full cursor-pointer transition-all duration-700 ease-in-out rounded-xl overflow-hidden ${
                  activeVideo === "right" ? "lg:w-[65%]" : "lg:w-[35%]"
                }`}
                onClick={() => setActiveVideo("right")}
                onMouseEnter={() => setActiveVideo("right")}
              >
                <video
                  ref={rightVideoRef}
                  src="/videos/video-2.mp4"
                  className="w-full h-full min-h-[250px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6 lg:p-8">
                  <div
                    className={`transition-all duration-500 ease-out ${
                      activeVideo === "right"
                        ? "translate-y-0"
                        : "translate-y-16 md:translate-y-10"
                    }`}
                  >
                    <h3 className="text-white md:text-lg lg:text-2xl font-bold poppins">
                      Tech & Gaming
                    </h3>
                    <p
                      className={`text-white/80 mt-2 text-xs md:text-sm transition-all duration-500 ease-out lg:whitespace-nowrap ${
                        activeVideo === "right" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Partner with leading tech companies and engage with a
                      passionate <br />
                      gaming community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header - Two Column Layout */}
            <div className="mb-16">
              <div className="inline-block mb-6 text-xs sm:text-sm rounded-full border border-[#ebebeb] px-5 py-2">
                Our Services
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 lg:gap-12 items-start">
                {/* Left Side - Title and Badge */}
                <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 poppins tracking-tight leading-tight">
                  What we can do for you
                </h2>
                {/* Right Side - Description and CTA */}
                <div>
                  <p className="text-sm sm:text-lg text-gray-600 font-sans mb-6">
                    Helping Indian creators grow with brand deals, strategy &
                    content. From designing strategies to executing campaigns,
                    we provide quality solutions tailored to your needs.
                  </p>
                  <Link to="/services">
                    <button className="group inline-flex items-center gap-3  py-3 px-7 text-sm xl:text-[15px] text-white bg-gray-700 rounded-full">
                      <span>See our services</span>
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-all duration-300"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Cards - Horizontal Scroll */}
            <div className="p-5 lg:p-10 bg-[#F6F8FE] rounded-2xl">
              <div className="grid xl:grid-cols-11 gap-10">
                <div className="w-full h-[full] xl:col-span-5">
                  <img src="img/other-img/img-2.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {/* Card 1: Brand Partnerships */}
                  <div className="group w-full rounded-2xl overflow-hidden transition-all duration-300 bg-[#e6e9ff] p-6 md:p-8 lg:p-5 xl:p-8 flex flex-col hover:shadow-lg shadow-gray-300">
                    <div className="grow">
                      <div className="w-14 h-14 rounded-full bg-[#F6F8FE] flex items-center justify-center mb-5">
                        <i className="fa-solid fa-handshake-angle text-2xl text-[#adb8ff]"></i>
                      </div>
                      <h3 className="md:text-xl font-semibold text-gray-800 poppins mb-2">
                        Brand Partnerships
                      </h3>
                      <p className="text-gray-600 text-sm">
                        We broker authentic, long-term partnerships with iconic
                        brands that align with your voice, ensuring genuine
                        collaborations.
                      </p>
                    </div>
                    <a href="#" className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn more <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                  {/* Card 2: Growth Strategy */}
                  <div className="group w-full rounded-2xl overflow-hidden transition-all duration-300 bg-[#e6e9ff] p-6 md:p-8 lg:p-5 xl:p-8 flex flex-col hover:shadow-lg shadow-gray-300">
                    <div className="grow">
                      <div className="w-14 h-14 rounded-full bg-[#F6F8FE] flex items-center justify-center mb-5">
                        <i className="fa-solid fa-arrow-trend-up text-2xl text-[#adb8ff]"></i>
                      </div>
                      <h3 className="md:text-xl font-semibold text-gray-800 poppins mb-2">
                        Growth Strategy
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Utilize our data-driven insights to craft a personalized
                        growth roadmap, expanding your reach and deepening
                        audience engagement.
                      </p>
                    </div>
                    <a href="#" className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn more <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                  {/* Card 3: Content Production */}
                  <div className="group w-full rounded-2xl overflow-hidden transition-all duration-300 bg-[#e6e9ff] p-6 md:p-8 lg:p-5 xl:p-8 flex flex-col hover:shadow-lg shadow-gray-300">
                    <div className="grow">
                      <div className="w-14 h-14 rounded-full bg-[#F6F8FE] flex items-center justify-center mb-5">
                        <i className="fa-solid fa-clapperboard text-2xl text-[#adb8ff]"></i>
                      </div>
                      <h3 className="md:text-xl font-semibold text-gray-800 poppins mb-2">
                        Content Production
                      </h3>
                      <p className="text-gray-600 text-sm">
                        From concept to final edit, access our in-house creative
                        team and production resources to elevate your
                        storytelling and quality.
                      </p>
                    </div>
                    <a href="#" className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn more <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                  {/* Card 4: Community Management */}
                  <div className="group w-full rounded-2xl overflow-hidden transition-all duration-300 bg-[#e6e9ff] p-6 md:p-8 lg:p-5 xl:p-8 flex flex-col hover:shadow-lg shadow-gray-300">
                    <div className="grow">
                      <div className="w-14 h-14 rounded-full bg-[#F6F8FE] flex items-center justify-center mb-5">
                        <i className="fa-solid fa-users text-2xl text-[#adb8ff]"></i>
                      </div>
                      <h3 className="md:text-xl font-semibold text-gray-800 poppins mb-2">
                        Community Management
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Foster a thriving, positive community with our expert
                        moderation, turning followers into loyal advocates.
                      </p>
                    </div>
                    <a href="#" className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn more <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                  {/* Card 5*/}
                  {/* <div className="lg:block hidden"></div> */}

                  {/* Card 6: PR & Media */}
                  {/* <div className="group w-full h-[400px] rounded-2xl overflow-hidden transition-all duration-300 bg-[#F6F8FE] p-6 flex flex-col justify-center text-center lg:justify-end lg:text-left">
                    <div>
                      <h3 className="md:text-xl font-semibold text-gray-800 poppins mb-2">
                        PR & Media
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Amplify your influence beyond social media by securing
                        features in leading digital publications, podcasts, and
                        other media outlets.
                      </p>
                    </div>
                  </div> */}

                  {/* Card 7: Product Development */}
                  {/* <div className="group w-full h-[400px] rounded-2xl overflow-hidden transition-all duration-300 bg-[#e6e9ff] p-6 flex flex-col justify-center text-center">
                    <div>
                      <div>
                        <h3 className="md:text-xl font-semibold text-gray-800 poppins mb-2">
                          Product Development
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Transform your personal brand into a business empire. We
                          help you launch your own products, from merchandise to
                          digital goods.
                        </p>
                      </div>
                    </div>
                  </div> */}

                  {/* Card 8*/}
                  {/* <div className="lg:block hidden"></div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
