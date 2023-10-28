import "./vehicle-gallery.scss";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_VEHICLES } from "../../utils/apollo-client/apollo-queries";
import {
  defaultVehicleFilter,
  getFilterTemplateData,
  filterVehicles,
  type Vehicle,
} from "../../utils/filter-logic";
import VehicleCard from "../../components/vehicle-card/vehicle-card";
import VehicleFilterWidget from "../../components/vehicle-filter/vehicle-filter";

const VehicleGallery = () => {
  const [filter, setFilter] = useState(defaultVehicleFilter);
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
    else {
      const allVehicles = data?.vehicles as Vehicle[];
      const filterTemplateData = getFilterTemplateData(allVehicles);
      const filteredVehicles = filterVehicles(allVehicles, filter);
      return (
        <>
          <VehicleFilterWidget
            filter={filter}
            setFilter={setFilter}
            filterTemplateData={filterTemplateData}
          />
          {filteredVehicles.map(
            (vehicle, index) =>
              vehicle && <VehicleCard key={index} vehicle={vehicle} />
          )}
        </>
      );
    }
  };

  return (
    <main className="vehicle-gallery">
      <VehicleGalleryContent />
    </main>
  );
};

export default VehicleGallery;
