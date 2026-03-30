import React from 'react';

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Active Users */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              50K+
            </div>
            <div className="text-blue-100 text-lg">
              Active Users
            </div>
          </div>

          {/* Vertical Divider - Desktop only */}
          <div className="hidden md:block absolute left-1/3 transform -translate-x-1/2 h-16 w-px bg-blue-300"></div>
          <div className="hidden md:block absolute left-2/3 transform -translate-x-1/2 h-16 w-px bg-blue-300"></div>

          {/* Premium Tools */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              200+
            </div>
            <div className="text-blue-100 text-lg">
              Premium Tools
            </div>
          </div>

          {/* Rating */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              4.9
            </div>
            <div className="text-blue-100 text-lg">
              Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
