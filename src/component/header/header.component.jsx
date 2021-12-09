import React from "react";
import { connect } from "react-redux";
import SignIn from "../signin/signin.component";
import SignUp from "../signup/signup.component";

import "./header.style.scss";
import {
  toggleSignInWindow,
  toggleSignUpWindow,
} from "./../../redux/toggle/toggle.actions";
class Header extends React.Component {
  constructor() {
    super();
  }
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
            <form>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search by dishes "
              />
            </form>
          </div>
        </div>
        <div className="extreme-right">
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSignInWindow: (isOpen) => dispatch(toggleSignInWindow(isOpen)),
    toggleSignUpWindow: (isOpen) => dispatch(toggleSignUpWindow(isOpen)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
