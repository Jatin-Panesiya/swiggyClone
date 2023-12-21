import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import { ProductCard } from "./ProductCard";
import { getRestaurantData } from "../apiCalls";
import ProductSkeleton from "../skeletonComponents/ProductSkeleton";
import HeadingSkeleton from "../skeletonComponents/HeadingSkeleton";

export const Products = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const apiData = await getRestaurantData();
      setRestaurantData(apiData);
      setMount(true);
    }
    fetchData();
  }, []);
  console.log(restaurantData);
  if (!mount) {
    return (
      <>
        <div className="pt-3 ">
          <HeadingSkeleton />
        </div>
        <div className="flex gap-4 my-3 overflow-auto scrollbar-none">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      </>
    );
  }
  return (
    <div>
      {/* <SearchBar setRestaurantData={setRestaurantData} /> */}
      <ProductCard restaurantData={restaurantData} />
    </div>
  );
};
