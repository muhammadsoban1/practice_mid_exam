import React from 'react';
import userIcon from '../assets/logos/log-out.png';
import { useState } from 'react';
import Modal from 'react-modal';
import SignUpPage from './SignUpPage';


Modal.setAppElement('#root');

const TopbarBanner = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <main className="main 3xl:mx-custom-margin">
        <div className="border-b flex-wrap container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center px-0 gap-2 flex-grow justify-center lg:justify-start">
            <span>
              PhoneKart- Bridging Tech Fans and Top Retailers{' '}
              <a className="text-bluish underline hover:text-blue-700 hover:underline" href="">
                Know more
              </a>
            </span>
          </div>
          <div className="flex items-center justify-end pe-0 gap-3  lg:flex">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="flex items-center w-5 h-5">
                <img
                  alt="user"
                  loading="lazy"
                  width="18"
                  height="17"
                  decoding="async"
                  className="text-transparent w-full h-full"
                  src={userIcon}
                />
              </div>

              <span className="hidden sm:inline" onClick={() => setVisible(true)}>Sign In</span>

            </div>
          </div>
        </div>
      </main>


      <Modal isOpen={visible} onRequestClose={() => setVisible(false)} className="bg-none">
        <div id="login-popup" tabIndex="-1"
          className="bg-black/60 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto flex">

            <div>
              <img src='' />
            </div>

            <div className="relative bg-white rounded-lg shadow">
              <button type="button " onClick={() => setVisible(false)}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                  aria-hidden="true" class="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    cliprule="evenodd"></path>
                </svg>
                <span className="sr-only">Close popup</span>
              </button>

              <div className="p-10">
                <h3 className="text-2xl mb-0.5 font-medium"></h3>
                <p className="mb-4 text-sm font-normal text-gray-800"></p>

                <div className="text-center">
                  <p className="mb-10 text-2xl font-semibold leading-5 text-slate-900">
                    Already a PhoneKart User?
                  </p>

                </div>





                <form class="w-full">
                  <label htmlFor="email" class="sr-only">Email address</label>
                  <input name="email" type="email" autoComplete="email" required=""
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Email Address" ></input>
                  <label htmlFor="password" class="sr-only">Password</label>
                  <input name="password" type="password" autoComplete="current-password" required=""
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Password" ></input>
                  <p className="mb-3 mt-2 text-sm text-gray-500">
                    <a href="/forgot-password" class="text-blue-800 hover:text-blue-600">Reset your password?</a>
                  </p>
                  <button type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                    Continue
                  </button>
                </form>

                <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                  <div className="h-px w-full bg-slate-200"></div>
                  OR
                  <div className="h-px w-full bg-slate-200"></div>
                </div>


                <div className="mt-2 flex flex-col gap-2">


                  <button
                    className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                      src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                      className="h-[18px] w-[18px] " />Continue with
                    Google
                  </button>
               </div>

                <div class="mt-6 text-center text-sm text-slate-600">
                  Don't have an account?
                  <a href="http://localhost:5173/signup#" class="font-medium text-[#4285f4]">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Modal>
    </>

  );
};

export default TopbarBanner;
