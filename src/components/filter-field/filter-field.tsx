import "./filter.field.scss";

const FilterField = ({
  children,
  currentValue,
  updateFilter,
  ariaLabel,
}: {
  children: React.ReactNode;
  currentValue: string;
  updateFilter: (newValue: string) => void;
  ariaLabel: string;
}) => {
  const handleChange = (event: React.SyntheticEvent) => {
    const newFieldValue = (event.target as HTMLSelectElement).value;
    updateFilter(newFieldValue);
  };

  return (
    <select
      className="filter-field"
      id="level"
      value={currentValue}
      onChange={handleChange}
      aria-label={ariaLabel}
    >
      {children}
    </select>
  );
};
export default FilterField;
