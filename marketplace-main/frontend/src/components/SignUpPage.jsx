import React from 'react';

const SignUpPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex ">
                <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100 p-10 ">
                    <img src="//" alt="PhoneKart Logo" className="w-24 h-24" />
                    <h1 className="text-3xl font-bold mt-4 text-blue-600">PhoneKart</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-1/2 p-10">
                    <h2 className="text-2xl font-bold mb-6 text-blue-800">Sign Up</h2>
                    <form className="w-full">
                        <div className="mb-4">
                            <input type="text" placeholder="Enter First Name" className="placeholder-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1" />
                        </div>
                        <div className="mb-4">
                            <input type="text" placeholder="Enter Last Name" className="placeholder-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1" />
                        </div>
                        <div className="mb-4">
                            <input type="text" placeholder="xxxxxxxxxxx" className="placeholder-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="Email" className="placeholder-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1" />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password" className="placeholder-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1" />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Confirm Password" className="placeholder-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Sign Up</button>
                    </form>
                    <p className="mt-4 text-gray-600">Already have an Account? <a href="#" className="text-blue-500">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
