import React from "react";
import Header from "../components/header";
import Footer from "../components/footer"

import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.png";
import logo13 from "../assets/logos/logo13.png";
import logo14 from "../assets/logos/logo14.png";
import logo15 from "../assets/logos/logo15.png";
import logo16 from "../assets/logos/logo16.png";
import nextImage from "../assets/next.jpg";
import logo17 from "../assets/logos/logo17.png";
import logo18 from "../assets/logos/logo18.png";
import logo19 from "../assets/logos/logo19.png";
import logo20 from "../assets/logos/logo20.png";
import logo21 from "../assets/logos/logo21.png";
import logo22 from "../assets/logos/logo22.png";
import image1 from "../assets/logos/image1.png";
import image2 from "../assets/logos/image2.png";
import image3 from "../assets/logos/image3.png";
import image4 from "../assets/logos/image4.png";
import image5 from "../assets/logos/image5.png";
import image6 from "../assets/logos/image6.png";
import image7 from "../assets/logos/image7.png";
import call from "../assets/logos/call.png";
import logooooo from "../assets/logos/logoo.png";
import mesen from "../assets/logos/mesen.png";
import robot1 from "../assets/logos/robot1.png";
import robot2 from "../assets/logos/robot2.png";
import map from "../assets/logos/map.png";
import frequently from "../assets/logos/frequently.png";

// ----------------------------------------------------------------------
// FAQ SECTION COMPONENT (Component Definition at Top Level)
// ----------------------------------------------------------------------

