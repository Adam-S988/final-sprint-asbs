import React from "react";
import Main1 from "../Images/Main1.jpg";
import Main2 from "../Images/Main2.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="MainContainer">
      <div
        className="MainBox"
        style={{
          backgroundImage: `url(${Main1})`,
        }}
      >
        <Link to="/productlist" className="innerBox">
          <p>Shop Home Goods</p>
        </Link>
      </div>
      <div
        className="MainBox"
        style={{
          backgroundImage: `url(${Main2})`,
        }}
      >
        <div className="innerBox">
          <p>Subscribe to our Newsletter for 40% off your first order!</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
