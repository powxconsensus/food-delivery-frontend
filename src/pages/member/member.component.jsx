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
          name: "Jainendra Prakash",
          rollNo: "S20190010068",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
          linkedin:"https://www.linkedin.com/in/jainendra-prakash-994b77197/",
          instagram:"https://www.instagram.com/",
        },
        {
          name: "Ashar Siddiui",
          rollNo: "S20190010012",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
          linkedin:"https://www.linkedin.com/in/jainendra-prakash-994b77197/",
          instagram:"https://www.instagram.com/",
        },
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
          linkedin:"https://www.linkedin.com/in/jainendra-prakash-994b77197/",
          instagram:"https://www.instagram.com/",
        },
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
          linkedin:"https://www.linkedin.com/in/jainendra-prakash-994b77197/",
          instagram:"https://www.instagram.com/",
        },
        {
          name: "Priyanshu Mishra",
          rollNo: "S20190010145",
          title: "CFO & Co-Founder",
          image: "https://bit.ly/3qXRzrC",
          linkedin:"https://www.linkedin.com/in/jainendra-prakash-994b77197/",
          instagram:"https://www.instagram.com/",
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
