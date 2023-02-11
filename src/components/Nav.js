import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
function Nav() {
  return (
    <nav>
      {" "}
      <div className="flex item-center space-x-3 p-2 pl-2 bg-amazon_blue-light text-white text-sm ">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1 " />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's deals</p>
        <p className="link hidden lg:inline-flex ">Electronics</p>
        <p className="link hidden lg:inline-flex ">Food & Grocery</p>
        <p className="link hidden lg:inline-flex ">Prime</p>
        <p className="link hidden lg:inline-flex ">Buy Again</p>
        <p className="link hidden lg:inline-flex ">Shoper Toolkit</p>
        <p className="link hidden lg:inline-flex ">Health & Persolnal care</p>
      </div>
    </nav>
  );
}

export default Nav;
