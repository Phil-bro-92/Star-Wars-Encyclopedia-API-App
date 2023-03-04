import "./FilterStarships.css";

const FilterSpecies = ({ filterSpecies }) => {
  const handleChange = (event) => {
    filterSpecies(event.target.value);
  };
  return (
    <div className="filter-container">
      <input type="text" placeholder="Filter Species" onChange={handleChange} />
    </div>
  );
};

export default FilterSpecies;