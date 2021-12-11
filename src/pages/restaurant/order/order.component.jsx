import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cart/cart.actions";
import "./order.style.scss";

class Order extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="order-list">
        {this.props.order.map((order) => (
          <>
            <div className="dish-item">
              <div className="dish-image">
                <img src="https://bit.ly/31PtRoE" alt="" />
              </div>
              <div className="dish-details">
                <div className="name-rating">
                  <div className="dish-name">{order.name}</div>
                  <div className="dish-rating">{order.rating} *</div>
                </div>
                <div className="add-to-cart">
                  <div onClick={() => this.props.addToCart(order)}>Add +</div>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
