import React from "react";
import { connect } from "react-redux";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./cart-item.style.scss";
import { addToCart, removeFromCart } from "../../redux/cart/cart.actions";

class CartItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { item } = this.props;
    return (
      <div className="cart-item">
        <img src="https://bit.ly/31PtRoE" alt="" className="item-image" />
        <div className="item-name">{item.name}</div>
        <div className="clear-mark"></div>
        <div className="add-remove">
          <IoMdArrowDropup onClick={() => this.props.addToCart(item)} />
          <IoMdArrowDropdown onClick={() => this.props.removeFromCart(item)} />
        </div>
        <div className="item-price">{item.price * item.quantity}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (item) => dispatch(removeFromCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
