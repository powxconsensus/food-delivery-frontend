import React from "react";
import MemberCard from "../../component/memberCard/memberCard.component";
import "./member.style.scss";
import { Helmet } from "react-helmet";

class Member extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
        },
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
        },
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
        },
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
        },
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
        },
      ],
    };
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
