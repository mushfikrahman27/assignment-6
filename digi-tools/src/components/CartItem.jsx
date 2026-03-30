import React from 'react';
import { toast } from 'react-toastify';

const CartItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item.id);
    toast.warning(`${item.name} removed from cart!`);
  };

  const getPeriodText = (period) => {
    return period === 'monthly' ? '/mo' : '/One-Time';
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-4">
      <div className="flex items-center justify-between">
        {/* Left side - Icon and Product Info */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl">
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">
              {item.name}
            </h4>
            <p className="text-gray-600">
              ${item.price}{getPeriodText(item.period)}
            </p>
          </div>
        </div>

        {/* Right side - Remove Button */}
        <button
          onClick={handleRemove}
          className="border border-red-300 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
