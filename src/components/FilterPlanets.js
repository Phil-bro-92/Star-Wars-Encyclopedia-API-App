import "./FilterStarships.css";

const FilterPlanets = ({ filterPlanets }) => {
  const handleChange = (event) => {
    filterPlanets(event.target.value);
  };
  return (
    <div className="filter-container">
      <input type="text" placeholder="Filter Planets" onChange={handleChange} />
    </div>
  );
};

export default FilterPlanets;