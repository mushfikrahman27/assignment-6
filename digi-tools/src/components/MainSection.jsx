import React from 'react';
import ProductCard from './ProductCard';
import CartItem from './CartItem';

const MainSection = ({ 
  products, 
  cart, 
  activeTab, 
  onTabChange, 
  onAddToCart, 
  onRemoveFromCart, 
  onCheckout 
}) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => onTabChange('products')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'products'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => onTabChange('cart')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors relative ${
                activeTab === 'cart'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Cart
              {cart.length > 0 && (
                <span className={`absolute -top-2 -right-2 h-5 w-5 rounded-full flex items-center justify-center text-xs ${
                  activeTab === 'cart' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                }`}>
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Gray Divider */}
        <div className="max-w-md mx-auto mb-12">
          <div className="h-px bg-gray-300"></div>
        </div>

        {/* Products Section */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isInCart={cart.some(item => item.id === product.id)}
              />
            ))}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <svg 
                  className="w-16 h-16 text-gray-400 mx-auto mb-4" 
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
                <p className="text-gray-500 text-lg">
                  Your cart is empty. Browse products and add items!
                </p>
              </div>
            ) : (
              <div>
                {/* Your Cart Label */}
                <h3 className="text-gray-600 text-sm font-medium mb-6">Your Cart</h3>

                {/* Cart Items */}
                <div className="mb-6">
                  {cart.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex items-center justify-between py-4">
                        {/* Left side - Icon and Product Info */}
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl w-8 h-8 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">
                              {item.name}
                            </h4>
                            <p className="text-gray-600">
                              ${item.price}{item.period === 'monthly' ? '/mo' : '/One-Time'}
                            </p>
                          </div>
                        </div>

                        {/* Right side - Remove Button */}
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      {/* Divider between items */}
                      {index < cart.length - 1 && (
                        <div className="border-b border-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-gray-600 text-sm">Total</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${getTotalPrice()}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-all"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
