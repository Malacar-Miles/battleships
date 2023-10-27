import "./vehicle-card.scss";
import { type Vehicle } from "../../utils/types";
import { romanize } from "../../utils/helper-functions";

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const vehicleCardStyle = {
    backgroundImage: `url("${vehicle.nation?.icons?.large}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <article className="vehicle-card" style={vehicleCardStyle}>
      <img className="vehicle-icon" alt="" src={vehicle.icons?.medium} />
      <div className="type-and-level">
        <img
          className="vehicle-type-icon"
          alt={vehicle.type?.name || ""}
          src={vehicle.type?.icons?.default}
        />
        <span className="vehicle-level">{romanize(vehicle.level)}</span>
      </div>
      <h3 className="vehicle-title">{vehicle.title}</h3>
    </article>
  );
};

export default VehicleCard;
