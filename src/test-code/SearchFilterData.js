import React, { useState } from "react";

const SearchFilterData = () => {
  const data = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [search, setSearch] = useState("");
  const [filterValue, setFiterValue] = useState("");
  console.log(filterValue);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchData = (searchValue) => {
    const filterVal = data.filter((search) => search === searchValue);
    setFiterValue(filterVal);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder="search"
      />
      <button onClick={() => searchData(search)}>Search</button>
      <ul>
        {data.map((data1) => {
          return <li>{data1}</li>;
        })}
      </ul>
      {filterValue}
    </div>
  );
};

export default SearchFilterData;
