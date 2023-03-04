import { useState, useEffect } from "react";
import "./Container.css";
import SpeciesList from "../components/SpeciesList";
import FilterSpecies from "../components/FilterSpecies";

const SpeciesContainer = () => {
  const [species, setSpecies] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    fetchSpecies(counter);
  }, [counter]);

  const fetchSpecies = (page) => {
    fetch(`https://swapi.dev/api/species/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setSpecies(data.results));
  };

  const filterSpecies = (input) => {
    const filteredSpecies = species.filter((species) => {
      return species.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredSpecies(filteredSpecies);
    if (input === "") {
      setFilteredSpecies([]);
    }
  };

  const handleNext = () => {
    if (counter < 4) {
      setCounter(counter + 1);
    }
  };
  const handlePrevious = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      console.log("clicked");
    }
  };
  return (
    <div>
      <FilterSpecies filterSpecies={filterSpecies} />

      <SpeciesList
        species={species}
        filteredSpecies={filteredSpecies}
      />
      <div className="button-section">
        {counter > 1 && filteredSpecies.length === 0 ? (
          <button onClick={handlePrevious}>Previous</button>
        ) : null}
        {counter < 4 && filteredSpecies.length === 0 ? (
          <button onClick={handleNext}>Next</button>
        ) : null}
      </div>
    </div>
  );
};

export default SpeciesContainer;
