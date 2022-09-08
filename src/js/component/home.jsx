import React from "react";

//include images into your bundle
import jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import navbar from "./navbar.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <div>{navbar()}</div>
      <div className="container">
        <div>{jumbotron()}</div>
        <div className="row">
          <div class="col-3">
            <Card url="https://picsum.photos/200/300/?blur=2" />
          </div>
          <div class="col-3">
            <Card url="https://picsum.photos/200/300/?blur=4" />
          </div>
          <div class="col-3">
            <Card url="https://picsum.photos/200/300/?blur=3" />
          </div>
          <div class="col-3">
            <Card url="https://picsum.photos/200/300/?blur=1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




/* export class Home extends React.Component {
render() {
  return (
  <div className="container">
  <Card
  imageURL="http://via.placeholder.com/500x325"
  title="Card title"
  cardDescription="Aqui va el texto"
  buttonURL="#"
  buttonLabel="Button Label"
  />
  </div>
  );
  }
  }
  */