// Component for a single FAQ item (static for this example)
const FaqItem = ({ item }) => (
    <div
        className={`rounded-lg mb-4 transition-all duration-300 ${
            item.isOpen ? "bg-white shadow-lg p-6" : "bg-[#F0F2F8] p-4 hover:bg-white/80 cursor-pointer"
        } border-b border-gray-200`}
    >
        <div className="flex justify-between items-center">
            <h3 className={`text-lg font-semibold ${item.isOpen ? "text-black" : "text-[#1B2A52]"}`}>
                {item.question}
            </h3>
            {/* Simple chevron icon representation */}
            <div className={`text-xl font-bold transition-transform duration-300 ${item.isOpen ? "transform rotate-180 text-[#6600ff]" : "text-gray-500"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        {item.isOpen && (
            <p className="mt-4 text-sm text-[#525866] leading-relaxed">
                {item.answer}
            </p>
        )}
    </div>
);


const FAQSection = ({ faqImage }) => {
    // Data structure for the FAQ items
    const faqs = [
        {
            question: "What is Doodle Content Writing Tool?",
            answer: "Sed mattis eros lectus, eu fermentum felis laborties convallis. Nam felis arco, sed mi Faubus quips Purus. Poetesque auctor fugit Elementa. ante ipsum primes in Faubus orca lotus et utricles poseurs cub lilia curare.",
            isOpen: true, // First item open by default
        },
        {
            question: "What Languages Does It Supports?",
            answer: "The tool supports a wide range of languages. Please refer to our documentation for the full list of currently supported languages.",
            isOpen: false,
        },
        {
            question: "How are AI writers impacting the writing industry?",
            answer: "AI writers are primarily functioning as powerful co-pilots for human writers, accelerating content creation, automating routine tasks, and optimizing for SEO, rather than replacing the core creative role.",
            isOpen: false,
        },
        {
            question: "Does Doodle To Write Long Articles?",
            answer: "Yes, Doodle is specifically designed to handle long-form content generation, including comprehensive blog posts and in-depth articles.",
            isOpen: false,
        },
    ];
    
    return (
 <div className="w-full flex justify-center py-16 sm:py-20 bg-white text-black">
  <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-12">
    
    {/* LEFT SECTION - Title + Image */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-10 lg:mb-0 text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A52] mb-6 sm:mb-8">
        Frequently asked <br className="hidden sm:block" /> questions.
      </h2>
      <img
        src={faqImage}
        alt="FAQ Illustration"
        className="w-3/4 sm:w-2/3 lg:w-full max-w-sm h-auto object-contain"
      />
    </div>

    {/* RIGHT SECTION - FAQ ITEMS */}
    <div className="w-full lg:w-1/2 mt-6 sm:mt-10 lg:mt-0">
      {faqs.map((faq, index) => (
        <FaqItem key={index} item={faq} />
      ))}
    </div>
  </div>
</div>

    );
};


// ----------------------------------------------------------------------
// REVIEWS/TESTIMONIALS SECTION COMPONENT (Component Definition at Top Level)
// ----------------------------------------------------------------------

const ReviewsSection = () => {
    // Dummy data for three review cards
    const reviews = [
        {
            name: "James Land",
            text: "I'm very grateful to have learned so much about design and it's impact on businesses. I'm looking forward to building the Hunebee Project brand with your expertise by my side.",
        },
        {
            name: "Emily Clark",
            text: "The platform's AI voice agents have revolutionized our customer support, providing faster resolution times and significantly improving customer satisfaction scores. Truly powerful!",
        },
        {
            name: "Michael Jones",
            text: "The integration process was seamless, and the level of customization available for the AI's personality and knowledge base is unmatched in the industry. Highly recommend Aithm.",
        },
    ];

    return (
     <div className="w-full flex justify-center py-16 sm:py-20 bg-[#F0F2F8] text-black">
  <div className="w-full max-w-6xl px-4 sm:px-6">

    {/* HEADER + NAVIGATION */}
    <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 sm:mb-16 space-y-6 sm:space-y-0">
      {/* LEFT SIDE - TEXT */}
      <div className="text-center sm:text-left">
        <span className="text-xs sm:text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full border border-gray-200 inline-block">
          User Experiences
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A52] mt-4 leading-tight">
          Reviews that speak <br className="hidden sm:block" /> volumes.
        </h2>
      </div>

      {/* RIGHT SIDE - NAVIGATION ARROWS */}
      <div className="flex justify-center sm:justify-end space-x-3 text-gray-400">
        <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:border-[#6600ff] hover:text-[#6600ff] transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:border-[#6600ff] hover:text-[#6600ff] transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>

    {/* REVIEWS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-white hover:shadow-xl transition-all duration-300"
        >
          {/* STAR RATING */}
          <div className="flex mb-3 sm:mb-4 text-yellow-500 text-lg sm:text-xl">
            {"★".repeat(5)}
          </div>

          {/* NAME */}
          <h3 className="text-lg sm:text-xl font-bold text-[#1B2A52] mb-2 sm:mb-3">
            {review.name}
          </h3>

          {/* TEXT */}
          <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
            {review.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

    );
};


// ----------------------------------------------------------------------
// HOME COMPONENT (The main export)
// ----------------------------------------------------------------------

export default function Home() {
    return (
        <div className="relative min-h-screen text-white mt-10 overflow-hidden">
            {/* HEADER */}
            <Header />

            {/* BLUE SHADE CENTER BACKGROUND EFFECT */}
<div className="absolute inset-0 flex justify-center items-center">
  <div
    className="
      w-[250px] h-[100px] 
      sm:w-[400px] sm:h-[150px] 
      md:w-[550px] md:h-[180px] 
      lg:w-[650px] lg:h-[200px]
      bg-[#6600ff] opacity-25 rounded-full blur-[160px] 
      transition-all duration-500
    "
  ></div>
</div>


            {/* MAIN CONTENT */}
          <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 py-16 md:py-24 z-10">
  {/* HEADING */}
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-black leading-tight">
    Supercharge your
  </h1>

  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 md:mb-6 text-[#6600ff] leading-tight">
    Call Operations{" "}
    <span className="text-black px-2 rounded">with Voice AI</span>
  </h2>

  {/* PARAGRAPH */}
  <p className="text-[#525866] text-sm sm:text-base leading-relaxed">
    Discover the new way to build, test, deploy, and monitor
  </p>
  <p className="text-[#525866] mb-8 md:mb-10 text-sm sm:text-base leading-relaxed">
    production-ready AI voice agents at scale.
  </p>

  {/* BUTTONS */}
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 md:mb-16">
    <button className="bg-[#6600ff] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4b00cc] transition text-sm sm:text-base">
      Get in Touch
    </button>
    <button className="border border-[#6600ff] text-[#6600ff] px-6 py-3 rounded-lg font-medium hover:bg-[#6600ff] hover:text-white transition text-sm sm:text-base">
      Contact Sales
    </button>
  </div>

  {/* TRUSTED BY SECTION */}
  <div className="text-center w-full">
    <h3 className="text-[#525866] text-sm sm:text-base font-semibold mb-6 md:mb-8">
      TRUSTED BY
    </h3>

    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 mb-10 md:mb-20">
      {[
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11,
        logo12,
        logo13,
        logo14,
        logo15,
        logo16,
      ].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`logo-${index}`}
          className="h-6 sm:h-8 md:h-10 opacity-70 hover:opacity-100 transition"
        />
      ))}
    </div>
  </div>
</div>


        {/* NEXT SECTION */}
<div className="relative w-full min-h-[600px] flex items-center justify-center py-10 px-4 md:px-10">
  {/* BLUR BACKGROUND IMAGE */}
  <img
    src={nextImage}
    alt="Next section"
    className="absolute inset-0 w-full h-full object-cover blur-[6px] brightness-75"
  />

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl space-y-10 lg:space-y-0 lg:space-x-10">
    
    {/* LEFT FORM */}
    <div className="w-full lg:w-1/2 text-left text-white space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center lg:text-left">
        Try Our Live Demo
      </h2>
      <p className="text-sm sm:text-base text-white leading-relaxed mb-4 text-center lg:text-left">
        Discover how our AI caller transforms customer conversations.
      </p>

      <form className="flex flex-col space-y-3 w-full max-w-sm mx-auto lg:mx-0">
        <div>
          <label className="block mb-1 text-sm text-white">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your number"
            className="w-full px-4 py-2 rounded-md border border-white text-white bg-transparent focus:outline-none focus:ring-1 focus:ring-[#6600ff]"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-white">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-white text-white bg-transparent focus:outline-none focus:ring-1 focus:ring-[#6600ff]"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md border border-white text-white bg-transparent focus:outline-none focus:ring-1 focus:ring-[#6600ff]"
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-[#6600ff] hover:bg-[#4b00cc] text-white px-4 py-2 rounded-md text-sm transition-all w-fit self-center lg:self-start"
        >
          GET A CALL
        </button>
      </form>
    </div>

    {/* RIGHT BOXES */}
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex flex-col items-center lg:items-end text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
        RECEIVE A LIVE CALL FROM OUR AGENT
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md lg:max-w-none">
        {[
          { img: logo22, text: "Receptionist" },
          { img: logo21, text: "Appointment Setter" },
          { img: logo20, text: "Customer Service" },
          { img: logo19, text: "Lead Qualification" },
          { img: logo18, text: "Survey" },
          { img: logo17, text: "Debt Collection" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border border-white/20 hover:bg-white/20 transition backdrop-blur-sm ${
              index === 1 ? "bg-[#6600ff]" : "bg-white"
            }`}
          >
            <img
              src={item.img}
              alt={item.text}
              className="h-8 sm:h-10 mb-2 object-contain"
            />
            <p
              className={`text-xs sm:text-sm font-medium ${
                index === 1 ? "text-white" : "text-black"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* HOW IT WORKS SECTION */}
<div className="w-full bg-white text-black py-10 px-4 sm:px-8 md:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left sm:text-center">
      How it Works
    </h2>
    <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 text-left sm:text-center leading-relaxed">
      Learn how our AI system streamlines communication and enhances your customer experience — from setup to live interaction.
    </p>
  </div>
</div>


        {/* BOXES SECTION */}
<div className="py-10 flex justify-center bg-white">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {[
      {
        img: image1,
        title: "Blog Posts",
        desc: "Quique tempus solarize rises kaibun ululate portico est rhonchus cogue nib.",
      },
      {
        img: image2,
        title: "SEO Articles",
        desc: "Quique tempus solarize rises kaibun ululate portico est rhonchus cogue nib.",
      },
      {
        img: image3,
        title: "News Articles",
        desc: "Quique tempus solarize rises kaibun ululate portico est rhonchus cogue nib.",
      },
      {
        img: image4,
        title: "College Essays",
        desc: "Quique tempus solarize rises kaibun ululate portico est rhonchus cogue nib.",
      },
      {
        img: image5,
        title: "Press Releases",
        desc: "Quique tempus solarize rises kaibun ululate portico est rhonchuscogue nib.",
      },
      {
        img: image6,
        title: "Payment Gateways",
        desc: "Quique tempus solarize rises kaibun ululate portico est rhonchuscogue nib.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-[#F0F2F8] p-6 sm:p-8 rounded-2xl flex flex-col items-center text-black shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
      >
        <img
          src={item.img}
          alt={item.title}
          className="h-16 sm:h-20 md:h-24 mb-4 object-contain"
        />
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1B2A52]">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-[#7F879E] leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>

{/* POWERFUL AI AGENT CREATION FEATURES SECTION */}
<div className="w-full flex justify-center mt-20 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center rounded-2xl overflow-hidden shadow-lg bg-white">
    
    {/* LEFT SIDE - Black Background */}
    <div className="bg-black text-white w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 py-10 space-y-5 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
        Powerful AI Agent <br className="hidden sm:block" /> Creation Features
      </h2>

      <div className="space-y-4 mt-6">
        <div className="flex items-center justify-center md:justify-start gap-3 bg-white text-black px-5 py-2 rounded-md shadow-md text-left">
          <img src={call} alt="Auto Sync" className="h-5 w-5" />
          <p className="font-medium text-sm sm:text-base">
            Auto-Sync Knowledge Base
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
          <img src={mesen} alt="Call Transfer" className="h-5 w-5" />
          <p>Powerful Call Transfer Feature</p>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
          <img src={mesen} alt="Appointment Booking" className="h-5 w-5" />
          <p>Easy Appointment Booking</p>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
          <img src={logooooo} alt="Navigate IVR" className="h-5 w-5" />
          <p>Navigate IVR</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE - Gradient Background with Image */}
    <div className="relative w-full md:w-1/2 flex justify-center items-center bg-gradient-to-tr from-[#d5f1ff] via-[#e6e6ff] to-[#f8e7ff] p-6 sm:p-10">
      <img
        src={image7}
        alt="AI Dashboard"
        className="relative z-10 w-[80%] sm:w-[70%] max-w-sm rounded-xl shadow-xl"
      />
    </div>
  </div>
</div>

       {/* AI CALL SECTION */}
<div className="w-full flex flex-col md:flex-row items-center justify-center mt-20 px-4 sm:px-8 lg:px-12">
  
  {/* LEFT SIDE - IMAGE */}
  <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
    <img
      src={robot1}
      alt="AI Call"
      className="w-[85%] sm:w-[70%] max-w-md rounded-2xl shadow-lg object-contain"
    />
  </div>

  {/* RIGHT SIDE - TEXT CONTENT */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-2 sm:px-4">
    <p className="text-black font-semibold mb-2 uppercase tracking-wide text-sm sm:text-base">
      What Aithm Do
    </p>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-snug mb-4">
      Create your own <br className="hidden sm:block" /> AI business easily.
    </h2>

    <p className="text-[#525866] text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
      Aithm’s AI-powered call solutions handle customer queries, automate responses,
      and improve engagement — enabling businesses to save time and deliver faster,
      smarter support experiences. Aithm empowers teams to scale smarter with
      intelligent call handling.
    </p>
  </div>
</div>


{/* AI STATS SECTION */}
<div className="w-full flex flex-col md:flex-row items-center justify-center mt-20 px-4 sm:px-8 lg:px-12">

  {/* LEFT SIDE - TEXT CONTENT */}
  <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
    <p className="text-[#525866] text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
      Our AI-driven system powers voice automation for global businesses,
      providing speed, precision, and seamless communication experiences.
      Aithm empowers teams to scale smarter with intelligent call handling.
    </p>

    {/* STATS */}
    <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12 text-black font-semibold">
      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl font-bold">400</h3>
        <p className="text-xs sm:text-sm text-gray-500">Live Experiences</p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl font-bold">85+</h3>
        <p className="text-xs sm:text-sm text-gray-500">Text Experiences</p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl font-bold">120K</h3>
        <p className="text-xs sm:text-sm text-gray-500">Chatbot Support</p>
      </div>
    </div>
        <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={robot2}
      alt="AI Communication"
      className="w-[85%] sm:w-[70%] max-w-md rounded-2xl shadow-lg object-contain"
    />
  </div>
  </div>

  {/* RIGHT SIDE - IMAGE */}

</div>


 {/* ESTEEMED BY USERS SECTION */}
<div className="text-center mt-16 px-6 md:px-10 lg:px-20">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-black">
    Esteemed by Users in <br className="hidden sm:block" /> 63+ Countries.
  </h2>

  <div className="flex justify-center mt-8">
    <img
      src={map}
      alt="World Map"
      className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 max-w-[700px] rounded-lg shadow-md"
    />
  </div>
</div>

            {/* WHAT’S NEWS SECTION */}
            <section className="py-20 bg-white mt-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">
                            Daily Blogs
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-4">What's News?</h2>
                        <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-sm">
                            Stay updated with the latest innovations, insights, and stories
                            from the world of AI technology and automation.
                        </p>
                        <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow self-start">
                            View More
                        </button>
                    </div>

                    {/* RIGHT SIDE - BLOG LIST */}
                    <div className="space-y-8">
                        {/* Blog 1 */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-6 hover:shadow-md transition-all duration-300 p-4 rounded-lg">
                            <div className="w-[80%]">
                                <div className="flex items-center text-gray-500 text-sm mb-2">
                                    <span>9 Mins Read</span>
                                    <span className="mx-2">•</span>
                                    <span>23 Nov 2025</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">
                                    The Evolution of AI: Features Shaping Tomorrow's Technology Landscape
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    This comprehensive exploration unveils cutting-edge AI features,
                                    from enhanced learning to sophisticated problem-solving.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="text-purple-600 text-sm font-medium flex items-center gap-1"
                            >
                                Read More →
                            </a>
                        </div>

                        {/* Blog 2 */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-6 hover:shadow-md transition-all duration-300 p-4 rounded-lg">
                            <div className="w-[80%]">
                                <div className="flex items-center text-gray-500 text-sm mb-2">
                                    <span>10 Mins Read</span>
                                    <span className="mx-2">•</span>
                                    <span>23 Nov 2025</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">
                                    Future Forward AI: A Spotlight on Game Changing Features
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    This comprehensive exploration unveils cutting-edge AI features,
                                    from enhanced learning to sophisticated problem-solving.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="text-purple-600 text-sm font-medium flex items-center gap-1"
                            >
                                Read More →
                            </a>
                        </div>

                        {/* Blog 3 */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-6 hover:shadow-md transition-all duration-300 p-4 rounded-lg">
                            <div className="w-[80%]">
                                <div className="flex items-center text-gray-500 text-sm mb-2">
                                    <span>10 Mins Read</span>
                                    <span className="mx-2">•</span>
                                    <span>23 Nov 2025</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">
                                    Empowering Tomorrow: AI Features Redefining the Digital Frontier
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    This comprehensive exploration unveils cutting-edge AI features,
                                    from enhanced learning to sophisticated problem-solving.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="text-purple-600 text-sm font-medium flex items-center gap-1"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW FAQ SECTION INTEGRATED HERE */}
            <FAQSection faqImage={frequently} />

            {/* NEW REVIEWS/TESTIMONIALS SECTION INTEGRATED HERE */}
            <ReviewsSection />
<Footer/>
        </div>
    );
}