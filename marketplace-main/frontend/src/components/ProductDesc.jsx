import React from 'react';

const DescriptionTable = () => {
  const descriptions = [
    { label: "Brand", value: "oppo" },
    { label: "Mobile Storage", value: "128" },
    { label: "Battery Capacity", value: "5000mAH" },
    { label: "Sim Type", value: "dual physical" },
    { label: "Ram", value: "8gb" },
    { label: "PTA Approved", value: "Pta" },
    { label: "E-Sim", value: "none" },
  ];

  return (
    <div className="flex flex-col items-center px-2 sm:px-4 py-4 sm:py-8 md:py-10 bg-gray-100 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-0">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">Description</h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white text-sm sm:text-base">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-gray-200 font-medium">Label</th>
              <th className="px-4 py-2 text-left bg-gray-200 font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            {descriptions.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-200">
                <td className="px-4 py-2 border-t border-gray-200">{item.label}</td>
                <td className="px-4 py-2 border-t border-gray-200">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DescriptionTable;
