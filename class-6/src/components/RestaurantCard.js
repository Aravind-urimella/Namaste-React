import { IMG_CDN_URL } from "../config";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RestaurantCard = ({
  name,
  cuisines,
  area,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <>
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")} </h5>
        <h5>{area}</h5>
        <span>
          <h6
            style={
              avgRating < 4
                ? { backgroundColor: "Red", color: "white" }
                : avgRating === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white", backgroundColor: "green" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h6>
          <h6>•</h6>
          <h6>{lastMileTravelString}</h6>
          <h6>•</h6>
          <h6>{costForTwoString}</h6>
        </span>
      </div>

    
    </>
  );
};

export default RestaurantCard;
