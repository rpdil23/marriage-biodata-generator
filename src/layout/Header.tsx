import React from "react";
import { motion } from "framer-motion"; // For smooth animations

const Header: React.FC = () => {
  return (
    <header className="relative z-10 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <a href="home" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-xl">
                  <img src="logo.png" alt="Wedding Ring" />
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  திருமண பயோடேட்டா
                </h1>
                <p className="text-blue-200 text-sm">
                  Marriage Biodata Generator
                </p>
              </div>
            </div>
          </a>

          {/* Animated Button */}
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="home"
              className="text-white hover:text-blue-300 transition-colors duration-300 hover:scale-110"
            >
              Generator
            </a>
            <a
              href="about"
              className="text-white hover:text-blue-300 transition-colors duration-300 hover:scale-110"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
