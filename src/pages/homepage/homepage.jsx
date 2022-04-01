import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DisplayCard from "../../component/display-card/display-card.component";
import "./home-page.style.scss";
import { Helmet } from "react-helmet";

// the home background and the color gradiant for the recommended restaurants

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      fourRes: [],
    };
  }
  setFourRes() {
    const { restaurant } = this.props;
    let n = 4;
    var result = new Array(n),
      len = restaurant.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = restaurant[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    this.setState({ fourRes: result });
  }

  render() {
    if (!this.props.restaurant || !this.props.restaurant.length)
      return (
        <>
          <Helmet>
            <title>{"Food For Foodie"}</title>
          </Helmet>
          <div className="loading">Loading...</div>
        </>
      );
    if (this.state.fourRes.length == 0) this.setFourRes();
    return (
      <>
        <Helmet>
          <title>{"Food For Foodie"}</title>
        </Helmet>
        <div className="home-page">
          <div className="recommended-restaurant">Recommended Restaurants</div>
          <div className="list-out-items">
            {this.state.fourRes.map((res) => (
              <Link to={`/restaurant/${res.id}`}>
                <DisplayCard name={res.name} image={res.images[0]} />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurant.restaurantWithItems,
  };
};
export default connect(mapStateToProps)(HomePage);
