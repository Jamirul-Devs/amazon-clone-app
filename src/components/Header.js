import React from "react";
import Image from "next/legacy/image";
import { SearchIcon, ShoppingCartIcon,LocationMarkerIcon } from "@heroicons/react/outline";
function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center bg-amazon_blue flex-grow py-2">
        {/* Brand logo Widget */}
        <div className="flex items-center flex-grow sm:flex-grow-0  ">
          <Image
            src="/images/amazon_logo.png"
            height={33}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Deliver locationt widget */}
        <div className="hidden text-white lg:flex mx-3 ">
          <LocationMarkerIcon className="h-6 px-1 mt-2 font-bold"/>
          <div className="">
            <span className="text-xs text-gray-300">Deliver to Jamirul</span>
            <div className="flex text-sm font-bold -mt-2 ">
            <p className="mr-2">Debipur</p>
            <span>742224</span>
            </div>
          </div>
        </div>
        {/* Search widget */}
        <div className="hidden md:flex items-center h-11 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            type="text"
            placeholder="Search Amazon"
            className="p-2 h-full w-7 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-14 p-4 " />
        </div>
        {/* Right side widgets*/}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap className=">
          <div className="link">
            <p> <span className="font-bold"> Hello</span> , Jamiru Islam</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative flex link ">
            <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
