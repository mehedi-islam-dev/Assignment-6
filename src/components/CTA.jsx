import React from 'react';

const CTA = () => {
  return (
    <div className="bg-[#7C3AED] py-20">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. <br className="hidden sm:block" /> 
          Start your free trial today.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-white text-[#7C3AED] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors shadow-lg">
            Explore Products
          </button>
          <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#7C3AED] px-8 py-3 rounded-full font-bold transition-all">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-purple-200">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CTA;