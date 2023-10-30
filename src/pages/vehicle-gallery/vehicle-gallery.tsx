import "./vehicle-gallery.scss";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_VEHICLES } from "../../utils/apollo-client/apollo-queries";
import {
  defaultVehicleFilter,
  getFilterTemplateData,
  filterVehicles,
  sortVehiclesByTitle,
  type Vehicle,
} from "../../utils/filter-logic";
import VehicleCard from "../../components/vehicle-card/vehicle-card";
import VehicleFilterWidget from "../../components/vehicle-filter/vehicle-filter";

const VehicleGallery = () => {
  const [filter, setFilter] = useState(defaultVehicleFilter);
  const { data, loading, error } = useQuery(GET_ALL_VEHICLES);

  const VehicleGalleryContent = () => {
    if (loading)
      return <span className="loading-message">Loading data...</span>;
    else if (error)
      return (
        <span className="error-message">
          Error loading data: {error.message}
        </span>
      );
    else {
      console.log("Rendering Gallery");
      const allVehicles = data?.vehicles as Vehicle[];
      const filterTemplateData = getFilterTemplateData(allVehicles);
      const filteredVehicles = filterVehicles(allVehicles, filter);
      const sortedVehicles = sortVehiclesByTitle(filteredVehicles);
      return (
        <>
          <VehicleFilterWidget
            filter={filter}
            setFilter={setFilter}
            filterTemplateData={filterTemplateData}
          />
          {sortedVehicles.map(
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
