import React from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import AddressRequest from "./AddressRequest";
import Pylon from "./Pylon";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="Public IPv4 Address">
        <AddressRequest url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <AddressRequest url="https://api64.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Pylon Packet Latency">
        <Pylon />
      </Exhibit>
    </div>
  );
}

export default App;
