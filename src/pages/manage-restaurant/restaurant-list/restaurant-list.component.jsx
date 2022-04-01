import React from "react";
import "./restaurant-list.style.scss";
import RestaurantListItem from "../restaurant-list-item/restaurant-list-item.component";
class RestaurantList extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredRestaurant: [1, 2, 3],
    };
  }
  render() {
    const { filteredRestaurant } = this.state;
    return (
      <div className="restaurant-list">
        <div className="filter-restaurant-by-status">
          <div className="filter-button">Pending</div>
          <div className="filter-button">Accepted</div>
          <div className="filter-button">Rejected</div>
        </div>
        <div className="all-filtered-restaurant">
          {filteredRestaurant.map((item, idx) => (
            <RestaurantListItem restaurantId={idx} />
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantList;
