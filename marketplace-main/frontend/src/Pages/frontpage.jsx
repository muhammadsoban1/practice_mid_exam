
import React from 'react';
import img1 from '../assets/frontpageImgs/BuyerMob.png';
import mobimg1 from '../assets/frontpageImgs/mobimg1.jpeg';
import ProductCard from '../components/FrontPageProductCard';
import blue from '../assets/Backgrounds/blue.svg';

const FrontPage = () => {
    const products = [
        { image: mobimg1, title: 'Samsung ultra', price: '70,000 Rs', label: 'New' },
        { image: mobimg1, title: 'Samsung ultra', price: '70,000 Rs', label: 'Used' },
        { image: mobimg1, title: 'Samsung ultra', price: '70,000 Rs', label: 'Used' },
    ];

    return (
        <>
        <div style={{ backgroundImage: `url(${blue})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className="3xl:mx-custom-margin  pt-10 sm:pb-10 lg:pb-0 " >
        
            <section className="flex flex-col lg:flex-row lg:items-start h-full">
                <div className=" w-1/2  mb-4 lg:mb-0 hidden lg:block mr-20 ">
                    <img className="w-full" src={img1} alt="Buyer Mobile" />
                </div>

                {/* Find favorite Phone */}
                <div className="max-w-md mx-auto mt-28 p-6 bg-gray-200 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-7 ">Find your favourite Phone</h1>
                    <div className="mb-4">
                        <label className="relative block ">
                            <span className="sr-only">Search by Name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
                                <svg className="h-5 w-5 fill-gray-500" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 111.42-1.42l5.387 5.387a1 1 0 01-1.415 1.415L12.9 14.32zM8 14A6 6 0 108 2a6 6 0 000 12z" />
                                </svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search by Name" type="text" name="search" />
                        </label>
                    </div>
                    <div className="mb-4 flex space-x-2 mt-5">
                        <select className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Select City</option>
                            <option>Lahore</option>
                            <option>Islamabad</option>
                            <option>Karachi</option>
                        </select>
                        <select className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Select Conditions</option>
                            <option>New</option>
                            <option>Used</option>
                            <option>Exchange</option>
                        </select>
                    </div>
                    <button className="w-full mb-3 mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Search</button>
                </div>
                </section>
    </div> 
    </div>       

           {/* Recommended products */}
            
            <div className="3xl:mx-custom-margin mt-10">
                <div className="container mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Recommended Products</h2>
                        <a href="#" className="text-blue-500 hover:underline">View All Products</a>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                label={product.label}
                                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6"
                            />
                        ))}
                    </div>
                </div>
            </div>
           
           
     </>   
    );
};

export default FrontPage;


