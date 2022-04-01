import React from "react";
import { withRouter } from "../../withRouter";
import "./manage-restaurant.style.scss";
import RestaurantList from "./restaurant-list/restaurant-list.component";

class ManageRestaurant extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="manage-restaurant-page">
        Manage your restaurants
        <RestaurantList />
        <div
          className="restaurant-application-button"
          onClick={() => this.props.navigate("/restaurant-application")}
        >
          Apply for new Restaurant
        </div>
      </div>
    );
  }
}

export default withRouter(ManageRestaurant);
