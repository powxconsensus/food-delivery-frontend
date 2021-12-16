import React from "react";
import { connect } from "react-redux";
import CartItem from "./../../component/cart-item/cart-item.component";
import "./cart.style.scss";

class Cart extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="cart-page">
        <div className="name-row">Cart</div>
        <hr />
        {this.props.cartItems.length ? (
          <div className="cart-items-pages">
            {this.props.cartItems.map((item) => (
              <>
                <CartItem
                  item={item}
                  itemHeight="200px"
                  itemImageWidth="200px"
                  textFontSize="36px"
                />
                <hr />
              </>
            ))}
            <div className="checkout-btn">
              <div className="total-cost">
                Total cost:{" "}
                {this.props.cartItems.reduce(
                  (prev, item) => prev + item.price * item.quantity,
                  0
                )}{" "}
                Rs
              </div>
              <div className="ch">CheckOut</div>
            </div>
          </div>
        ) : (
          <div className="empty-cart">Your cart is empty!</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    cartItems: state.cart.cartItems,
  };
};
export default connect(mapStateToProps)(Cart);
