// components/Navbar.js
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [navBg, setNavBg] = useState("bg-transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-gray-800 shadow-md");
      } else {
        setNavBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full px-4 py-4 transition-colors duration-300 ${navBg} z-20`}
    >
      {/* Large Screen: Navigation */}
      <div className="hidden lg:flex justify-evenly items-center relative">
        {/* Left side: Links */}
        <div className="flex space-x-12">
          <div className="text-center text-white cursor-pointer hover:text-indigo-400">
            <Link href={"/blog/technical-tutorials"}>
              <div className="text-sm font-semibold pb-2 border-b border-white inline-block">
                POPULAR
              </div>
              <span className="text-xs block font-semibold mt-1">POSTS</span>
            </Link>
          </div>
          <div className="text-center text-white cursor-pointer hover:text-indigo-400">
            <a href="#category">
              <div className="text-sm font-semibold pb-2 border-b border-white inline-block">
                CATEGORIES
              </div>
              <span className="text-xs block font-semibold mt-1">OF BLOGS</span>
            </a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-28 h-28 mt-6 rounded-full overflow-hidden border-4 border-white">
          <img
            src="/images/logo.png"
            alt="Tech Ripple Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right side: Links */}
        <div className="flex space-x-12">
          <div className="text-center text-white cursor-pointer hover:text-indigo-400">
            <Link href={"/blog/problem-solving"}>
              <div className="text-sm font-semibold pb-2 border-b border-white inline-block">
                RECENT
              </div>
              <span className="text-xs block font-semibold mt-1">BLOGS</span>
            </Link>
          </div>
          <div className="text-center text-white cursor-pointer hover:text-indigo-400">
            <Link href={"/contact"}>
              <div className="text-sm font-semibold pb-2 border-b border-white inline-block">
                CONTACT
              </div>
              <span className="text-xs block font-semibold mt-1">PAGE</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Small and Medium Screens: Hamburger Menu */}
      <div className="flex justify-between items-center lg:hidden">
        {/* Logo */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
          <Image
            src="/images/logo.png"
            alt="Tech Ripple Logo"
            className="w-full h-full object-contain"
            width= {64}
            height = { 64}
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu for Small and Medium Screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 text-white rounded-lg shadow-lg py-4 w-48 z-10">
          <Link href={"/blog/technical-tutorials"}>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              POPULAR POSTS
            </div>
          </Link>
          <a href="#category" className="block px-4 py-2 hover:bg-gray-700">
            CATEGORIES OF BLOGS
          </a>
          <Link href={"/blog/problem-solving"}>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              RECENT BLOGS
            </div>
          </Link>
          <Link href={"/contact"}>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              CONTACT PAGE
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
