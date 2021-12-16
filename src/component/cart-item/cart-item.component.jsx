import React from "react";
import { connect } from "react-redux";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "./cart-item.style.scss";
import {
  addToCart,
  removeFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

class CartItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { item, itemHeight, itemImageWidth, textFontSize } = this.props;
    return (
      <div className="cart-item" style={{ height: `${itemHeight}` }}>
        <img
          src="https://bit.ly/31PtRoE"
          alt=""
          className="item-image"
          style={{ width: `${itemImageWidth}` }}
        />
        <div className="item-name" style={{ fontSize: `${textFontSize}` }}>
          {item.name}
        </div>
        <div className="right-side-cart-items">
          <div
            className="clear-mark"
            onClick={() => this.props.clearItemFromCart(item)}
          >
            <IoClose />
          </div>
          <div className="add-remove">
            <IoMdArrowDropup
              style={{ fontSize: `${textFontSize}` }}
              onClick={() => this.props.addToCart(item)}
            />
            <IoMdArrowDropdown
              style={{ fontSize: `${textFontSize}` }}
              onClick={() => this.props.removeFromCart(item)}
            />
          </div>
          <div className="item-price" style={{ fontSize: `${textFontSize}` }}>
            {item.price * item.quantity} Rs
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
