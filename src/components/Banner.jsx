import React from 'react';
import myImage from '../assets/banner.png'
const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">

      <div className="flex-1 space-y-6">
        <div className="inline-block bg-purple-100 text-[#8B5CF6] px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
          🌟 New AI Powered Tools Available
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B0F19] leading-tight">
          Supercharge Your <br className="hidden lg:block" /> Digital Workflow
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-lg">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
            Explore Products
          </button>
          <button className="bg-transparent text-[#8B5CF6] border-2 border-[#8B5CF6] hover:bg-purple-50 px-8 py-3 rounded-full font-semibold transition-all">
            <i class="fa-solid fa-play"></i> Watch Demo
          </button>
        </div>
      </div>
      <div className="flex-1 w-full flex justify-center md:justify-end">
        <img 
          src={myImage} 
          alt="Digital Workflow" 
          className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
        />
      </div>

    </div>
  );
};

export default Banner;