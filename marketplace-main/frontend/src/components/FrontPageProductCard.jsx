import React from 'react';

const ProductCard = ({ image, title, price, label }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-5 p-4">
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        {label && (
          <span className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-bl-md">
            {label}
          </span>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
    </div>

  );
};

export default ProductCard;
