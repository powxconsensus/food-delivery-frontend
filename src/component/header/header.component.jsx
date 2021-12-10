import React from "react";
import { connect } from "react-redux";
import SignIn from "../signin/signin.component";
import SignUp from "../signup/signup.component";
import { store } from "./../../redux/store";
import resDB from "./../../db.json";
import { Link } from "react-router-dom";

import "./header.style.scss";
import {
  toggleSignInWindow,
  toggleSignUpWindow,
} from "./../../redux/toggle/toggle.actions";
import { setUser } from "../../redux/userReducer/user.actions";
import { setRestaurantWithItem } from "../../redux/restaurant/restaurant.actions";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedRestaurant: [],
      isSearchedDropdownOpen: false,
    };
  }
  componentDidMount() {
    this.props.setRestaurantWithItem(resDB.restaurant);
    document.addEventListener("click", (event) => {
      const className = event.target.className;
      if (
        [
          "list-out",
          "list-item",
          "res-image",
          "res-details",
          "res-name",
          "rating",
          "search-input",
          "search",
        ].includes(className)
      ) {
        return;
      }
      this.setState({ isSearchedDropdownOpen: false });
    });
  }
  handleChange = (event) => {
    const value = event.target.value;
    let tempRes = [];
    this.props.restaurantWithItems.map((res) => {
      if (res.name.includes(value)) return tempRes.push(res);
      for (let i = 0; i < res.dishes.length; i++) {
        const dish = res.dishes[i];
        if (dish.name.includes(value)) {
          tempRes.push(res);
          break;
        }
      }
    });
    this.setState({ searchedRestaurant: tempRes });
  };
  render() {
    let img = "https://bit.ly/31PtRoE";
    return (
      <div
        className="header"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="brand-name navbar-item">Food Delivery</div>
        <div className="right-side">
          <div className="search-input">
            <form autocomplete="off">
              <input
                type="text"
                id="search"
                className="search"
                name="search"
                placeholder="Search by dishes "
                onChange={this.handleChange}
                onClick={() => this.setState({ isSearchedDropdownOpen: true })}
              />
            </form>
            {this.state.isSearchedDropdownOpen ? (
              <div className="searched-data-dropdown">
                {this.state.searchedRestaurant.map((res) => (
                  <Link
                    to={`/restaurant/${res.id}`}
                    onClick={() =>
                      this.setState({ isSearchedDropdownOpen: false })
                    }
                    className="list-out"
                  >
                    <div className="list-item">
                      <div
                        className="res-image"
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                      <div className="res-details">
                        <div className="res-name">free food</div>
                        <div className="rating">3.5*</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="extreme-right">
          {!this.props.user ? (
            <>
              <div
                className="navbar-item"
                onClick={() => this.props.toggleSignInWindow(true)}
              >
                Login
              </div>
              <div
                className="navbar-item"
                onClick={() => this.props.toggleSignUpWindow(true)}
              >
                Signup
              </div>
            </>
          ) : (
            <>
              <div className="navbar-item">Cart</div>
              <div
                className="navbar-item"
                onClick={() =>
                  store.dispatch({
                    type: "USER_LOGGED_OUT",
                  })
                }
              >
                Sign Out
              </div>
            </>
          )}
        </div>
        {this.props.isSignInOpen ? <SignIn /> : null}
        {this.props.isSignUpOpen ? <SignUp /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignInOpen: state.toggle.isSignInWindowOpen,
    isSignUpOpen: state.toggle.isSignUpWindowOpen,
    user: state.user.user,
    restaurantWithItems: state.restaurant.restaurantWithItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSignInWindow: (isOpen) => dispatch(toggleSignInWindow(isOpen)),
    toggleSignUpWindow: (isOpen) => dispatch(toggleSignUpWindow(isOpen)),
    setUser: (user) => dispatch(setUser(user)),
    setRestaurantWithItem: (payload) =>
      dispatch(setRestaurantWithItem(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
