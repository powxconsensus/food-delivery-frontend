import React from "react";
import DisplayCard from "../../component/display-card/display-card.component";
import "./home-page.style.scss";
class HomePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="home-page">
        <div className="recommended-restaurant">Recommended Restaurants</div>
        <div className="list-out-items">
          <DisplayCard restaurantName="Bunty" />
          <DisplayCard restaurantName="Bunty" />
          <DisplayCard restaurantName="Bunty" />
          <DisplayCard restaurantName="Bunty" />
        </div>
      </div>
    );
  }
}

export default HomePage;
