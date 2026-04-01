import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-[#0B0F19] flex items-center gap-2 cursor-pointer">
          <i className="fas fa-layer-group text-[#8B5CF6]"></i>
          Digi<span className="text-[#8B5CF6]">Tools</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#8B5CF6] transition-colors">Products</a>
          <a href="#" className="hover:text-[#8B5CF6] transition-colors">Features</a>
          <a href="#" className="hover:text-[#8B5CF6] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#8B5CF6] transition-colors">Resources</a>
          <a href="#" className="hover:text-[#8B5CF6] transition-colors">FAQ</a>
        </div>

        {/* Right Side: Login, Cart, Get Started */}
        <div className="flex items-center space-x-6">
          <a href="#" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#8B5CF6] transition-colors">Login</a>
          
          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <i className="fas fa-shopping-cart text-xl text-gray-700 hover:text-[#8B5CF6] transition-colors"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#8B5CF6] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <button className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-md">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;