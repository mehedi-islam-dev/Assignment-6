import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#070a2d] text-gray-400 py-16">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <i className="fas fa-layer-group text-[#8B5CF6]"></i>
              DigiTools
            </div>
            <p className="text-sm text-gray-500 max-w-xs mb-6">
              High-quality digital tools, templates, and software solutions designed for modern creators and professionals.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resourses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#8B5CF6] text-white rounded-full flex items-center justify-center transition-colors">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#8B5CF6] text-white rounded-full flex items-center justify-center transition-colors">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#8B5CF6] text-white rounded-full flex items-center justify-center transition-colors">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 text-center md:text-left gap-4">
          <p>&copy; {new Date().getFullYear()} DigiTools Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;