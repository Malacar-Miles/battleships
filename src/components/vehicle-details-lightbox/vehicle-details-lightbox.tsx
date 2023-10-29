import type { Vehicle } from "../../__generated__/graphql";
import "./vehicle-details-lightbox.scss";

const VehicleDetailsLightbox = ({
  vehicle,
  setVehicleToShowInLightbox,
}: {
  vehicle: Vehicle;
  setVehicleToShowInLightbox: (vehicle: Vehicle | null) => void;
}) => {
  const handleClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    setVehicleToShowInLightbox(null);
  };

  return (
    <div className="vehicle-details-lightbox" onClick={handleClick}>
      <div className="vehicle-details">
        <p>Title: {vehicle.title}</p>
        <p>Type: {vehicle.type?.title}</p>
        <p>Level: {vehicle.level}</p>
        <p>Nation: {vehicle.nation?.title}</p>
        <p>Image: {vehicle.icons?.large}</p>
      </div>
    </div>
  );
};

export default VehicleDetailsLightbox;
