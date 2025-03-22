import Image from 'next/image'
import React from 'react'

import logo from '../assets/images/logo.png'
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-[88px] px-[100px] py-[20px] bg-white/30 backdrop-blur-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="logo">
            <h1>
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>
            </h1>
          </div>
          <nav className="flex flex-wrap items-center">
            <ul className="flex mr-[30px]">
              <li className="pr-[32px]">
                <a href="#" className="text-[16px] font-medium">Home</a>
              </li>
              <li className="pr-[32px]">
                <a href="#" className="text-[16px] font-medium">About Us</a>
              </li>
              <li className="pr-[32px] flex">
                <a href="#" className="text-[16px] font-medium">Services</a> 
                <ChevronDown className="pl-[2.5px]" />
              </li>
              <li className="pr-[32px]">
                <a href="#" className="text-[16px] font-medium">Careers</a>
              </li>
              <li>
                <a href="#" className="text-[16px] font-medium">Contact Us</a>
              </li>
            </ul>
            {/* Buttons */}
            <div>
              <button className="px-[16px] py-[14px] text-[16px] border-2 rounded-[30px] mr-[16px]">Buy on a Fair deal</button>
              <button className="px-[16px] py-[14px] text-[16px] border-2 rounded-[30px] btn-blue">Sell on a Fair deal</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
