import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="glass-morphism rounded-3xl p-12 mb-12 animate-float">
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Beautiful Marriage Biodata
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Generate professional marriage biodata with traditional astrological
            charts in minutes. Download as PDF and share with your family and
            friends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-semibold">
              ✨ Tamil & English Support
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full font-semibold">
              📱 Mobile Responsive
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full font-semibold">
              📄 PDF Download
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
