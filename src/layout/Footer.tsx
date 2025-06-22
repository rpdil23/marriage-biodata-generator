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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                &copy; 2025 Marriage Biodata Generator. All rights reserved.
              </p>
              <div className="cursor-pointer" onClick={() => handleTeamClick()}>
                <span className="mr-1">&hearts; Made with React &hearts;</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/rpdil23/marriage-biodata-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.391 7.861 10.923.575.105.785-.25.785-.558 0-.274-.01-1.002-.016-1.966-3.2.696-3.878-1.543-3.878-1.543-.523-1.33-1.277-1.684-1.277-1.684-1.043-.713.08-.698.08-.698 1.153.081 1.759 1.184 1.759 1.184 1.025 1.755 2.69 1.248 3.343.954.103-.743.402-1.248.73-1.535-2.554-.29-5.239-1.277-5.239-5.686 0-1.256.448-2.283 1.183-3.088-.119-.29-.512-1.455.112-3.035 0 0 .964-.308 3.158 1.176.915-.254 1.896-.38 2.872-.385.977.005 1.957.131 2.874.385 2.19-1.484 3.151-1.176 3.151-1.176.625 1.58.233 2.745.114 3.035.737.805 1.181 1.832 1.181 3.088 0 4.421-2.69 5.392-5.253 5.676.414.353.783 1.047.783 2.113 0 1.524-.014 2.752-.014 3.126 0 .311.207.668.791.555C20.213 21.387 23.5 17.087 23.5 12 23.5 5.648 18.352.5 12 .5z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Terms & Conditions
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <a
                  href="terms-and-conditions"
                  className="hover:text-white transition underline"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="privacy-policy"
                  className="hover:text-white transition underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="license-agreement"
                  className="hover:text-white transition underline"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
