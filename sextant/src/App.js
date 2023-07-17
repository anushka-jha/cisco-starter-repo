import React from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="Exhibit 1"></Exhibit>
      <Exhibit name="Exhibit 2"></Exhibit>
      <Exhibit name="Exhibit 3"></Exhibit>
    </div>
  );
}

export default App;
