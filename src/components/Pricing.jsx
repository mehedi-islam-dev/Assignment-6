import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0F19] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the plan that best fits your workflow. Upgrade or cancel anytime with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center mt-10">
          
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for trying out our basic tools.</p>
            <div className="text-4xl font-extrabold text-gray-900 mb-6">$0<span className="text-lg text-gray-500 font-normal">/month</span></div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
              <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Access to 5 free tools</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Basic design templates</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Community forum support</li>
              <li className="flex items-center gap-3 text-gray-300"><i className="fas fa-times"></i> Premium asset downloads</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-semibold border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-purple-50 transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="bg-[#8B5CF6] text-white p-8 rounded-3xl shadow-2xl shadow-purple-200 relative transform md:-translate-y-6 border-4 border-purple-100">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full shadow-sm">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-purple-200 text-sm mb-6">For serious creators and freelancers.</p>
            <div className="text-4xl font-extrabold mb-6">$29<span className="text-lg text-purple-200 font-normal">/month</span></div>
            <ul className="space-y-4 mb-8 text-sm text-purple-50">
              <li className="flex items-center gap-3"><i className="fas fa-check text-yellow-300"></i> Access to all premium tools</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-yellow-300"></i> Unlimited daily downloads</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-yellow-300"></i> 24/7 priority email support</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-yellow-300"></i> Full commercial license</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-white text-[#8B5CF6] hover:bg-gray-50 transition-colors shadow-md">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-6">For large teams and scaling agencies.</p>
            <div className="text-4xl font-extrabold text-gray-900 mb-6">$99<span className="text-lg text-gray-500 font-normal">/month</span></div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
              <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Everything in Pro plan</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Advanced team collaboration</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Custom API integrations</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Dedicated account manager</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-semibold border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-purple-50 transition-colors">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;