import React from 'react';

const ProductCard = ({ product }) => {
  return (
    
    <div className="border rounded-lg overflow-hidden shadow-lg relative ml-2 p-2">
      {product.condition === 'New' && (
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
          New
        </span>
      )}
      {product.condition === 'Used' && (
        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
          Used
        </span>
      )}
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
        <p className="text-gray-600">{product.location}</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Visit Store</span>
      </div>
    </div>
  );
};

export default ProductCard;
