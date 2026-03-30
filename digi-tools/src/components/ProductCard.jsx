import React from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const handleAddToCart = () => {
    if (isInCart) {
      toast.warning(`${product.name} is already in cart!`);
    } else {
      onAddToCart(product);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const getTagColor = (tagType) => {
    switch (tagType) {
      case 'best-seller':
        return 'bg-orange-100 text-orange-600';
      case 'popular':
        return 'bg-blue-100 text-blue-600';
      case 'new':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getPeriodText = (period) => {
    return period === 'monthly' ? '/mo' : '/One-Time';
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Tag and Icon */}
      <div className="flex justify-between items-start mb-4">
        <div className="text-3xl">
          {product.icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(product.tagType)}`}>
          {product.tag}
        </span>
      </div>

      {/* Product Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {product.description}
      </p>

      {/* Price */}
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-500 text-sm ml-1">
          {getPeriodText(product.period)}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          isInCart
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isInCart ? 'Added to Cart ✓' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
