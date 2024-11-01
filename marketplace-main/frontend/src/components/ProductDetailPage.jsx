import React from 'react';
import Carousel from './Carousel';
import mobimg1 from '../assets/frontpageImgs/mobimg1.jpeg';

const ProductDetailPage = () => (
  <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-8 mt-10 m-auto max-w-screen-lg">
    <Carousel  autoSlide autoSlideInterval={5000} >
      {[mobimg1, mobimg1, mobimg1].map((img, idx) => (
        <img
  key={idx}
  src={img}
  alt={`Product ${idx + 1}`}
  style={{ marginRight: '12rem',
    marginLeft: '3rem',
   }} // Corrected inline style
  className="object-cover h-100 w-96 "
/>      ))}
    </Carousel>

    <div className="flex flex-col items-center lg:items-start lg:ml-8 w-full lg:w-1/2">
      <h2 className="text-2xl font-bold mb-2">Oppo Reno 5</h2>
      <p className="text-xl text-gray-700 mb-2">Rs 70000</p>
      <p className="text-sm text-blue-600 mb-4">Be the first to review this product</p>
      <hr className="my-4 w-full" />

      <div className="flex items-center mb-4">
        <span className="mr-4 font-semibold">Size:</span>
        <div className="flex space-x-2">
          {['8gb/128', '6/128'].map(size => (
            <button
              key={size}
              className="w-20 h-10 text-sm border border-gray-300 rounded text-center hover:border-blue-500"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center mb-4">
        <span className="mr-4 font-semibold">Color:</span>
        <div className="flex space-x-2">
          {['cyan-500', 'zinc-700', 'black', 'yellow-400'].map(color => (
            <button key={color} className={`w-10 h-10 bg-${color} border border-gray-300 rounded`} />
          ))}
        </div>
      </div>

      <div className="flex items-center mb-4">
        <span className="mr-4 font-semibold">Stock:</span>
        <p className="text-lime-500">In Stock</p>
      </div>

      <div className="flex items-center mb-4">
        <span className="mr-4 font-semibold">Qty:</span>
        <input
          type="number"
          defaultValue="1"
          className="w-12 h-10 border border-gray-300 rounded text-center"
        />
      </div>

      <button className="w-full lg:w-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductDetailPage;
