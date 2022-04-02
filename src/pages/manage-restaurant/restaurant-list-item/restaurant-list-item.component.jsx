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
      <div>

        <div
          className="restaurant-list-item"
          onClick={() =>
            this.props.navigate(`/manage-restaurant/${restaurantId}`)
          }
        >
          <div className="imgdiv">
            <img src="add_source_here" alt="Image goes here" />
          </div>
          <div className="desc">
            Item {restaurantId}
          </div>

        </div>

        <div>
          <button className="delete_button">Delete</button>
        </div>

      </div>
    );
  }
}

export default withRouter(RestaurantListItem);
