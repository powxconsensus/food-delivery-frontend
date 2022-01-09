import React from "react";
import MemberCard from "../../component/memberCard/memberCard.component";
import "./member.style.scss";
import axios from "axios";
import { Helmet } from "react-helmet";

class Member extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    axios({ url: "http://localhost:1337/members", method: "GET" })
      .then((response) => {
        this.setState({ user: response.data.DB });
      })
      .catch((err) => console.log(err.message));
  }
  render() {
    return (
      <>
        <Helmet>
          <title>{"Members"}</title>
        </Helmet>
        <div className="member-page">
          <div className="heading">
            <h3>Our Team Members</h3>
          </div>
          <div className="members">
            {this.state.user.map((user) => (
              <MemberCard {...user} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default Member;
