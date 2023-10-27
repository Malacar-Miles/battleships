import "./vehicle-gallery.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_VEHICLES } from "../../utils/apollo-client/apollo-queries";
import VehicleCard from "../../components/vehicle-card/vehicle-card";

const VehicleGallery = () => {
  const { data, loading, error } = useQuery(GET_ALL_VEHICLES);
  console.log(data);

  const VehicleGalleryContent = () => {
    if (loading)
      return <span className="loading-message">Загрузка данных...</span>;
    else if (error)
      return (
        <span className="error-message">
          Ошибка загрузки данных: {error.message}
        </span>
      );
    else
      return (
        <>
          {data?.vehicles?.map(
            (vehicle, index) =>
              vehicle && <VehicleCard key={index} vehicle={vehicle} />
          )}
        </>
      );
  };

  return (
    <main className="vehicle-gallery">
      <VehicleGalleryContent />
    </main>
  );
};

export default VehicleGallery;
