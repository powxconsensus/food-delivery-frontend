import { Link } from "react-router-dom";

import "./memberCard.style.scss";
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";
const MemberCard = ({ name, image, rollNo, title }) => {
  return (
    <div className="member-card">
      <div
        className="member-image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="member-details">{name}</div>
      <div className="member-details">{rollNo}</div>
      <div className="member-details">{title}</div>
      <div className="contact-us">
        <Link to="#" className="contact-item">
          <BsTwitter />
        </Link>
        <Link to="#" className="contact-item">
          <BsInstagram />
        </Link>
        <Link to="#" className="contact-item">
          <BsLinkedin />
        </Link>
        <Link to="#" className="contact-item">
          <BsFacebook />
        </Link>
      </div>
    </div>
  );
};
export default MemberCard;
