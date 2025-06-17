import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner"; // Make sure the path is correct

export const Footer = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleTeamClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount === 4) {
      toast.success(
        <div className="flex items-center gap-2">
          <span>Built by Ram</span>
        </div>
      );
    }
  }, [clickCount]);

  return (
    <footer className="relative mt-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              திருமண பயோடேட்டா
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Create beautiful and professional marriage biodata with
              traditional astrological charts. Perfect for matrimonial purposes
              with instant PDF generation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Features
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                Complete biodata form
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                Astrological chart generator
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></span>
                Instant PDF download
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                Mobile responsive design
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">
              Contact
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>Built with modern web technologies</p>
              <p>Designed for Tamil matrimonial traditions</p>
              <p className="text-sm text-gray-400 mt-4">
                © 2025 Marriage Biodata Generator. All rights reserved.
              </p>
              <div className="cursor-pointer" onClick={() => handleTeamClick()}>
                <span className="mr-1">❤️ Made with React ❤️ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
