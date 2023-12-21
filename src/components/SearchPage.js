import React, { useEffect, useState } from "react";
import Header from "./Header";
import { getCuisinesData } from "../apiCalls";
import SearchSkeleton from "../skeletonComponents/SearchSkeleton";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getCuisinesData();
      setData(apiData);
      setMount(true);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <div className="w-[60%] mx-auto">
        <div className=" flex mx-auto mt-10   border border-gray-500">
          <input
            type="text"
            className="bg-white w-full  outline-none  py-3 px-2 placeholder:text-gray-500 placeholder:font-bold placeholder:font-serif"
            placeholder="Search for restaurants and food"
          />
        </div>
        <div className="pt-5">
          <p className="pt-5 font-bold text-gray-600 text-xl px-3">
            Popular Cuisines
          </p>
          {!mount ? (
            <div className="flex gap-4 my-3 overflow-auto scrollbar-none pt-7">
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
            </div>
          ) : (
            <div className="flex overflow-auto scrollbar-none  gap-3 scroll-smooth py-5">
              {data?.map((data) => {
                return (
                  <div key={data.id} className="shrink-0">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${data.imageId}`}
                      alt={data.action.text}
                      className="w-[200px] sm:w-[350px] md:w-[400px] lg:w-[100px] transition-all duration-300"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
