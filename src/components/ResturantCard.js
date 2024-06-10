import { LOGO_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { cloudinaryImageId, costForTwo, name, avgRating, cuisines } =
    props.obj;
  return (
    <div className="res-card">
      <img
        alt="food-logo"
        className="res-food-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{`Price:${costForTwo}`}</h3>
      <h3 style={{ wordWrap: "break-word" }}>{` ${cuisines.join(",")}`}</h3>
      <h3>{`Rating: ${avgRating}`}</h3>
    </div>
  );
};

export default ResturantCard;
