import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../API/api";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");

  function handleChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  function loadOptions(inputValue) {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="search__container">
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;
