import React, { useState } from 'react';

const Filter = () => {
  const [priceRange, setPriceRange] = useState(150000);
  const [condition, setCondition] = useState('');
  const [city, setCity] = useState('');
  const [color, setColor] = useState('');
  const [exchange, setExchange] = useState('');

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleExchangeChange = (e) => {
    setExchange(e.target.value);
  };

  const handleClearFilters = () => {
    setPriceRange(150000);
    setCondition('');
    setCity('');
    setColor('');
    setExchange('');
  };

  const dropdownStyles = 
    "block w-full bg-white border py-2 pl-4 pr-8 border-gray-300 rounded-lg shadow-lg dark:bg-gray-600 dark:border-gray-500 dark:text-white";

  const dropdownWrapperStyles =
    "relative mb-4";

  const dropdownIconStyles = 
    "absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400";

  const optionStyles = 
    "bg-white dark:bg-gray-600 dark:text-white text-gray-700 p-2";

  return (
    <div className="w-64 p-4 border rounded-lg h-120 bg-white shadow white:bg-gray-700 white:border-gray-600">
      <input
        type="text"
        placeholder="Search By Keyword"
        className="w-full mb-4 p-2 text-sm bg-gray-50 border border-gray-300 rounded white:bg-gray-600 white:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      />
      <button 
        className="w-full mb-4 p-2 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClearFilters}
      >
        Clear All Filters
      </button>

      <div className={dropdownWrapperStyles}>
        <h3 className="font-bold mb-2 text-gray-700 dark:text-gray-200">Condition</h3>
        <div className="relative">
          <select className={dropdownStyles} value={condition} onChange={handleConditionChange}>
            <option className={optionStyles} value="">Select Condition</option>
            <option className={optionStyles} value="New">New</option>
            <option className={optionStyles} value="Used">Used</option>
          </select>
        </div>
      </div>

      <div className={dropdownWrapperStyles}>
        <h3 className="font-bold mb-2 text-gray-700 white:text-gray-200">City</h3>
        <div className="relative">
          <select className={dropdownStyles} value={city} onChange={handleCityChange}>
            <option className={optionStyles} value="">Select City</option>
            <option className={optionStyles} value="Lahore">Lahore</option>
            <option className={optionStyles} value="Islamabad">Islamabad</option>
            <option className={optionStyles} value="Karachi">Karachi</option>
          </select>
        </div>
      </div>

      <div className={dropdownWrapperStyles}>
        <h3 className="font-bold mb-2 text-gray-700 dark:text-gray-200">Color</h3>
        <div className="relative">
          <select className={dropdownStyles} value={color} onChange={handleColorChange}>
            <option className={optionStyles} value="">Select Color</option>
            <option className={optionStyles} value="Black">Black</option>
            <option className={optionStyles} value="Blue">Blue</option>
            <option className={optionStyles} value="Silver">Silver</option>
          </select>
        </div>
      </div>

      <div className={dropdownWrapperStyles}>
        <h3 className="font-bold mb-2 text-gray-700 dark:text-gray-200">Exchange</h3>
        <div className="relative">
          <select className={dropdownStyles} value={exchange} onChange={handleExchangeChange}>
            <option className={optionStyles} value="">Select Exchange</option>
            <option className={optionStyles} value="Blue">New</option>
            <option className={optionStyles} value="Silver">Used</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-700 dark:text-gray-200">Price Range</h3>
        <div className="relative mb-6">
          <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
          <input
            id="labels-range-input"
            type="range"
            value={priceRange}
            min="10000"
            max="150000"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
            onChange={handlePriceChange}
          />
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
            <span>(Rs10000)</span>
            <span>{priceRange}</span>
            <span>(Rs150000)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

