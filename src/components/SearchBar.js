import { useState } from "react";
import { handleSearch } from "../utils.js";

const SearchBar = ({ setRestaurantData }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="w-[80%] m-auto justify-center flex border border-black">
      <input
        type="text"
        className="ms-5 my-2 w-full outline-none  py-1 placeholder:font-bold"
        placeholder="Search for Food"
        value={searchInput}
        onChange={(e) => {
          const userInput = e.target.value;
          setSearchInput(userInput);
          const filteredData = handleSearch(userInput, []);
          setRestaurantData(filteredData);
        }}
      />
      <button
        className="mx-2 p-1 rounded"
        onClick={() => {
          const newData = handleSearch(searchInput, []);
          setRestaurantData(newData);
        }}
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
