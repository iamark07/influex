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
        <section className="relative w-full">
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
            <div className="container mx-auto py-56 relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6">
              {/* Floating Image Card 1: Top Left */}
              <div className="animate-bubble-1 absolute top-32 left-20 w-56 h-56 rounded-full overflow-hidden hidden 2xl:block transform -rotate-6">
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="img/other-img/img-3.jpg" // Make sure you have this image
                    alt="Floating creator content 1"
                  />
                </div>
              </div>
              {/* Floating Image Card 2: Bottom Right */}
              <div className="animate-bubble-2 absolute bottom-10 right-12 w-72 h-72 rounded-full overflow-hidden hidden 2xl:block transform rotate-6">
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="img/other-img/img-2.jpg" // Make sure you have this image
                    alt="Floating creator content 2"
                  />
                </div>
              </div>
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
                  <img
                    src="img/other-img/img-2.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
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
                    <a
                      href="#"
                      className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
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
                    <a
                      href="#"
                      className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
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
                    <a
                      href="#"
                      className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
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
                    <a
                      href="#"
                      className="text-sm mt-6 font-semibold text-slate-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
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

        {/* Case Studies Section */}
        <section
          id="case-studies"
          className="hidden relative py-24 sm:py-32 bg-white overflow-hidden"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-4 rounded-full border border-violet-200 px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-violet-700">
                Success Stories
              </div>
              <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 poppins tracking-tight">
                Creators We've Helped Grow
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-gray-600 font-sans">
                We’ve helped creators across India gain real visibility, brand
                deals, and massive audience growth.
              </p>
            </div>

            {/* Case Studies Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Large Case Study */}
              <div className="group relative rounded-2xl p-px bg-gradient-to-br from-indigo-300 via-violet-400 to-violet-500 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative bg-white rounded-[15px] overflow-hidden h-full">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop"
                    alt="Lifestyle Creator"
                    className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="bg-white/20 backdrop-blur-sm inline-block px-4 py-2 rounded-full mb-3">
                      <p className="text-white font-bold text-lg">
                        10k → 60k followers
                      </p>
                    </div>
                    <p className="text-white text-base font-medium">
                      Secured a 6-month partnership with a leading beauty brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Two Smaller Case Studies */}
              <div className="flex flex-col gap-8">
                {/* Top Small Case Study */}
                <div className="group relative rounded-2xl p-px bg-gradient-to-br from-indigo-300 via-violet-400 to-violet-500 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative bg-white rounded-[15px] overflow-hidden h-full flex flex-col md:flex-row">
                    <img
                      src="https://images.unsplash.com/photo-1611601322175-28ec64be2545?q=80&w=1935&auto=format&fit=crop"
                      alt="Gaming Creator"
                      className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-6 flex flex-col justify-center">
                      <div className="bg-gray-100 inline-block px-3 py-1 rounded-full mb-3 self-start">
                        <p className="text-gray-800 font-bold text-sm">
                          2M → 5M+ Views
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm font-medium">
                        Launched a viral series, doubling channel engagement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Small Case Study */}
                <div className="group relative rounded-2xl p-px bg-gradient-to-br from-indigo-300 via-violet-400 to-violet-500 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative bg-white rounded-[15px] overflow-hidden h-full flex flex-col md:flex-row">
                    <img
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                      alt="Fitness Creator"
                      className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-6 flex flex-col justify-center">
                      <div className="bg-gray-100 inline-block px-3 py-1 rounded-full mb-3 self-start">
                        <p className="text-gray-800 font-bold text-sm">
                          50k → 150k Subs
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm font-medium">
                        Developed and sold a successful fitness program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-2 text-base font-semibold text-gray-800 hover:text-violet-700 transition-colors duration-300"
              >
                <span>View all case studies</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
