import React from "react";
// Image imports: Nayi image ko rightImage ke naam se import kiya hai
import Header from "../components/header";
import aboutImage from "../assets/logos/about.jpg"; // Hero section image
import leftImage from "../assets/logos/leftImage.JPG"; // New left side image
import rightImage from "../assets/logos/right.jpg"; // Nayi image ka path! **(Is line ko add kiya hai)**
import { CheckCircle } from "lucide-react"; // Tick icon
import Footer from "../components/footer";
import testimonialBg from "../assets/logos/bottom.png"; // Testimonial section ka background
import testimonialImg1 from "../assets/logos/left.jpg"; // Pehle testimonial card ki image (blue AI hand)
import testimonialImg2 from "../assets/logos/left1.jpg";

// --- StepItem Component ko About ke Bahar Define Kiya Gaya Hai ---
// --- StepItem Component (Outside of About function) ---
const StepItem = ({ number, title, description }) => (
  <div className="flex flex-col">
    <div className="flex items-center mb-1">
      <p className="text-3xl font-bold text-purple-600 mr-4">
        {number}
      </p>
      <h3 className="text-xl font-semibold text-gray-800">
        {title}
      </h3>
    </div>
    <p className="text-gray-500 ml-10">
      {description}
    </p>
  </div>
);
// --- StepItem Component End ---


// --- TestimonialCard Component (Isse bhi About function ke Bahar define karein) ---
const TestimonialCard = ({ text, name, title, image, color }) => (
  <div className={`relative w-full max-w-lg p-6 lg:p-8 bg-black/40 backdrop-blur-sm rounded-lg shadow-xl border border-${color}-400/20 overflow-hidden`}>
    
    {/* Card ke Andar ki Image (Right Side) */}
    <img
      src={image}
      alt="Testimonial visual"
      className="absolute top-0 right-0 h-full w-1/2 object-cover object-center opacity-70"
    />

    {/* Gradient Overlay for better text readability on image part */}
    <div className={`absolute top-0 right-0 h-full w-1/2 rounded-l-full bg-gradient-to-r from-black/80 via-black/80 to-transparent`}></div>

    {/* Quote Icon (Bada wala) */}
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white/40 text-7xl font-serif z-20">
      <span className="font-extrabold leading-none">❝</span>
    </div>

    {/* Content (Left Side) */}
    <div className="relative z-20 text-white w-full lg:w-3/5"> {/* Adjusted width for text content */}
      <p className="text-base leading-relaxed mb-6">
        {text}
      </p>

      {/* User Info */}
      <h4 className="text-lg font-bold mt-10">{name}</h4> {/* mt-10 se thoda gap */}
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  </div>
);
// --- TestimonialCard Component End ---


