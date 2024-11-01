import React from 'react';
import Filters from '../components/MarketplaceFilter';
import mobimg1 from '../assets/frontpageImgs/mobimg1.jpeg';
import ProductCard from '../components/MarketplaceProductCard';

const MainMarketplace = () => {
  const products = [
    { id: 1, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'New', location: 'Lahore' },
    { id: 2, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'New', location: 'Lahore' },
    { id: 3, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    { id: 4, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    { id: 4, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    { id: 4, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    { id: 4, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    { id: 4, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    { id: 4, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    { id: 4, image: mobimg1, name: 'Samsung ultra', price: '70,000 Rs', condition: 'Used', location: 'Lahore' },
    // Add more products as needed
  ];

  return (
    <div className="flex">
      <Filters />
      <div>
      <div className="flex-grow pt-3 pl-3 pb-0 border">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Product</h1>
          <div className="flex space-x-4 items-center">
            <div>
              <label className="mr-2">Showing</label>
              <select className="border rounded p-2">
                <option>1-24</option>
                <option>25-48</option>
                <option>49-72</option>
                <option>73-96</option>
              </select>
            </div>
            <div>
              <label className="mr-2">Sort by</label>
              <select className="border rounded p-2">
                <option>Price</option>
                <option>Newest</option>
                <option>Best Selling</option>
              </select>
            </div>
          </div>
        </div>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MainMarketplace;
