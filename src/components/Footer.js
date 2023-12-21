import { useEffect, useState } from "react";
import { FaCopyright } from "react-icons/fa6";
import { getRestaurantData } from "../apiCalls";

const Footer = () => {
  return (
    <div className="bg-[#121212] px-[8%] py-5">
      <div>
        <div className="flex items-center text-white gap-3">
          <img
            src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
            alt="LOGO"
            className="w-14 filter grayscale"
          />
          <p className="text-2xl font-bold">Food Villa</p>
        </div>
        <p className="text-gray-400 flex items-center gap-2 ps-3">
          <FaCopyright /> 2023 J.P. Pvt. Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
