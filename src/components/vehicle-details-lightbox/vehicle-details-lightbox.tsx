import "./vehicle-details-lightbox.scss";
import type { Vehicle } from "../../__generated__/graphql";
import { romanize } from "../../utils/helper-functions";

const VehicleDetailsLightbox = ({
  vehicle,
  setShowDetails,
}: {
  vehicle: Vehicle;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleButtonClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    setShowDetails(false);
  };

  const handleLightboxClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="vehicle-details-lightbox"
      onClick={handleLightboxClick}
    >
      <div className="vehicle-details">
        <div className="header">
          <span className="header-field">{vehicle.title}</span>
          <span className="header-field">Level {romanize(vehicle.level)}</span>
          <span className="header-field">
            {vehicle.type?.title}
            <img className="icon" alt="" src={vehicle.type?.icons?.default} />
          </span>
          <span className="header-field">
            {vehicle.nation?.title}
            <img className="icon" alt="" src={vehicle.nation?.icons?.small} />
          </span>
          <button className="close-button" onClick={handleButtonClick}>
            X
          </button>
        </div>
        <img
          className="vehicle-image"
          alt={`${vehicle.title} image`}
          src={vehicle.icons?.large}
        />
        <span className="description">{vehicle.description}</span>
      </div>
    </div>
  );
};

export default VehicleDetailsLightbox;
