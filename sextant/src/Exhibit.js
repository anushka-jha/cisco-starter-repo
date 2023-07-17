import React from "react";
import "./Exhibit.css";

const Exhibit = (props) => {
  return (
    <div className="Exhibit">
      <h1 className="ExhibitHeading">{props.name}</h1>
      <div className="ExhibitContent">{props.children}</div>
    </div>
  );
};

export default Exhibit;
