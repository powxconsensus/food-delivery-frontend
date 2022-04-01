import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cart/cart.actions";
import { toggleSignInWindow } from "../../../redux/toggle/toggle.actions";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./order.style.scss";

// it renders the food dishes from the db.json file which uses a mick json API and 
// it also caontains the AiFillStar function to get the restaurant star reviews

class Order extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { user, toggleSignInWindow } = this.props;
    return (
      <div className="order-list">
        {this.props.order.map((order) => (
          <>
            <div className="dish-item">
              <div className="dish-image">
                <img src={order.image} alt="" />
              </div>
              <div className="dish-details">
                <div className="name-rating">
                  <div className="dish-name">{order.name}</div>
                  <div className="dish-rating">
                    {[...Array(parseInt(order.rating))].map((el, idx) => (
                      <span className="filled">
                        <AiFillStar />
                      </span>
                    ))}
                    {[...Array(5 - parseInt(order.rating))].map((el, idx) => (
                      <span className="empty">
                        <AiOutlineStar />
                      </span>
                    ))}
                  </div>
                  <div className="dish-cost">
                    {order.price}
                    {" Rs"}
                  </div>
                </div>
                <div className="add-to-cart">
                  <div
                    onClick={() => {
                      if (user) this.props.addToCart(order);
                      else {
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                        toggleSignInWindow(true);
                      }
                    }}
                    style={{
                      opacity: `${user ? 1 : 0.8}`,
                    }}
                  >
                    Add +
                  </div>
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
    toggleSignInWindow: (isOpen) => dispatch(toggleSignInWindow(isOpen)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
