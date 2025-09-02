import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        >
          <p className="blue-gradient_text">RB</p>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            Projects
          </NavLink>
          <a
            href="/Resume.pdf"
            download="Riya-Banik-Resume.pdf"
            className="text-black hover:text-blue-600"
          >
            Download Resume
          </a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white/40 backdrop-blur-md">
          <NavLink
            to="/about"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <a
            href="/Resume.pdf"
            download="Riya-Banik-Resume.pdf"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
          <NavLink
            to="/contact"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
