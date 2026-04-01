import React from 'react';

const Steps = () => {
  return (
    <div className="bg-slate-50 py-20 mt-16 border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0F19] mb-4">Get Started in 3 Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Supercharge your digital workflow in just a few minutes with our simple onboarding process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 relative group hover:shadow-md transition-shadow">
            <div className="absolute -top-4 right-8 bg-[#8B5CF6] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-50">1</div>
            <div className="w-16 h-16 mx-auto bg-purple-50 text-[#8B5CF6] rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="far fa-user"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Create Account</h3>
            <p className="text-gray-500 text-sm">Sign up for a free account to get started with our platform and track your tools.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 relative group hover:shadow-md transition-shadow">
            <div className="absolute -top-4 right-8 bg-[#8B5CF6] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-50">2</div>
            <div className="w-16 h-16 mx-auto bg-purple-50 text-[#8B5CF6] rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-box-open"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Choose Products</h3>
            <p className="text-gray-500 text-sm">Browse our premium collection and select the digital tools that fit your exact needs.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 relative group hover:shadow-md transition-shadow">
            <div className="absolute -top-4 right-8 bg-[#8B5CF6] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-50">3</div>
            <div className="w-16 h-16 mx-auto bg-purple-50 text-[#8B5CF6] rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Start Creating</h3>
            <p className="text-gray-500 text-sm">Download your products immediately and instantly supercharge your workflow.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Steps;