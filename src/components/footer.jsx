import React from 'react';

const Footer = () => {
    return (
       <footer className="bg-[#1a243d] text-white pt-16">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
    {/* Main Grid: Subscribe | Links + Resource | Office */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700/50 pb-12">
      
      {/* Column 1: Subscribe (2/4 span) */}
      <div className="md:col-span-2 space-y-4 md:pr-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Subscribe To Ai!
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto md:mx-0">
          Artificial Intelligence is a transformation field of computer science
          that empowers machines to perform intelligent tasks efficiently.
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row mt-6 max-w-md mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none text-black focus:outline-none bg-white text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none font-semibold transition text-sm sm:text-base mt-2 sm:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Column 2: Quick Links & Resource */}
      <div className="grid grid-cols-2 gap-8 text-center sm:text-left">
        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Gallery</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Developers</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Resource */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Resource</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Blogs</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#B9B9BA] transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Column 3: Office */}
      <div className="space-y-4 text-center sm:text-left">
        <h3 className="text-lg font-semibold mb-4">Office</h3>
        <address className="space-y-3 text-sm not-italic text-gray-400">
          <p>175 5th Ave, New York, NY 10010, USA</p>
          <p>example@example.com</p>
          <p>+1 840 841 25 69</p>
        </address>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400 text-center space-y-3 md:space-y-0 border-t border-gray-700/30 mt-6">
      <p>© 2025 Aithm. All rights reserved.</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <a href="#" className="hover:text-[#B9B9BA] transition">Terms of Service</a>
        <a href="#" className="hover:text-[#B9B9BA] transition">Privacy Policy</a>
        <a href="#" className="hover:text-[#B9B9BA] transition">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;