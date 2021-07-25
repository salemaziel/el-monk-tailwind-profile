import React from 'react';

import Monk from "../../images/monk.jpeg"
import Pow from "../../images/el-monk-pow-ep.jpeg"

import Flip from "react-reveal"

import {
  FaSpotify, FaSoundcloud,
} from "react-icons/fa"

const S4Body = () => (
  <>
    <div className="py-4 mt-4 text-center border-t sm:mt-10 sm:py-10">
      {/*<div className="flex flex-wrap justify-center">*/}
        <div className="justify-center w-full px-4`">
         {/*} <p className="mb-4 text-lg leading-relaxed text-gray-800">
            I am a web developer, digital consultant, and small business owner currently living in
            San Diego, CA.
            <br />
            <br />
            My interests range from web development to hiking. I am also interested in running,
            politics, and technology.
</p> */}
          {/*<a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>*/}

<div>
  {/* Section 1 */}
  {/*<section className="pt-16 pb-20 sm:pt-24 sm:pb-32 bg-gray-50">
    <div className="items-center max-w-6xl px-12 mx-auto sm:px-20 md:px-5">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
          <div className="w-full max-w-md xl:max-w-xl">
            <h2 className="relative mb-6 text-3xl font-semibold leading-tight tracking-tight xl:font-bold lg:text-6xl xl:text-7xl">
              Beautiful designs that help you look pretty.
            </h2>
            <ul>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Automated Workflows</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Drag'n Drop Interface</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Unlimited API Calls</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">24/7 Customer Support</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">99.9% Uptime</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Analytics Dashboard</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Fully Customizable</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Seamless Integrations</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">So Much More!</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-full px-3 mb-12 lg:-ml-20 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
          <img className="absolute top-0 right-0 z-10 hidden mx-auto -mt-32 rounded-lg shadow-2xl opacity-100 xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src="https://cdn.devdojo.com/images/february2021/sky-bg.jpg" />
          <img className="relative z-20 w-full mx-auto mt-3 rounded-lg shadow-2xl sm:max-w-none lg:-ml-10 lg:max-w-sm" src="https://cdn.devdojo.com/images/february2021/tesla-img.jpg" alt="feature image" />
          <img className="absolute bottom-0 right-0 z-10 hidden mx-auto -mb-48 rounded-lg shadow-2xl xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src="https://cdn.devdojo.com/images/february2021/bg-colorful1.jpg" />
        </div>
      </div>
    </div>
                    </section>*/}
  {/* Section 2 */}
 {/*} <section className="bg-white">
    <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
      <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <a href="#_" className="block overflow-hidden group rounded-xl">
            <img src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&h=1700&q=80" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt=""/>
          </a>
          <div className="relative mt-5">
            <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
            <a href="#" className="block mb-3 hover:underline">
              <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Seeking Adventure</h2>
            </a>
            <p className="mb-4 text-gray-700">Seek out adventure and live a life that others envy. You only get one chance to reach for the sky. Explore, discover, and seek out adventure.</p>
            <a href="#_" className="font-medium underline">Read More</a>
          </div>
        </div>
        <div className="relative">
          <a href="#_" className="block overflow-hidden group rounded-xl">
            <img src="https://images.unsplash.com/photo-1577095972574-2fbdcf60c8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&h=1700&q=80" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt=""/>
          </a>
          <div className="relative mt-5">
            <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
            <a href="#" className="block mb-3 hover:underline">
              <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Explore the deep</h2>
            </a>
            <p className="mb-4 text-gray-700">The massive deep blue is worth exploring at least one time in your life. It is full of excitement and mystery. Go out and explore the deep.</p>
            <a href="#_" className="font-medium underline">Read More</a>
          </div>
        </div>
        <div className="relative">
          <a href="#_" className="block overflow-hidden group rounded-xl">
            <img src="https://images.unsplash.com/photo-1462651567147-aa679fd1cfaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&h=1700&q=80" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt=""/>
          </a>
          <div className="relative mt-5">
            <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
            <a href="#" className="block mb-3 hover:underline">
              <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Find Your Roots</h2>
            </a>
            <p className="mb-4 text-gray-700">Make sure to stay-grounded to your roots, but it's also important to understand that you are worth the success you have achieved.</p>
            <a href="#_" className="font-medium underline">Read More</a>
          </div>
        </div>
        <div className="relative">
          <a href="#_" className="block overflow-hidden group rounded-xl">
            <img src="https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt=""/>
          </a>
          <div className="relative mt-5">
            <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
            <a href="#" className="block mb-3 hover:underline">
              <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Inspire Greatness</h2>
            </a>
            <p className="mb-4 text-gray-700">Find others who seek out greatness and surround yourself with positive and successful people. This is key to inspiring greatness for others.</p>
            <a href="#_" className="font-medium underline">Read More</a>
          </div>
        </div>
        <div className="relative">
          <a href="#_" className="block overflow-hidden group rounded-xl">
            <img src="https://images.unsplash.com/photo-1530262929451-caf6b99b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt=""/>
          </a>
          <div className="relative mt-5">
            <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
            <a href="#" className="block mb-3 hover:underline">
              <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Royalty in the Sky</h2>
            </a>
            <p className="mb-4 text-gray-700">Reach for the stars and find greatness in yourself. Royalty is not in the eyes of others, rather it is in the eye of the be-holder.</p>
            <a href="#_" className="font-medium underline">Read More</a>
          </div>
        </div>
        <div className="relative">
          <a href="#_" className="block overflow-hidden group rounded-xl">
            <img src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt=""/>
          </a>
          <div className="relative mt-5">
            <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
            <a href="#" className="block mb-3 hover:underline">
              <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Enjoy Your Life</h2>
            </a>
            <p className="mb-4 text-gray-700">Be sure to enjoy the life that you have worked so hard to create. There's no point in reaching greatness if you do not celebrate.</p>
            <a href="#_" className="font-medium underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
                  </section>*/}


<section className="px-4 py-8">
  <div className="flex flex-wrap -mx-4 -mb-8">
    <Flip left cascade>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow} alt=""/>
    </div>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow} alt=""/>
    </div>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow} alt=""/>
    </div>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow} alt=""/>
    </div>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow}  alt=""/>
    </div>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow} alt=""/>
    </div>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow}  alt=""/>
    </div>
    <div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
      <img className="rounded shadow" src={Pow} alt=""/>
    </div>
    </Flip>
  </div>
</section>




















                  
</div>

















        </div>
      {/*</div>*/}
    </div>
  </>
);

export default S4Body;
