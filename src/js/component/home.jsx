import React from "react";

//include images into your bundle
import jumbotron from "./jumbotron.jsx";
import card from "./card.jsx";
import navbar from "./navbar.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <div>{navbar()}</div>
      <div className="container">
        <div>{jumbotron()}</div>
      </div>
    </div>
  );
};

export default Home;
