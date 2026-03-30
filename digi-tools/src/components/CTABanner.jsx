import React from 'react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Transform Your Workflow?
          </h2>

          {/* Subtext */}
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-medium transition-colors">
              Explore Products
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-medium transition-colors">
              View Pricing
            </button>
          </div>

          {/* Small text */}
          <p className="text-blue-200 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
