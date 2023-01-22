import React from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants){
   const filterData =  restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
   return filterData;
}

const Body = () => {
    // searchText is a local state variable
  const [restaurants ,setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState(""); // returns = [variable - name , function is update the variable]
  return (
    <React.Fragment>
      <div className="search-container">
        <input
          className=" search-input"
          text="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
           
        <button className="search-btn" 
          onClick={() => {
            // need to filter data
            // upadate the state -i.e restaurants
           const data =  filterData(searchText , restaurants);
            // searchText holds the input (whatever we type) and its will search data  in restaurants .and 
            // after getting data , we need to update by local state variable using setRestaurant
            setRestaurants(data);
          }
           }>
          Search
        </button>
      </div>

      <div className="card-items">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Body;
