import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("hi");
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRestaurant, "bi");
    setFilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //   atid-467

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="input-search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="button-search"
          onClick={() => {
            console.log(listOfRestaurant);
            searchText != ""
              ? setFilteredResturant(() => {
                  return listOfRestaurant.filter((data) => {
                    return data?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  });
                })
              : setFilteredResturant(listOfRestaurant);
          }}
        >
          search
        </button>
      </div>
      <div className="res-containers">
        {filteredResturant?.length != 0 ? (
          filteredResturant.map((data) => {
            return <ResturantCard key={data.info.id} obj={data.info} />;
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
