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

  const [isCinematicVideoPlaying, setIsCinematicVideoPlaying] = useState(false);
  const cinematicVideoRef = useRef(null);

  const toggleCinematicVideo = () => {
    const video = cinematicVideoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsCinematicVideoPlaying(true);
      } else {
        video.pause();
        setIsCinematicVideoPlaying(false);
      }
    }
  };

  const testimonials = [
    {
      quote:
        "Working with Influex was a game-changer. Their strategic approach not only grew our audience but deepened our community engagement in ways we never imagined.",
      name: "Aarav Sharma",
      title: "Tech Creator, 1.2M Subscribers",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "The brand partnerships Influex secured for us were perfectly aligned with our values. It felt less like a campaign and more like a true collaboration.",
      name: "Priya Singh",
      title: "Marketing Director, Aura Beauty",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "From content production to performance analytics, their team provided end-to-end support that allowed me to focus on what I do best: creating.",
      name: "Rohan Mehta",
      title: "Lifestyle Influencer",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white relative">
      <Header />
      <main className="overflow-x-hidden">
        <section className="pt-16 pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-2xl md:text-5xl font-medium tracking-tight md:leading-snug capitalize max-w-6xl Montserrat">
              Empowering creators to grow, <br /> influence, and build powerful
              digital brands.
            </h1>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="bg-black py-4">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <span className="flex gap-20 text-white text-sm md:text-base font-semibold tracking-wider whitespace-nowrap">
              <div className="flex gap-20">
                <p className="Montserrat">
                  CREATOR <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    GROWTH PARTNERSHIP
                  </u>
                </p>
                <p className="Montserrat">
                  BUILDING <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    INFLUENCE
                  </u>{" "}
                  WITH PURPOSE
                </p>
                <p className="Montserrat">
                  APPLY TO <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    JOIN OUR CREATOR NETWORK
                  </u>
                </p>
              </div>

              {/* <span className="text-gray-600 mx-6">—</span> */}

              <div className="flex gap-20">
                <p className="Montserrat">
                  CREATOR <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    GROWTH PARTNERSHIP
                  </u>
                </p>
                <p className="Montserrat">
                  BUILDING <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    INFLUENCE
                  </u>{" "}
                  WITH PURPOSE
                </p>
                <p className="Montserrat">
                  APPLY TO <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    JOIN OUR CREATOR NETWORK
                  </u>
                </p>
              </div>

              {/* <span className="text-gray-600 mx-6">—</span> */}

              <div className="flex gap-20">
                <p className="Montserrat">
                  CREATOR <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    GROWTH PARTNERSHIP
                  </u>
                </p>
                <p className="Montserrat">
                  BUILDING <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    INFLUENCE
                  </u>{" "}
                  WITH PURPOSE
                </p>
                <p className="Montserrat">
                  APPLY TO <span className="mx-4">—</span>
                  <u className="underline-offset-4 Montserrat">
                    JOIN OUR CREATOR NETWORK
                  </u>
                </p>
              </div>
            </span>
          </marquee>
        </section>

        {/* Hero Section */}
        <section className="relative w-full flex items-center justify-center text-center bg-gray-900 text-white">
          {/* Cinematic Background */}
          <div className="h-dvh w-full overflow-hidden">
            <video
              src="/videos/video-3.mp4" // Replace with your actual video path
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </section>

        {/* Sub Heading Section Below Hero */}
        <section className="bg-white py-20 sm:pt-24 pb-14">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row  md:justify-between gap-8">
              {/* Left Side Content */}
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-tight text-gray-900 Montserrat">
                  Shaping Digital Culture With Every Story.
                </h2>

                <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-5xl font-sans">
                  We collaborate with top creators and innovative brands to
                  craft meaningful stories, build stronger communities, and
                  drive real impact in the digital world.
                </p>
              </div>

              {/* Right Side Button */}
              <Link to="/apply">
                <button className="text-gray-900 underline underline-offset-4 hover:text-black transition font-medium text-sm sm:text-base Montserrat">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Creator Impact Section */}
        <section className="bg-white pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left Side: Image */}
              <div className="order-2 lg:order-1text-center lg:text-left border border-gray-200 h-full w-full flex flex-col justify-center px-5 py-14 sm:px-12">
                <h2 className="text-xl sm:text-4xl lg:text-[38px] font-semibold text-gray-900 tracking-tight leading-tight Montserrat">
                  Creators. Brands.{" "}
                  <span className="relative inline-block Montserrat">
                    Impact.
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-black transform translate-y-2"></span>
                  </span>
                </h2>
                <p className="mt-6 md:mt-8 text-sm sm:text-lg text-gray-600 font-sans max-w-xl">
                  From concept to campaign, we partner with creators to build
                  stories that move audiences.
                </p>
                {/* Minimal CTA — looks premium */}
                <div className="mt-10">
                  <Link to={"/Services"} className="text-gray-900 underline underline-offset-4 hover:text-black transition font-medium text-sm sm:text-base Montserrat">
                    Explore Our Work →
                  </Link>
                  </div>
              </div>
              {/* Right Side: Text */}
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="A creator collaborating on a project"
                  className="w-full h-[500px] lg:h-[650px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Cinematic Video */}
        <div className="relative w-full h-[70vh] md:h-[700px] mt-10">
          <video
            ref={cinematicVideoRef}
            src="videos/video-2.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          />
          {/* Play/Pause Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isCinematicVideoPlaying
                ? "bg-black/0 hover:bg-black/30"
                : "bg-black/30"
            }`}
            onClick={toggleCinematicVideo}
          >
            <div
              className={`flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-black/40 rounded-full backdrop-blur-sm transition-opacity duration-300 ${
                isCinematicVideoPlaying
                  ? "opacity-0 group-hover:opacity-100"
                  : "opacity-100"
              }`}
            >
              <i
                className={`${
                  isCinematicVideoPlaying ? "ri-pause-fill" : "ri-play-fill"
                } text-white text-4xl md:text-5xl`}
              ></i>
            </div>
          </div>
        </div>

        {/* --- Cinematic Visual Storytelling Section --- */}
        <section className="bg-white pt-40 pb-20 overflow-hidden">
          {/* 2. Asymmetrical Visual Mosaic */}
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="relative overflow-hidden group rounded-none">
                <img
                  src="img/other-img/img-2.jpg"
                  alt="Creator in a studio setting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Cinematic Hover Layer */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3
                    className="text-gray-900 text-lg md:text-2xl font-bold tracking-wide mb-2
          transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 uppercase Montserrat"
                  >
                    Content Production
                  </h3>

                  <p
                    className="text-black/80 text-sm md:text-base tracking-wide transform translate-y-6
          group-hover:translate-y-0 transition-all duration-700 uppercase"
                  >
                    Visual storytelling designed to inspire.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden group rounded-none">
                <img
                  src="img/other-img/img-3.jpg"
                  alt="Behind the scenes of a video shoot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Cinematic Hover Layer */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3
                    className="text-gray-900 text-lg md:text-2xl font-bold tracking-wide mb-2
          transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 uppercase Montserrat"
                  >
                    Audience Growth
                  </h3>

                  <p
                    className="text-black/80 text-sm md:text-base tracking-wide transform translate-y-6
          group-hover:translate-y-0 transition-all duration-700 uppercase"
                  >
                    Scaling creators into powerful digital brands.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative overflow-hidden group rounded-none">
                <img
                  src="img/other-img/img-1.jpg"
                  alt="Creator in a brand collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Cinematic Hover Layer */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3
                    className="text-gray-900 text-lg md:text-2xl font-bold tracking-wide mb-2
          transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 uppercase Montserrat"
                  >
                    Brand Partnerships
                  </h3>

                  <p
                    className="text-black/80 text-sm md:text-base tracking-wide transform translate-y-6
          group-hover:translate-y-0 transition-all duration-700 uppercase"
                  >
                    Connecting creators with leading brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---  Services Section --- */}
        <section className="relative w-full my-24 sm:my-32">
          <div className="relative container mx-auto px-4 sm:px-6 z-10">
            <div className="relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/img/bg-img/img-1.jpg"
                  className="w-full h-full object-cover"
                  alt="service background"
                />
              </div>

              {/* Mosaic Grid Wrapper */}
              <div className=" relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* GAP CELL 1 */}
                  <div className="lg:order-1 hidden lg:block w-full min-h-[260px] bg-transpaent p-6 border-b-24 border-gray-50"></div>

                  {/* GAP CELL 2 */}
                  <div className="lg:order-2 hidden lg:block w-full min-h-[260px] bg-transpaent p-6 border-b-24 border-l-24 border-gray-50"></div>

                  {/* CARD 1 */}
                  <div className="order-2 lg:order-3 bg-gray-50 backdrop-blur-md p-6 lg:pl-0 border-b-24 lg:border-l-24 border-gray-50 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 underline Montserrat">
                      Content Production
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      High-quality visual storytelling crafted to highlight your
                      brand, engage your audience, and create meaningful
                      connections through cinematic content.
                    </p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline Montserrat"
                    >
                      Learn More →
                    </a>
                  </div>

                  {/* CARD 2 */}
                  <div className="order-3 lg:order-4 bg-gray-50 backdrop-blur-md p-6 border-b-24 border-gray-50 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 underline Montserrat">
                      Brand Partnerships
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      We connect creators with leading brands to build
                      authentic, long-term collaborations that elevate reach,
                      trust, and influence.
                    </p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline Montserrat"
                    >
                      Learn More →
                    </a>
                  </div>

                  {/* GAP CELL */}
                  <div className="lg:order-5 hidden lg:block w-full min-h-[260px] bg-transpaent p-6 border-b-24 lg:border-l-24 border-gray-50"></div>

                  {/* GAP CELL */}
                  <div className="lg:order-6 hidden lg:block w-full min-h-[260px] bg-transpaent p-6 border-b-24 lg:border-l-24 border-gray-50"></div>

                  {/* MAIN TITLE CARD */}
                  <div className="order-1 lg:order-7 bg-gray-50 backdrop-blur-md p-6 border-gray-50 flex items-center">
                    <div>
                      <h3 className="mt-4 text-2xl sm:text-5xl font-semibold text-gray-900 poppins leading-tight Montserrat">
                        Services
                      </h3>

                      <a
                        href="#"
                        className="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline Montserrat"
                      >
                        Explore Services →
                      </a>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="order-4 lg:order-8 bg-gray-50 backdrop-blur-md p-6 lg:border-l-24 border-gray-50 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 underline Montserrat">
                      Creative Strategy
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      We develop data-backed strategic frameworks that guide
                      brands and creators toward meaningful engagement and
                      powerful results.
                    </p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline Montserrat"
                    >
                      Learn More →
                    </a>
                  </div>

                  {/* GAP CELL */}
                  <div className="lg:order-9 hidden lg:block w-full min-h-[260px] bg-transpaent p-6 border-l-24 border-gray-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-16 items-start border-b-2 border-dotted border-gray-200 pb-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 poppins tracking-tight Montserrat">
                  Check by Platform
                </h2>
                <p className="mt-3 text-sm sm:text-lg text-gray-600 font-sans max-w-xl">
                  We support creators across multiple platforms. Explore where
                  you shine.
                </p>
              </div>
              <Link
                to="/platforms"
                className="text-gray-900 underline underline-offset-4 hover:text-black transition font-medium text-sm sm:text-base Montserrat"
              >
                View All →
              </Link>
            </div>

            {/* Platform Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Card 1: Instagram */}
              <div className="group relative overflow-hidden transition-all duration-300 h-64 rounded-md">
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
              <div className="group relative overflow-hidden transition-all duration-300 h-64 rounded-md">
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
              <div className="group relative overflow-hidden transition-all duration-300 h-64 rounded-md">
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
              <div className="group relative overflow-hidden transition-all duration-300 h-64 rounded-md">
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
              <div className="group relative overflow-hidden transition-all duration-300 h-64 rounded-md">
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

        {/* How We Work Section */}
        <section className="bg-white py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left Side: Image */}
              <div className="order-1 lg:order-2 group relative overflow-hidden h-full">
                <img
                  src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?q=80&w=1887"
                  alt="A creator planning their work on a glass wall"
                  className="w-full h-[550px] lg:h-full object-cover transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Right Side: Text Content */}
              <div className="order-2 lg:order-1 flex flex-col justify-center border border-gray-200  px-5 py-14 sm:px-12 h-full w-full">
                <h2 className="text-xl sm:text-4xl lg:text-[42px] font-semibold text-gray-900 poppins tracking-tight Montserrat">
                  How we work with creators
                </h2>

                <p className="max-w-lg mt-6 text-lg text-gray-600 font-sans">
                  We follow a structured, collaborative process to ensure your
                  brand's success.
                </p>

                {/* Stacked Steps */}
                <div className="mt-12 space-y-10 pl-4">
                  {/* 01 */}
                  <div className="relative pl-8 md:pl-10 border-l border-gray-200">
                    <h3 className="md:text-xl font-bold text-gray-900 Montserrat">
                      <span className="absolute -left-3 bg-white pb-1 top-0 text-gray-400">
                        01
                      </span>
                      Discover & Audit
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 font-sans">
                      We analyze your brand, audience, and market position to
                      build a solid foundation for growth.
                    </p>
                  </div>

                  {/* 02 */}
                  <div className="relative pl-8 md:pl-10 border-l border-gray-200">
                    <h3 className="md:text-xl font-bold text-gray-900 Montserrat">
                      <span className="absolute -left-3 bg-white pb-1 top-0 text-gray-400">
                        02
                      </span>
                      Strategy & Campaigns
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 font-sans">
                      We craft a tailored strategy and design compelling
                      campaigns that resonate with your audience.
                    </p>
                  </div>

                  {/* 03 */}
                  <div className="relative pl-8 md:pl-10 border-l border-gray-200">
                    <h3 className="md:text-xl font-bold text-gray-900 Montserrat">
                      <span className="absolute -left-3 bg-white pb-1 top-0 text-gray-400">
                        03
                      </span>
                      Execute & Grow
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 font-sans">
                      Our team launches, manages, and optimizes campaigns to
                      ensure continuous growth and impact.
                    </p>
                  </div>

                  {/* 04 */}
                  <div className="relative pl-8 md:pl-10 border-l border-gray-200">
                    <h3 className="md:text-xl font-bold text-gray-900 Montserrat">
                      <span className="absolute -left-3 bg-white pb-1 top-0 text-gray-400">
                        04
                      </span>
                      Scale & Sustain
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 font-sans">
                      We focus on long-term partnerships and sustainable
                      strategies to scale your creator brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Creator Success Showcase Section --- */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tigh Montserrat">
                  Real Stories. Real Impact.
                </h2>
                <p className="mt-4 md:text-lg text-gray-600 font-sans">
                  Campaigns that shaped brands and amplified creator influence.
                </p>
              </div>
              <div className="shrink-0 mt-2">
                <Link
                  to="/case-studies"
                  className="text-gray-900 underline underline-offset-4 hover:text-black transition font-medium text-sm sm:text-base Montserrat"
                >
                  Explore Case Studies →
                </Link>
              </div>
            </div>

            {/* Asymmetric Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Item 1 (Large) */}
              <div className="relative group overflow-hidden col-span-2 row-span-2 sm:h-[500px] md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999"
                  alt="Brand collaboration for a watch"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                    <h3 className="text-white text-xs font-semibold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 Montserrat">
                      LUXURY WATCH CO.
                    </h3>
                  </div>
                </div>
              </div>

              {/* Item 2 (Small) */}
              <div className="relative group overflow-hidden col-span-2 sm:col-span-1 sm:h-[242px] md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070"
                  alt="Brand collaboration for shoes"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                    <h3 className="text-white text-xs font-semibold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 Montserrat">
                      NIKE CAMPAIGN
                    </h3>
                  </div>
                </div>
              </div>

              {/* Item 3 (Medium) */}
              <div className="relative group overflow-hidden col-span-2 sm:col-span-1 sm:h-[242px] md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070"
                  alt="Brand collaboration for headphones"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                    <h3 className="text-white text-xs font-semibold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 Montserrat">
                      AUDIO TECH
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="bg-white py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="max-w-2xl mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight Montserrat">
                Voices of Success
              </h2>
              <p className="mt-4 md:text-lg text-gray-600 font-sans">
                Hear from the creators and brands we’ve partnered with.
              </p>
            </div>

            {/* Testimonial Slider */}
            <div className="relative">
              <div className="relative h-64 sm:h-56 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="absolute w-full h-full transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                    }}
                  >
                    <blockquote className="flex flex-col justify-center h-full">
                      <p className="sm:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed poppins">
                        “{testimonial.quote}”
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 sm:w-14 h-10 sm:h-14 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center justify-center w-12 h-12 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <i className="ri-arrow-left-s-line text-2xl"></i>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="flex items-center justify-center w-12 h-12 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <i className="ri-arrow-right-s-line text-2xl"></i>
                </button>
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
