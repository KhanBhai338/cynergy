import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header1() {
  return (
    <div className="w-[100%] py-3 bg-gray-50 px-2 sm:px-[5%] ">
      <div className="flex justify-between items-center w-[100%]">
        <div className="hidden lg:flex">
          <ul className="flex items-center whitespace-nowrap gap-7 sm:text-[13px]">
            <li className="cursor-pointer text-[#E84C3D]">Home</li>
            <select className="cursor-pointer hover:text-[#E84C3D] outline-none">
              <option>Services</option>
              <option>Services</option>
            </select>
            <li className="cursor-pointer hover:text-[#E84C3D]">Our process</li>
            <li className="cursor-pointer hover:text-[#E84C3D]">portfolio</li>
          </ul>
        </div>
        <div className="w-[120px] lg:-ml-10">
          <img src="images/image 17.png" className="max-w-full" />
        </div>
        <div className="flex gap-2 justify-end">
          <button className="bg-[#E84C3D] rounded-full text-white px-2 lg:py-2 text-[10px] sm:px-6">
            +1 310 388 6435
          </button>
          <div className="size-8 md:size-12 rounded-full bg-[#2C3E52] flex justify-center items-center">
            <img src="images/Vector.png" className="size-5" />
          </div>
          <div className="flex justify-center items-center lg:hidden">
          <GiHamburgerMenu size="20"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
