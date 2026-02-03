import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = props => {
  return (
    <div className="flex justify-between items-center shadow-md px-4 py-2 text-gray-900 md:justify-center md:py-3">
      <button
        type="button"
        className="md:hidden"
        onClick={() => props.setExpandSideBar(true)}>
        <GiHamburgerMenu className="text-lg" />
      </button>
      <h3 className="font-normal text-xl font-poetson-one">InI Navbar</h3>
    </div>
  );
};
