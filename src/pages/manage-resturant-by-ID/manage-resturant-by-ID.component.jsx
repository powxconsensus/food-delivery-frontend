import React from "react";
import "./manage-resturant-by-ID.style.scss";
import FoodItem from "./FoodItem/foodItem.component";

class ManageRestaurantById extends React.Component {
  constructor() {
    super();
    this.state = {
      foodItemList: ["1", "2"],
    };
  }
  render() {
    const { foodItemList } = this.state;
    return (
      <div className="manage-restaurant-ById">
        <div className="describe-restaurant-data">describe-restaurant-data</div>
        <div className="food-item-list">
          <div className="food-item-list-header">
            <p>Food Item List</p>
            <div className="add-food-item-btn">Add Food</div>
          </div>
          {foodItemList.map((item, idx) => (
            <FoodItem foodItemId={idx} />
          ))}
        </div>
      </div>
    );
  }
}

export default ManageRestaurantById;
