import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { OFFER_IMG_URL } from "../constants";
import { handleLeftScroll, handleRightScroll } from "../utils";
import { useEffect, useRef, useState } from "react";
import { getOfferData } from "../apiCalls";
import OfferSkeleton from "../skeletonComponents/OfferSkeleton";
import HeadingSkeleton from "../skeletonComponents/HeadingSkeleton";

const Offers = () => {
  const scrollContainer = useRef();
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const apiData = await getOfferData();
      setData(apiData);
      setMount(true);
    }
    fetchData();
  }, []);

  if (!mount) {
    return (
      <>
        <div className="pt-3 ">
          <HeadingSkeleton />
        </div>
        <div className="flex gap-4 my-3 overflow-auto scrollbar-none">
          <OfferSkeleton />
          <OfferSkeleton />
          <OfferSkeleton />
          <OfferSkeleton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="p-5 text-xl sm:text-2xl font-bold ">
          Best offers for you
        </p>
        <div>
          <button
            className={`text-lg  bg-gray-200 p-2 rounded-[50%] mx-1  hidden md:inline-block`}
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
        className="flex overflow-auto scrollbar-none gap-3 scroll-smooth"
        ref={scrollContainer}
      >
        {data?.info?.map((data) => {
          return (
            <div key={data.id} className="shrink-0 cursor-pointer">
              <a href={data.action.link} target="_blank">
                <img
                  src={OFFER_IMG_URL + data.imageId}
                  alt={data.entityType}
                  className="w-[200px] sm:w-[350px] md:w-[400px] lg:w-[450px] transition-all duration-300 "
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Offers;
