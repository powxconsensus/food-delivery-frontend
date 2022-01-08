import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "../../withRouter";
import CartItem from "./../../component/cart-item/cart-item.component";
import "./cart.style.scss";

class Cart extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{"Cart"}</title>
        </Helmet>
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
                    isItCartPage="true"
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
                <div
                  className="ch"
                  onClick={() => this.props.navigate("/checkout")}
                >
                  CheckOut
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-cart">Your cart is empty!</div>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    cartItems: state.cart.cartItems,
  };
};

export default withRouter(connect(mapStateToProps)(Cart));
