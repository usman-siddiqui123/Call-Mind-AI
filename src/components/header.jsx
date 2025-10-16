import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState("home");

  // Detect current page for active link
  useEffect(() => {
    if (location.pathname === "/") setActive("home");
    else if (location.pathname === "/about") setActive("about");
    else if (location.pathname === "/contact") setActive("contact");
  }, [location]);

  const links = [
    { name: "Home", path: "/", key: "home" },
    { name: "About Us", path: "/about", key: "about" },
    { name: "Contact Us", path: "/contact", key: "contact" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 h-16">
        {/* LEFT — Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="CallMind AI Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </div>

        {/* CENTER — Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              onClick={() => setActive(link.key)}
              className={`relative capitalize after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#5b21b6] transition-all duration-300 ${
                active === link.key
                  ? "text-[#5b21b6] after:w-full"
                  : "hover:text-[#5b21b6] after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT — Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-gray-400 text-gray-700 px-3 lg:px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition">
            Contact Sales
          </button>
          <button className="bg-[#0f172a] text-white px-3 lg:px-4 py-2 rounded-md text-sm hover:bg-[#1e293b] transition">
            Join / Login
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-300">
          <nav className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            {links.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                onClick={() => {
                  setActive(link.key);
                  setIsOpen(false); // close menu after click
                }}
                className={`relative capitalize after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#5b21b6] transition-all duration-300 ${
                  active === link.key
                    ? "text-[#5b21b6] after:w-full"
                    : "hover:text-[#5b21b6] after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Buttons (Mobile) */}
            <div className="flex flex-col gap-3 w-[80%]">
              <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition w-full">
                Contact Sales
              </button>
              <button className="bg-[#0f172a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1e293b] transition w-full">
                Join / Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
