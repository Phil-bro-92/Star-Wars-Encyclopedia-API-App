const FilterCharacters = ({ filterCharacters }) => {
  const handleChange = (event) => {
    filterCharacters(event.target.value);
  };
  return (
    <div className="filter-container">
      <input type="text" placeholder="Filter Characters" onChange={handleChange} />
    </div>
  );
};

export default FilterCharacters;