import React from "react";
import { connect } from "react-redux";
import FoutZeroFour from "../../component/404/404.component";
import { withRouter } from "../../withRouter";
import Order from "./order/order.component";
import "./restaurant.style.scss";
import Review from "./review/review.component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      isOrder: true,
      isReview: false,
      restaurant: null,
      notFound: false,
      found: false,
      lastResId: "",
    };
  }
  componentDidMount() {
    this.setState({ lastResId: this.props.params.id });
  }
  componentDidUpdate() {
    if (this.state.lastResId != this.props.params.id) {
      if (this.state.notFound) this.setState({ notFound: false });
      if (this.state.found) this.setState({ found: false });
      const res = this.props.restaurant.find(
        (res) => res.id == this.props.params.id
      );
      if (!res) {
        return this.setState({
          notFound: true,
          lastResId: this.props.params.id,
        });
      } else {
        this.setState({
          restaurant: res,
          found: true,
          lastResId: this.props.params.id,
        });
      }
    }
  }
  setStateRestaurant = () => {
    const res = this.props.restaurant.find(
      (res) => res.id == this.props.params.id
    );
    if (!res) {
      return this.setState({ notFound: true });
    } else {
      this.setState({ restaurant: res, found: true });
    }
  };
  render() {
    if (
      !this.state.found &&
      this.props.restaurant.length &&
      !this.state.notFound
    ) {
      this.setStateRestaurant();
    }
    if (this.props.restaurant.length && this.state.notFound)
      return (
        <div className="restaurant-not-found">
          <FoutZeroFour />
        </div>
      );
    if (!this.state.restaurant) return <div>Loading...</div>;
    const { isOrder, isReview, restaurant } = this.state;
    const { name, rating, images } = restaurant;
    return (
      <div className="restaturant-page">
        <div className="res-images">
          <img
            className="res-image-item"
            src={images[0]}
            alt="images not found"
          />
          <div className="res-details">
            <div className="res-name"> {name}</div>
            <div className="res-rating">
              {[...Array(parseInt(rating))].map((el, idx) => (
                <span className="filled">
                  <AiFillStar />
                </span>
              ))}
              {[...Array(5 - parseInt(rating))].map((el, idx) => (
                <span className="empty">
                  <AiOutlineStar />
                </span>
              ))}
            </div>
          </div>
          <div className="res-address">Sricity, India</div>
        </div>
        <hr />
        <div className="navbar-list">
          <div
            className={isOrder ? "nav-item active" : "nav-item"}
            onClick={() => this.setState({ isOrder: true, isReview: false })}
          >
            Order
          </div>
          <div
            className={isReview ? "nav-item active" : "nav-item"}
            onClick={() => this.setState({ isOrder: false, isReview: true })}
          >
            Review
          </div>
        </div>
        <hr />
        {this.state.isOrder ? (
          <Order order={this.state.restaurant.dishes} />
        ) : null}
        {this.state.isReview ? (
          <Review restaurant_id={this.state.restaurant.id} />
        ) : null}
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    restaurant: state.restaurant.restaurantWithItems,
  };
};
export default connect(mapPropsToState)(withRouter(Restaurant));
