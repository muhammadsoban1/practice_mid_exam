
import React from 'react';
import logo from '../assets/logos/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-white p-8">
      <div className="text-center justify-center mb-8 flex flex-row ">
        <p className="text-xl italic mt-1 font-medium mr-6">To start selling on our platform <a href="#" className="text-blue-500">Click here</a></p>
        <button className="ml-4 px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold rounded-full hover:bg-blue-500 hover:text-white transition">Become a Seller</button>
      </div>
      <div className='3xl:mx-custom-margin'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact us */}
        <div>
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p className="text-gray-600">+92 3455222930</p>
          <p className="text-gray-600">rajafahad03425@gmail.com</p>
        </div>
        {/* pages */}
        <div>
          <h3 className="font-bold text-xl mb-4">Phone Kart</h3>
          <ul>
            <li className="text-gray-600 mb-2"><a href="#about" className="hover:underline">About us</a></li>
            <li className="text-gray-600 mb-2"><a href="#stores" className="hover:underline">Stores</a></li>
            <li className="text-gray-600 mb-2"><a href="#sitemap" className="hover:underline">Sitemap</a></li>
            <li className="text-gray-600 mb-2"><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        {/* Phone kart info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex mb-4">
            <img src={logo} alt="Phone Kart Logo" className="w-36 h-10 mr-2" />
            
          </div>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            Our goal is to create a user-friendly marketplace that connects buyers and sellers of mobile phones, ensuring a seamless and secure transaction process with a wide range of options and competitive prices.
          </p>
          <div className="flex space-x-4">
            <a href="#twitter" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
            <a href="#facebook" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook"></i></a>
            <a href="#linkedin" className="text-gray-600 hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>
      </div>


      <div className="mt-8 text-center text-gray-600">
        &copy; 2024 PhoneKart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
