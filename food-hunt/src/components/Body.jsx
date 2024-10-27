import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const onlineStatus = useOnlineStatus();

    const fetchRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9750721&lng=77.665865&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    const getTopRestaurants = () => {
        const filterdRest = listOfRestaurant.filter(rest => rest.info.avgRating > 4.3);
        setFilteredRestaurant(filterdRest);
    }
    useEffect(
        () => {fetchRestaurants()},[]
    );

    const searchRestaurants = () => {
        const searchedRest = listOfRestaurant.filter(rest => rest.info.name.toLowerCase().includes(searchTerm));
        setFilteredRestaurant(searchedRest)
    }
    !onlineStatus && <div>You are offline. Please check your internet connection.</div> 
    return (
    listOfRestaurant.length === 0 ? <ShimmerUi /> :
      <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" value = {searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} placeholder="Search"></input>
                <button onClick={() => {searchRestaurants()}}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {getTopRestaurants()}}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link to={"restaurant/"+restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
  };
export default Body;