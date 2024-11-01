import React from 'react';
import mobimg1 from '../assets/frontpageImgs/mobimg1.jpeg';

const RelatedModels = () => {
  const products = [
    { id: 1, image: mobimg1, name: 'iPhone 16' },
    { id: 2, image: mobimg1, name: 'iPhone 16' },
    { id: 3, image: mobimg1, name: 'iPhone 16' },
    { id: 4, image: mobimg1, name: 'iPhone 16' },
    { id: 5, image: mobimg1, name: 'iPhone 16' },
    { id: 6, image: mobimg1, name: 'iPhone 16' },
  ];

  return (
    <div className="py-8">
      <h2 className="text-center text-xl sm:text-2xl font-bold mb-4">Related Models</h2>
      <hr className="border-gray-300 mb-6 mx-auto w-32" />
      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-2 sm:p-4 text-center">
            <img src={product.image} alt={product.name} className="h-20 sm:h-32 mx-auto object-cover rounded" />
            <p className="mt-2 font-medium text-sm sm:text-base">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedModels;
