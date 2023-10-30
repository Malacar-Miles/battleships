import "./vehicle-card.scss";
import { useState } from "react";
import { type Vehicle } from "../../utils/filter-logic";
import { romanize } from "../../utils/helper-functions";
import VehicleDetailsLightbox from "../vehicle-details-lightbox/vehicle-details-lightbox";

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const vehicleCardStyle = {
    backgroundImage: `url("${vehicle.nation?.icons?.large}")`,
    backgroundSize: "92%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(true);
  };

  return (
    <article
      className="vehicle-card"
      style={vehicleCardStyle}
      onClick={handleClick}
    >
      {showDetails && (
        <VehicleDetailsLightbox
          vehicle={vehicle}
          setShowDetails={setShowDetails}
        />
      )}
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