export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* HERO IMAGE SECTION */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <img
          src={aboutImage}
          alt="About"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            <a
              href="/"
              className="hover:text-[#c7aefc] transition-colors duration-200"
            >
              Home
            </a>{" "}
            / About Us
          </p>
        </div>
      </section>

      {/* NEW CONTENT SECTION (Image on Left) */}
      <section className="max-w-7xl mx-auto px-5 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT SIDE IMAGE - Margin classes ko theek kiya */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start ml-0 md:ml-10"> {/* ml-10 ko md:ml-10 kiya */}
          <img
            src={leftImage}
            alt="AI Illustration"
            className="rounded-2xl shadow-lg w-80 h-auto object-cover"
          />
        </div>

        {/* RIGHT SIDE TEXT - Margin classes ko theek kiya */}
        <div className="w-full md:w-1/2 text-gray-800 mr-0 md:mr-10"> {/* mr-10 ko md:mr-10 kiya, w-150 hata kar w-full md:w-1/2 kiya */}
          <p className="text-sm uppercase tracking-wide text-[#5b21b6] font-semibold mb-2">
            What Aithm Do
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
            Create your own <br /> AI business easily.
          </h2>

          <p className="text-[#b9b9ba] text-base leading-relaxed mb-6">
            AI systems can analyze data, recognize patterns, make decisions, and
            even adapt and improve over time. Whether it's speech recognition,
            image processing, or problem solving.
          </p>

          {/* TICK POINTS */}
          <ul className="space-y-3 mb-8 text-[#b9b9ba]">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>Smart AI-driven automation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>Custom AI business solutions</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>Fast & scalable implementation</span>
            </li>
          </ul>

          {/* SUBMIT BUTTON */}
          <button className="bg-[#6600FF] text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#1e293b] transition">
            About Us
          </button>
        </div>
      </section>

      {/* --- Horizontal Line --- */}
      <hr className="my-8 max-w-7xl mx-auto border-gray-200" />
      {/* --- Horizontal Line --- */}

      {/* WORKING PROCESS SECTION (Content on Left, Image on Right) */}
      <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-5 py-16">

        {/* RIGHT SIDE: Image Column */}
        <div className="lg:w-2/5 mt-8 lg:mt-0 p-4 flex justify-center"> {/* lg:w-2/4 se lg:w-2/5 kiya */}
          <img
            src={rightImage}
            alt="AI Cyborg Face with glowing chip"
            className="rounded-xl shadow-2xl w-64 h-auto object-cover" 
          />
        </div>
        {/* LEFT SIDE: Content Column */}
        <div className="lg:w-3/5 p-4 lg:pr-12"> {/* lg:w-1/2 se lg:w-3/5 kiya taaki text ko zyada space mile */}
          <p className="text-purple-600 font-semibold mb-2">| Working Process</p>

          {/* Badi Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
            Get Images of from 3 simple process
          </h1>

          {/* Chota Paragraph */}
          <p className="text-gray-600 mb-10">
            They evolve and learn from experiences. Benefit from adaptive
            algorithms that continuously improve performance.
          </p>

          {/* 3 Steps/Points */}
          <div className="space-y-8">
            {/* Step 01 */}
            <StepItem
              number="01"
              title="Intelligent Automation"
              description="Experience the power of intelligent automation as our AI services streamline your workflows."
            />
            {/* Step 02 */}
            <StepItem
              number="02"
              title="Predictive Analytics"
              description="Uncover valuable insights, trends, and patterns to make informed decisions that drive business growth."
            />
            {/* Step 03 */}
            <StepItem
              number="03"
              title="Enhanced Security"
              description="AI services fortify your digital infrastructure. Utilize advanced algorithms to detect and mitigate potential threats."
            />
          </div>
        </div>

      </section>
      
{/* --- TESTIMONIALS SECTION START (Fully Responsive) --- */}
<section 
  // 'w-337 h-90' ko 'w-full min-h-[70vh]' se replace kiya. Responsive padding aur background classes lagayi hain.
  className="relative w-full min-h-[70vh] py-16 lg:py-24 bg-cover bg-center flex items-center overflow-hidden" 
  style={{
    backgroundImage: `url(${testimonialBg})`, 
  }}
>
  {/* Dark Overlay (Isse background image par text saaf dikhega) */}
  <div className="absolute inset-0 bg-black/60"></div> 

  {/* Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 w-full"> 
    
    {/* Section Heading (Reference image mein heading ki jagah hai) */}
    <h2 className="text-4xl font-bold text-center text-white mb-16">
      What Our Clients Say
    </h2>

    {/* Testimonials Row: Mobile par column, Large screen par row, aur responsive gap */}
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12 px-4">
      
      {/* Card 1 */}
      <TestimonialCard 
        text="I'm very grateful to have learned so much about design and it's impact on businesses. I'm looking forward to building the Hunebee Project brand with your expertise by my side."
        name="James Land"
        title="Web Expert"
        image={testimonialImg1}
        color="blue" // Color prop dobara add kiya for border
      />

      {/* Card 2 */}
      <TestimonialCard 
        text="I'm very grateful to have learned so much about design and it's impact on businesses. I'm looking forward to building the Hunebee Project brand with your expertise by my side."
        name="James Land"
        title="Web Expert"
        image={testimonialImg2} 
        color="orange"
      />
    </div>

    {/* Slider Dots */}
    <div className="flex justify-center mt-12 space-x-2">
        <span className="w-2 h-2 bg-white rounded-full opacity-30"></span>
        <span className="w-2 h-2 bg-white rounded-full"></span> {/* Active dot */}
        <span className="w-2 h-2 bg-white rounded-full opacity-30"></span>
    </div>
  </div>
</section>
{/* --- TESTIMONIALS SECTION END --- */}
  
      
      <Footer /> 
    </div>
  );
}