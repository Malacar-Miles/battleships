import type { Vehicle, Nation, VehicleType } from "../__generated__/graphql";

export type { Vehicle, Nation, VehicleType };

export type VehicleFilter = {
  nation: Nation | null;
  type: VehicleType | null;
  level: number | null;
};

export const defaultVehicleFilter: VehicleFilter = {
  nation: null,
  type: null,
  level: null,
};

export const filterVehicles = (vehicles: Vehicle[], filter: VehicleFilter) => {
  if (filter.nation === null && filter.type === null && filter.level === null)
    return vehicles;
  else
    return vehicles.filter((vehicle) => {
      if (filter.nation !== null && filter.nation.name !== vehicle.nation?.name)
        return false;
      if (filter.type !== null && filter.type.name !== vehicle.type?.name)
        return false;
      if (filter.level !== null && filter.level !== vehicle.level) return false;

      return true;
    });
};

export type FilterTemplateData = {
  allNations: Nation[];
  allTypes: VehicleType[];
  allLevels: number[];
};

export const getFilterTemplateData = (vehicles: Vehicle[]) => {
  const result: FilterTemplateData = {
    allNations: [],
    allTypes: [],
    allLevels: [],
  };

  vehicles.forEach((vehicle) => {
    if (vehicle.level && !result.allLevels.includes(vehicle.level))
      result.allLevels.push(vehicle.level);

    if (
      vehicle.type?.name &&
      result.allTypes.filter(
        (currentType) => currentType.name === (vehicle.type as VehicleType).name
      ).length === 0
    )
      result.allTypes.push(vehicle.type);

    if (
      vehicle.nation?.name &&
      result.allNations.filter(
        (currentNation) =>
          currentNation.name === (vehicle.nation as Nation).name
      ).length === 0
    )
      result.allNations.push(vehicle.nation);
  });

  result.allLevels.sort((a, b) => a - b);

  return result;
};

export const sortVehiclesByTitle = (vehicles: Vehicle[]) =>
  [...vehicles].sort((a, b) => (a.title > b.title ? 1 : -1));
