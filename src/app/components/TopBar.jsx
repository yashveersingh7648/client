"use client"
import { useState } from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaReddit } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";

const TopBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`w-full ${isDarkMode ? "bg-gray-900 text-white dark" : "bg-white text-gray-800"} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 ">
          {/* संपर्क जानकारी */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <a
              href="mailto:contact@company.com"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300"
              aria-label="Email us"
            >
              <FaEnvelope className="text-lg" />
              <span>contact@company.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300"
              aria-label="Call us"
            >
              <FaPhone className="text-lg" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>

          {/* सोशल लिंक और CTA */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 md:mr-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Visit our Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Visit our YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transform hover:scale-110 transition-all duration-300"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Visit our Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                aria-label="Visit our Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 transform hover:scale-110 transition-all duration-300"
                aria-label="Visit our Pinterest"
              >
                <FaPinterest className="text-xl" />
              </a>
              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Visit our Reddit"
              >
                <FaReddit className="text-xl" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <MdLightMode className="text-xl" /> : <MdDarkMode className="text-xl" />}
              </button>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;