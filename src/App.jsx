import React from "react";
import "./App.css";
import { Search, CurrentWeather } from "./components/components";

function App() {
  function handleOnSearchChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="app__container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
