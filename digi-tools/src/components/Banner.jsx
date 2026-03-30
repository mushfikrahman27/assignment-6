import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                🔵 New: AI-Powered Tools Available
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Supercharge Your Digital Workflow
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
            </p>

            {/* Small text */}
            <p className="text-sm text-gray-500">
              Explore Products
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Explore Products
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
              alt="Digital workflow" 
              className="rounded-lg shadow-xl w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
