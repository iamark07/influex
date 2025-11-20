import React, { useState, useRef, useEffect } from "react";
import Header from "../Components/Layouts/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Layouts/Footer";
import "../assets/css/style.css"; // Corrected import path

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
    <div className="bg-white relative">
      <Header />
      <main className="overflow-x-hidden">
        <div className="pt-16 pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-2xl md:text-5xl font-medium tracking-tight md:leading-snug capitalize max-w-5xl">
              Empowering creators to grow, <br /> influence, and build powerful
              digital brands.
            </h1>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="bg-black py-4 md:py-5">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <span className="flex gap-20 text-white text-sm md:text-lg font-semibold tracking-wider whitespace-nowrap">
              <div className="flex gap-20">
                <p>
                  CREATOR <span className="mx-4">—</span>
                  <u className="underline-offset-4">GROWTH PARTNERSHIP</u>
                </p>
                <p>
                  BUILDING <span className="mx-4">—</span>
                  <u className="underline-offset-4">INFLUENCE</u> WITH PURPOSE
                </p>
                <p>
                  APPLY TO <span className="mx-4">—</span>
                  <u className="underline-offset-4">JOIN OUR CREATOR NETWORK</u>
                </p>
              </div>

              {/* <span className="text-gray-600 mx-6">—</span> */}

              <div className="flex gap-20">
                <p>
                  CREATOR <span className="mx-4">—</span>
                  <u className="underline-offset-4">GROWTH PARTNERSHIP</u>
                </p>
                <p>
                  BUILDING <span className="mx-4">—</span>
                  <u className="underline-offset-4">INFLUENCE</u> WITH PURPOSE
                </p>
                <p>
                  APPLY TO <span className="mx-4">—</span>
                  <u className="underline-offset-4">JOIN OUR CREATOR NETWORK</u>
                </p>
              </div>

              {/* <span className="text-gray-600 mx-6">—</span> */}

              <div className="flex gap-20">
                <p>
                  CREATOR <span className="mx-4">—</span>
                  <u className="underline-offset-4">GROWTH PARTNERSHIP</u>
                </p>
                <p>
                  BUILDING <span className="mx-4">—</span>
                  <u className="underline-offset-4">INFLUENCE</u> WITH PURPOSE
                </p>
                <p>
                  APPLY TO <span className="mx-4">—</span>
                  <u className="underline-offset-4">JOIN OUR CREATOR NETWORK</u>
                </p>
              </div>
            </span>
          </marquee>
        </div>

        {/* Hero Section */}
        <section className="relative h-dvh w-full flex items-center justify-center text-center bg-gray-900 text-white">
          {/* Cinematic Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="/videos/video-3.mp4" // Replace with your actual video path
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            {/* <div className="absolute inset-0 bg-black/50"></div> Increased overlay for better text readability */}
          </div>

          {/* Centered Content */}
          <div className="hidden relative z-10 container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white">
                Amplify What Matters.
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
                We partner with visionary creators to build iconic brands and
                shape the future of digital content.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/apply"
                  className="text-sm sm:text-base rounded-full bg-white px-8 py-3 font-medium text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  Apply as a Creator
                </Link>
                <a
                  href="#services"
                  className="text-sm sm:text-base font-medium leading-6 text-white hover:underline underline-offset-4"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Impact Section */}
        <section className="bg-white py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left Side: Image */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 poppins tracking-tight leading-tight">
                  Creators. Brands.{" "}
                  <span className="relative inline-block">
                    Impact.
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-black transform translate-y-2"></span>
                  </span>
                </h2>
                <p className="mt-8 text-lg sm:text-xl text-gray-600 font-sans max-w-lg mx-auto lg:mx-0">
                  From concept to campaign, we partner with creators to build
                  stories that move audiences.
                </p>
              </div>
              {/* Right Side: Text */}
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="A creator collaborating on a project"
                  className="w-full h-[500px] lg:h-[650px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section — System Agency Inspired */}
        <section className="w-full bg-white pt-16 pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            {/* GRID WRAPPER */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="relative overflow-hidden group">
                <img
                  src="img/other-img/img-1.jpg"
                  alt="Creator working on a strategy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 poppins">Brand Storytelling</h3>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <img
                  src="img/other-img/img-2.jpg"
                  alt="Creator in a studio setting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 poppins">Content Production</h3>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <img
                  src="img/other-img/img-3.jpg"
                  alt="Behind the scenes of a video shoot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 poppins">Audience Growth</h3>
                </div>
              </div>
              {/* WIDE CINEMATIC VIDEO */}
              <div className="relative sm:col-span-2 md:col-span-3 md:h-[500px] xl:h-[700px] overflow-hidden group">
                <video
                  src="videos/video-1.mp4"
                  alt="Cinematic video montage"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Creators Showcase Section */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden hidden">
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

        {/* How We Work Section */}
        <section className="bg-white py-24 sm:py-32 hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side: Image */}
              <div className="order-1 lg:order-2 group relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?q=80&w=1887"
                  alt="A creator planning their work on a glass wall"
                  className="w-full h-[550px] lg:h-[700px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Right Side: Text Content */}
              <div className="order-2 lg:order-1">
                <div className="max-w-lg">
                  <p className="text-base font-semibold text-indigo-600 poppins tracking-wide">
                    Our process
                  </p>
                  <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 poppins tracking-tight">
                    How we work with creators
                  </h2>
                  <p className="mt-6 text-lg text-gray-600 font-sans">
                    We follow a structured, collaborative process to ensure your
                    brand's success.
                  </p>

                  {/* Stacked Steps */}
                  <div className="mt-12 space-y-10">
                    <div className="relative pl-12 border-l border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 poppins">
                        <span className="absolute -left-5 top-0 text-gray-400">
                          01
                        </span>
                        Discover & Audit
                      </h3>
                      <p className="mt-2 text-base text-gray-600 font-sans">
                        We start by deeply understanding your brand, audience,
                        and current market position.
                      </p>
                    </div>
                    <div className="relative pl-12 border-l border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 poppins">
                        <span className="absolute -left-5 top-0 text-gray-400">
                          02
                        </span>
                        Strategy & Campaigns
                      </h3>
                      <p className="mt-2 text-base text-gray-600 font-sans">
                        Next, we craft a bespoke strategy and design campaigns
                        that resonate and convert.
                      </p>
                    </div>
                    <div className="relative pl-12 border-l border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 poppins">
                        <span className="absolute -left-5 top-0 text-gray-400">
                          03
                        </span>
                        Execute & Grow
                      </h3>
                      <p className="mt-2 text-base text-gray-600 font-sans">
                        Finally, we launch, manage, and optimize for continuous
                        growth and impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-24 bg-white hidden">
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

        {/* Platforms Section */}
        <section id="platforms" className="py-24 sm:py-32 bg-white hidden">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="flex justify-between items-start mb-12 border-b-2 border-dotted border-gray-200 pb-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 poppins tracking-tight">
                  Check by Platform
                </h2>
                <p className="mt-3 text-sm sm:text-lg text-gray-600 font-sans max-w-xl">
                  We support creators across multiple platforms. Explore where
                  you shine.
                </p>
              </div>
              <Link
                to="/platforms"
                className="hidden sm:inline-flex group items-center gap-2 text-sm font-semibold text-gray-900 shrink-0 mt-2 transition-all duration-300"
              >
                <span>View All</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-all duration-300"></i>
              </Link>
            </div>

            {/* Platform Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Card 1: Instagram */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                <img
                  src="https://images.unsplash.com/photo-1595039838779-f3780873afdd?q=80&w=870"
                  alt="Instagram"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  Instagram
                </h3>
              </div>
              {/* Card 2: YouTube */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                <img
                  src="https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=921"
                  alt="YouTube"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  YouTube
                </h3>
              </div>
              {/* Card 3: Facebook */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                <img
                  src="https://images.unsplash.com/photo-1594670297948-e910d5964979?q=80&w=835"
                  alt="Facebook"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  Facebook
                </h3>
              </div>
              {/* Card 4: Pinterest */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                <img
                  src="https://images.unsplash.com/photo-1559854034-927055a85426?q=80&w=848"
                  alt="Pinterest"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  Pinterest
                </h3>
              </div>
              {/* Card 5: Twitter */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                <img
                  src="https://images.unsplash.com/photo-1649709902948-c1f99e2688ab?q=80&w=2070"
                  alt="Twitter"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  Twitter
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section
          id="case-studies"
          className="relative py-28 bg-white overflow-hidden hidden"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-violet-50 p-5 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center rounded-2xl">
              {/* LEFT PANEL — Slanted Card */}
              <div className="bg-white/60 p-8 relative w-full h-full flex items-center justify-center rounded-2xl">
                <div className="mt-6 text-center">
                  <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider poppins">
                    Influex Case Study
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 poppins mt-2">
                    From 10k to 65k followers in 3 months
                  </h3>
                </div>
              </div>

              {/* RIGHT PANEL — EXACT METAPIC STYLE UI */}
              <div className="">
                {/* MAIN NUMBER */}
                <h2 className="text-5xl font-extrabold text-gray-900 poppins tracking-tight mb-10">
                  10k → 65k Followers
                </h2>

                <div className="space-y-10">
                  {/* ROW 1 — ENGAGEMENT RATE */}
                  <div className="w-full">
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[15px] text-gray-700 font-medium">
                        Engagement rate
                      </span>
                      <span className="text-[16px] font-semibold text-gray-900">
                        4.2% → 7.8%
                      </span>
                    </div>

                    {/* Slider Bar */}
                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                      <div className="absolute inset-y-0 left-0 w-[78%] bg-gray-300"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 left-[78%] w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>

                    {/* Bottom Min/Max */}
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>0%</span>
                      <span>10%</span>
                    </div>
                  </div>

                  {/* ROW 2 — MONTHLY REACH */}
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[15px] text-gray-700 font-medium">
                        Monthly Reach
                      </span>
                      <span className="text-[16px] font-semibold text-gray-900">
                        +430%
                      </span>
                    </div>

                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                      <div className="absolute inset-y-0 left-0 w-[85%] bg-gray-300"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>0%</span>
                      <span>500%</span>
                    </div>
                  </div>

                  {/* ROW 3 — BRAND DEALS */}
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[15px] text-gray-700 font-medium">
                        Brand Deals Secured
                      </span>
                      <span className="text-[16px] font-semibold text-gray-900">
                        12
                      </span>
                    </div>

                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                      <div className="absolute inset-y-0 left-0 w-[45%] bg-gray-300"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 left-[45%] w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>0</span>
                      <span>25</span>
                    </div>
                  </div>

                  {/* ROW 4 — REEL PERFORMANCE */}
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[15px] text-gray-700 font-medium">
                        Reel performance
                      </span>
                      <span className="text-[16px] font-semibold text-gray-900">
                        5× improvement
                      </span>
                    </div>

                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                      <div className="absolute inset-y-0 left-0 w-[80%] bg-gray-300"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 left-[80%] w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>0×</span>
                      <span>10×</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-14">
                  <Link
                    to="/case-studies"
                    className="group inline-flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                  >
                    View more case studies
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                  </Link>
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
