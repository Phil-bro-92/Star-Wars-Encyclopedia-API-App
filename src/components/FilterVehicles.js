import "./FilterStarships.css";

const FilterVehicles = ({ filterVehicles }) => {
  const handleChange = (event) => {
    filterVehicles(event.target.value);
  };
  return (
    <div className="filter-container">
      <input type="text" placeholder="Filter Vehicles" onChange={handleChange} />
    </div>
  );
};

export default FilterVehicles;