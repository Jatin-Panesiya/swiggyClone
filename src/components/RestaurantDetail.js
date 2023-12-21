import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails } from "../apiCalls";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getRestaurantDetails(id);
      setData(apiData);
      setMount(true);
      console.log(apiData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-around">
      {data.map(({ card }) => {
        return (
          <div key={card.info.id}>
            <p>{card.info.imageId}</p>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${card.info.imageId}`}
              alt="IMAGE"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetail;
