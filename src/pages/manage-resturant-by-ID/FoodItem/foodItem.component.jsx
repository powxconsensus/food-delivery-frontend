import React from "react";
import "./foodItem.style.scss";

class FoodItem extends React.Component {
  constructor() {
    super();
    this.state = {
      toExtend: false,
    };
  }
  render() {
    const { foodItemId } = this.props;
    const { toExtend } = this.state;
    return (
      <div
        className="food-item"
        onClick={() => this.setState({ toExtend: !toExtend })}
      >
        Food item{foodItemId}
        {toExtend ? <div className="extend-this-edit-option">Edit</div> : null}
      </div>
    );
  }
}

export default FoodItem;
