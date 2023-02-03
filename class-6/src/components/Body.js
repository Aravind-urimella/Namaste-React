import React from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import Skeleton from 'react-loading-skeleton';
import { SearchShimmer} from "./Shimmer";




function filterData(searchText, restaurants){
  const filterData =  restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
   return filterData;
}

const Body = () => {
    // searchText is a local state variable
    const[allRestaurants , setAllRestaurants ]= useState([]);
  const [filteredRestaurants ,setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); // returns = [variable-name , function is update the variable]
  
  
  //empty dependency means =>once after render
  // dep arr {example} [searchText] => once after initial render + everytime after re-render (when my searchText changes) 
  useEffect(()=> {
    // API call
   
    getRestaurants();
    
  },[])
 
async function getRestaurants(){
  try{
    const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json(); //converting data into JSON object .
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

  } catch(error){
    console.log(error)
  }
 
}

console.log("render");
 
// conditional rendering 
//if restaurant  === shimmer Ui
// if restaurant has data  => actual data


 // if allRestaurants is empty don't render restaurants cards
 if (!allRestaurants) return null;



//  

  return (allRestaurants.length === 0) ? (<SearchShimmer/>,<Shimmer cards={15}/>) :(
    <React.Fragment>
   
      <div className="search-container">
         <i class="fa-solid fa-magnifying-glass"></i>
        <input
          className=" search-input"
          text="search"
          placeholder="Foodiee , let's search your Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
           
        <button className="search-btn" 
          onClick={() => {
            // need to filter data
            // upadate the state -i.e restaurants
           const data =  filterData(searchText ,allRestaurants);
            // searchText holds the input (whatever we type) and its will search data  in restaurants .and 
            // after getting data , we need to update by local state variable using setRestaurant
            setFilteredRestaurants(data);
          }
           }>
          Search
        </button>
        
      </div>
        
      
        <div className="card-items">
        
         {
        (filteredRestaurants?.length == 0) ? ( <h1 className="no-result">Foodie , I'm sorry. No Restaurant Match Your Filter..!!</h1>):
          
        (filteredRestaurants.map((restaurant) => {
          return (
            <>
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            
            </>
          );
        }))}
      </div>
     
    </React.Fragment>
  );
};

export default Body;
