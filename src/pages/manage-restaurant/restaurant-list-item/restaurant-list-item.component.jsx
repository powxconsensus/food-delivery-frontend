import React from "react";
import { withRouter } from "../../../withRouter";
import "./restaurant-list-item.style.scss";

class RestaurantListItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { restaurantId } = this.props;
    return (
      <div
        className="restaurant-list-item"
        onClick={() =>
          this.props.navigate(`/manage-restaurant/${restaurantId}`)
        }
      >
        Item {restaurantId}
      </div>
    );
  }
}

export default withRouter(RestaurantListItem);
