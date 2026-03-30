import React from 'react';

const Steps = () => {
  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started."
    },
    {
      number: "02",
      icon: "📦",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      number: "03",
      icon: "🚀",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Lines - Desktop only */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gray-300"></div>
          <div className="hidden md:block absolute top-16 left-2/4 right-1/4 h-0.5 bg-gray-300"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number Badge */}
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
