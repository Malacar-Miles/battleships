import "./vehicle-filter.scss";
import type {
  FilterTemplateData,
  VehicleFilter,
} from "../../utils/filter-logic";
import { romanize } from "../../utils/helper-functions";
import FilterField from "../filter-field/filter-field";

const VehicleFilterWidget = ({
  filter,
  setFilter,
  filterTemplateData,
}: {
  filter: VehicleFilter;
  setFilter: React.Dispatch<React.SetStateAction<VehicleFilter>>;
  filterTemplateData: FilterTemplateData;
}) => {
  const DEFAULT_FILTER_VALUE = "do-not-filter";

  const currentLevelValue =
    filter.level === null ? DEFAULT_FILTER_VALUE : filter.level.toString();
  const currentNationValue =
    filter.nation === null ? DEFAULT_FILTER_VALUE : filter.nation.name;
  const currentTypeValue =
    filter.type === null ? DEFAULT_FILTER_VALUE : filter.type.name;

  const LevelFilterFieldItems = () => (
    <>
      <option value={DEFAULT_FILTER_VALUE}>All Levels</option>
      {filterTemplateData.allLevels.map((level) => (
        <option value={level} key={level}>
          {romanize(level)}
        </option>
      ))}
    </>
  );

  const NationFilterFieldItems = () => (
    <>
      <option value={DEFAULT_FILTER_VALUE}>All Nations</option>
      {filterTemplateData.allNations.map((nation) => (
        <option value={nation.name as string} key={nation.name}>
          {nation.title}
        </option>
      ))}
    </>
  );

  const TypeFilterFieldItems = () => (
    <>
      <option value={DEFAULT_FILTER_VALUE}>All Vessels</option>
      {filterTemplateData.allTypes.map((vehicleType) => (
        <option value={vehicleType.name as string} key={vehicleType.name}>
          {vehicleType.title}
        </option>
      ))}
    </>
  );

  const updateLevel = (newValue: string) => {
    const newLevelFilterValue =
      newValue === DEFAULT_FILTER_VALUE ? null : Number(newValue);
    setFilter({ ...filter, level: newLevelFilterValue });
  };

  const updateNation = (newValue: string) => {
    const newNationFilterValue =
      newValue === DEFAULT_FILTER_VALUE
        ? null
        : filterTemplateData.allNations.filter(
            (nation) => nation.name === newValue
          )[0];
    setFilter({ ...filter, nation: newNationFilterValue });
  };

  const updateType = (newValue: string) => {
    const newTypeFilterValue =
      newValue === DEFAULT_FILTER_VALUE
        ? null
        : filterTemplateData.allTypes.filter(
            (vehicleType) => vehicleType.name === newValue
          )[0];
    setFilter({ ...filter, type: newTypeFilterValue });
  };

  return (
    <div className="vehicle-filter">
      <FilterField
        currentValue={currentLevelValue}
        updateFilter={updateLevel}
        ariaLabel="Filter by level"
      >
        <LevelFilterFieldItems />
      </FilterField>

      <FilterField
        currentValue={currentNationValue as string}
        updateFilter={updateNation}
        ariaLabel="Filter by nation"
      >
        <NationFilterFieldItems />
      </FilterField>

      <FilterField
        currentValue={currentTypeValue as string}
        updateFilter={updateType}
        ariaLabel="Filter by vessel type"
      >
        <TypeFilterFieldItems />
      </FilterField>
    </div>
  );
};

export default VehicleFilterWidget;
