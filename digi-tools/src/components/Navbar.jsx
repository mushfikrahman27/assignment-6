import React, { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">DigiTools</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#products" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
              >
                Products
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <div className="relative">
              <svg 
                className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Login Button */}
            <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
              Login
            </button>

            {/* Get Started Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a 
                href="#products" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              
              <div className="flex items-center space-x-4 px-3 py-2 border-t mt-2 pt-4">
                <div className="relative">
                  <svg 
                    className="w-6 h-6 text-gray-700" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium">
                  Login
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
