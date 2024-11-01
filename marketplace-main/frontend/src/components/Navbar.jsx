import React from 'react';
import { Link } from 'react-router-dom';
import TopbarBanner from './TopBarBanner';
import logo from '../assets/logos/logo.jpg'
import search from '../assets/logos/search (2).png'
import searchwhite from '../assets/logos/search (1).png'
import location from '../assets/logos/location.png'
import person from '../assets/logos/log-out.png'

const NavBar = () => {
  return (
    <>
     <TopbarBanner/>
    <div className="bg-white  border-gray-200 3xl:mx-custom-margin">
      <div className="container mx-auto flex justify-between items-center py-2">
      
        <div className="flex items-center">
          <a href="/" className="flex items-center pl-3">
            <img className='h-14'
             src={logo}
            />
          </a>
        </div>

        <div className="hidden lg:flex w-full items-center py-2 pl-3 justify-between">
          <div className="flex-grow px-4 rounded">
            <div className="relative w-full">
              <div className="flex rounded bg-white border border-gray-300">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
                  <img
                    alt="search icon"
                    className="w-4 h-4"
                    src={search}
                  />
                </div>
                <input
                  className="border-0 w-full pl-8 pr-4 py-2 focus:ring-0 focus:outline-none"
                  type="search"
                  placeholder="Search..."
                />
                <button className="bg-white border-solid">
                  <img
                    alt="location icon"
                    className="w-11 h-9 pl-2 mr-3"
                    src={location}
                  />
                </button>
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded-sm">
                  <img className='h-9 ' src={searchwhite}/>
                </button>
              </div>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-baseline gap-2">
              <a className="font-semibold  hidden sm:inline text-nowrap hover:text-bluish hover:underline" href="/">
                Specs Central
              </a>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden">
          <div className="flex items-center gap-2 mr-3">
            <img
              alt="search"
              className="w-5 h-5"
              src={search}
            />
          </div>
          <div className="pr-3">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                alt="user"
                className="w-5 h-5"
                src={person}
              />
              <span className="hidden sm:inline">Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='border-b'></div>
    </>
  );
};

export default NavBar;
