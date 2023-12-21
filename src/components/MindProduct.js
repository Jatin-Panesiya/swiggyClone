import { useEffect, useRef, useState } from "react";
import { MIND_PRODUCT_IMG_URL } from "../constants";
import { handleLeftScroll, handleRightScroll } from "../utils";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getMindProductUrl, getMindProducts } from "../apiCalls";
import MindProductSkeleton from "../skeletonComponents/MindProductSkeleton";
import HeadingSkeleton from "../skeletonComponents/HeadingSkeleton";

const MindProduct = () => {
  const scrollContainer = useRef();
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const apiData = await getMindProducts();
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
          <MindProductSkeleton />
          <MindProductSkeleton />
          <MindProductSkeleton />
          <MindProductSkeleton />
          <MindProductSkeleton />
          <MindProductSkeleton />
          <MindProductSkeleton />
          <MindProductSkeleton />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="p-5 text-xl sm:text-2xl font-bold ">
          What's on your mind?
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
        className="flex overflow-auto scrollbar-none transition-all duration-200 scroll-smooth"
        ref={scrollContainer}
      >
        {data?.info?.map((data, i) => {
          return (
            <div
              key={data.id}
              className="shrink-0"
              onClick={() => {
                const link = `${data.action.link}`;
                window.open(link, "_blank");
              }}
            >
              <img
                src={MIND_PRODUCT_IMG_URL + data.imageId}
                alt={data.action.text}
                className="w-[120px] transition-all duration-300 md:w-[150px]"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MindProduct;
