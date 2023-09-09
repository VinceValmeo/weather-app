import React from "react";
import Search from "./components/Search/Search";
import "./App.css";

function App() {
  function handleOnSearchChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="app__container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
