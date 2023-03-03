import "./FilterStarships.css";

const FilterStarships = ({ filterStarships }) => {
  const handleChange = (event) => {
    filterStarships(event.target.value);
  };
  return (
    <div className="filter-container">
      <input type="text" placeholder="Filter Ships" onChange={handleChange} />
    </div>
  );
};

export default FilterStarships;
