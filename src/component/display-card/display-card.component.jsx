import "./display-card.style.scss";

// payment/login card ui

const DisplayCard = ({ name, image }) => {
  return (
    <div className="display-card">
      <div
        className="display-card-images"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <hr />
      <div className="card-display-name">{name}</div>
    </div>
  );
};

export default DisplayCard;
