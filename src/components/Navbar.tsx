"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-800"
            aria-label="Home"
          >
            Jon Halverson
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="About section"
            >
              About
            </Link>
            <Link 
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Projects section"
            >
              Projects
            </Link>
            <Link 
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Contact section"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={handleToggleMenu}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={handleToggleMenu}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={handleToggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 