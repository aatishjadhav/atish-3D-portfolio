import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#fdfdfd]/40 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 h-16 lg:max-w-6xl lg:mx-auto">
        <a
          href="/"
          className="text-[38px] text-gray-900 hover:text-indigo-600 transition-all duration-300"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 600,
          }}
          aria-label="Atish Home"
        >
          Atish<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium text-gray-700">
          <li>
            <a href="#home" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-orange-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-500">
              Projects
            </a>
          </li>
          {/* <li><a href="#about" className="hover:text-orange-500">About</a></li> */}
          <li>
            <a href="#blogs" className="hover:text-orange-500">
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {/* <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] py-4" : "max-h-0 overflow-hidden"
        }`}
      > */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "h-[calc(100vh-4rem)] py-6" : "h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-medium text-gray-700">
          <li>
            <a
              href="#home"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
