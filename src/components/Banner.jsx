import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">
      
      {/* Left Side: Text Content */}
      <div className="flex-1 space-y-6">
        <div className="inline-block bg-purple-100 text-[#8B5CF6] px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
          🌟 Best Digital Products
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B0F19] leading-tight">
          Supercharge Your <br className="hidden lg:block" /> Digital Workflow
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-lg">
          Elevate your projects with our premium collection of digital tools, templates, and software solutions designed for modern creators.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
            Explore Products
          </button>
          <button className="bg-transparent text-[#8B5CF6] border-2 border-[#8B5CF6] hover:bg-purple-50 px-8 py-3 rounded-full font-semibold transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 w-full flex justify-center md:justify-end">
        {/* TO ADD YOUR LOCAL IMAGE:
          1. Create an 'assets' folder inside your 'src' folder.
          2. Put your image in there (e.g., banner-img.png).
          3. At the top of this file, add: import myImage from '../assets/banner-img.png';
          4. Change the src below to: src={myImage}
        */}
        <img 
          src="https://placehold.co/600x500/f8fafc/8b5cf6?text=Your+Local+Image+Here" 
          alt="Digital Workflow" 
          className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
        />
      </div>

    </div>
  );
};

export default Banner;