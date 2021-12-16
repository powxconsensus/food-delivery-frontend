import "./display-card.style.scss";

const DisplayCard = ({ restaurantName }) => {
  return (
    <div className="display-card">
      <div
        className="display-card-images"
        style={{
          backgroundImage: `url("https://bit.ly/31PtRoE")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <hr />
      <div className="card-display-name">{restaurantName}</div>
    </div>
  );
};

export default DisplayCard;
