import React from "react";
import "./member.style.scss";
class Member extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="member-page">
        <div className="members">Members</div>
        <div className="member-name">JP</div>
      </div>
    );
  }
}
export default Member;
