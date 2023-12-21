import { useEffect, useRef, useState } from "react";
import { handleLeftScroll, handleRightScroll } from "../utils";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getRestaurantDetails } from "../apiCalls";

export const ProductCard = ({ restaurantData }) => {
  const scrollContainer = useRef();
  const [path, setPath] = useState("sweegy.com");
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="p-5 text-xl sm:text-2xl font-bold ">
          Top restaurant chains in Rajkot
        </p>
        <div>
          <button
            className={`text-lg  bg-gray-200 p-2 rounded-[50%] mx-1 hidden md:inline-block`}
            onClick={() => handleLeftScroll(scrollContainer)}
            title="Click here to move left"
          >
            <FaArrowLeftLong />
          </button>
          <button
            className={`text-lg bg-gray-200 p-2 rounded-[50%] mx-1 hidden md:inline-block`}
            onClick={() => handleRightScroll(scrollContainer)}
            title="Click here to move Right"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div
        className="flex w-full p-5 overflow-auto  scrollbar-none scroll-smooth flex-shrink-0 gap-2"
        ref={scrollContainer}
      >
        {restaurantData?.map(({ info }) => (
          <div
            key={info.id}
            className=" w-[180px]  md:w-[240px]   shrink-0  cursor-pointer hover:scale-95 transition-all duration-200"
          >
            <div
              target="_blank"
              onClick={async () => {
                const apiData = await getRestaurantDetails(info.id);
                const city = apiData.city;
                const restaurant = apiData.restaurant;
                const swiggyURL = `https://www.swiggy.com/restaurants/${restaurant}-${city}-${info.id}`;
                window.open(swiggyURL, "_blank");
              }}
            >
              <div className="relative">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
                  alt={info.name}
                  className="image-resp h-[140px] md:h-[170px] rounded-xl transition-all duration-200"
                />
                <p className="fadeww"></p>
                <p className="absolute bottom-0 px-2 rounded-md font-bold text-xl text-white py-0.5 w-full">
                  {info.costForTwo}
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 font-semibold">
              <p>⭐ {info.avgRating} </p> <p>- {info.sla.deliveryTime} Mins</p>
            </span>
            <p className="line-clamp-1 font-semibold text-[17px]">
              {info.name}
            </p>
            <p className=" text-gray-500">{info.areaName}</p>
            <p className="line-clamp-1 text-gray-500">
              {info.cuisines.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
