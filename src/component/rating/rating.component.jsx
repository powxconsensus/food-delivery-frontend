import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./rating.style.scss";

const DisplayRating = ({ rating }) => {
  return (
    <div className="display-rating">
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
  );
};

export default DisplayRating;
