import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MindProductSkeleton = () => {
  return (
    <div>
      <Skeleton height={100} width={150} />
      <Skeleton />
    </div>
  );
};

export default MindProductSkeleton;
