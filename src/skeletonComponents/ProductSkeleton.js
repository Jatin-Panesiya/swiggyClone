import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div>
      <Skeleton height={150} width={300} />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default ProductSkeleton;
