import React from "react";
import { connect } from "react-redux";
import { withRouter } from "../../withRouter";
import Order from "./order/order.component";
import "./restaurant.style.scss";
import Review from "./review/review.component";

class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      isOrder: true,
      isReview: false,
      restaurant: null,
      notFound: false,
    };
  }
  componentDidMount() {
    const res = this.props.restaurant.map((res) => {
      if (res.id == this.props.params.id) return res;
    });
    if (res.length == 0) {
      return this.setState({ notFound: true });
    }
    this.setState({ restaurant: res[0] });
  }
  render() {
    console.log(this.props.restaurant);
    if (this.state.notFound)
      return <div>404, no restaurant found with given id</div>;
    if (!this.state.restaurant) return <div>Loading...</div>;
    const { isOrder, isReview } = this.state;
    return (
      <div className="restaturant-page">
        <div className="res-images">
          <img
            className="res-image-item"
            src="https://bit.ly/31PtRoE"
            alt="images not found"
          />
          <div className="res-details">
            <div className="res-name"> New Heaven</div>
            <div className="rate-res">3*</div>
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
          <Review review={this.state.restaurant.review} />
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
