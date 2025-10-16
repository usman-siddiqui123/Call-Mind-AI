import React from "react";
import Header from "../components/header"; // header import
import contactBg from "../assets/logos/contacthero.png"; // 👈 yahan tumhara exact image path
import Footer from "../components/footer";
import callls  from "../assets/logos/callls.png"
import emails from "../assets/logos/emails.png"
import contactform from  "../assets/logos/contactform.jpg"
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* CONTACT HERO SECTION */}
<section
  className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
  style={{
    backgroundImage: `url(${contactBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Centered Content */}
  <div className="relative z-10 px-4 sm:px-6 flex flex-col items-center justify-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-md leading-tight">
      Contact Us
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
      <a
        href="/"
        className="hover:text-[#c7aefc] transition-colors duration-200"
      >
        Home
      </a>{" "}
      / Contact Us
    </p>
  </div>
</section>

<section className="py-16 px-4 sm:px-8 md:px-20 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT SIDE TEXT */}
    <div className="text-center md:text-left">
      <p className="text-[#7b6ef6] font-medium mb-2 text-sm sm:text-base">
        Contact Us
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
        Let’s Start Working Together. Get in Touch
      </h2>
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
        Get in touch to discuss your employee wellbeing needs today.
        <br className="hidden sm:block" />
        Please give us a call, drop us an email.
      </p>
    </div>

    {/* RIGHT SIDE BOXES */}
    <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-6">
      
      {/* CALL BOX */}
      <div className="w-full sm:w-[220px] border border-gray-300 p-6 rounded-xl hover:shadow-xl transition-all bg-white">
        <div className="flex flex-col items-center text-center space-y-3">
          <img
            src={callls}
            alt="Call"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <p className="text-base sm:text-lg font-semibold text-gray-900">
            +012-3456-789102
          </p>
          <p className="text-[#7b6ef6] font-medium text-sm sm:text-base">
            Phone
          </p>
        </div>
      </div>

      {/* EMAIL BOX */}
      <div className="w-full sm:w-[220px] border border-gray-300 p-6 rounded-xl hover:shadow-xl transition-all bg-white">
        <div className="flex flex-col items-center text-center space-y-3">
          <img
            src={emails}
            alt="Email"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">
            support@example.com
          </p>
          <p className="text-[#7b6ef6] font-medium text-sm sm:text-base">
            Email
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="w-full py-16 px-4 sm:px-8 md:px-20 bg-gray-100 flex justify-center">
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT FORM BOX */}
    <div className="bg-black text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg w-full">
      <form className="space-y-6">
        {/* Name */}
        <div className="border-b border-white pb-2 bg-[#151526] rounded-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base p-2"
          />
        </div>

        {/* Email */}
        <div className="border-b border-white pb-2 bg-[#151526] rounded-md">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base p-2"
          />
        </div>

        {/* Subject */}
        <div className="border-b border-white pb-2 bg-[#151526] rounded-md">
          <input
            type="text"
            placeholder="Your Subject"
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base p-2"
          />
        </div>

        {/* Message */}
        <div className="border-b border-white pb-2 bg-[#151526] rounded-md">
          <textarea
            rows="4"
            placeholder="Write Your Message"
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none text-sm sm:text-base p-2"
          ></textarea>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-[#6600ff] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6a5de0] transition duration-300 w-full sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    {/* RIGHT IMAGE BOX */}
    <div className="flex justify-center items-center">
      <img
        src={contactform}
        alt="Contact Illustration"
        className="rounded-2xl shadow-lg w-[80%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-[90%] h-[260px] sm:h-[300px] md:h-[350px] lg:h-[380px] object-cover"
      />
    </div>
  </div>
</section>




{/* GOOGLE MAP SECTION */}
<section className="w-full mt-16 mb-16 px-4 sm:px-8 md:px-20 flex justify-center">
  <div className="w-full max-w-6xl">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.042027015873!2d67.05860221498784!3d24.936133984019155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3c7f9e2ad1%3A0xf1c43db7bfc50f7b!2sUniversity%20of%20Karachi!5e0!3m2!1sen!2s!4v1696502369305!5m2!1sen!2s"
      className="w-full h-[250px] sm:h-[350px] md:h-[450px] border-2 border-gray-200 rounded-2xl shadow-lg"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>


<Footer />




    </div>
  );
}
