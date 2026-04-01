import React from 'react';

const Stats = () => {
  return (
    <div className="bg-[#8B5CF6] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-purple-400">
          
          <div className="pt-4 md:pt-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">50K+</h2>
            <p className="text-purple-100 font-medium text-lg">Active Users</p>
          </div>
          
          <div className="pt-4 md:pt-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">200+</h2>
            <p className="text-purple-100 font-medium text-lg">Premium Tools</p>
          </div>
          
          <div className="pt-4 md:pt-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">4.9</h2>
            <p className="text-purple-100 font-medium text-lg">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;