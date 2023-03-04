import { useState, useEffect } from "react";
import "./Container.css";
import PlanetsList from "../components/PlanetsList";
import FilterPlanets from "../components/FilterPlanets";

const PlanetsContainer = () => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    fetchPlanets(counter);
  }, [counter]);

  const fetchPlanets = (page) => {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setPlanets(data.results));
  };

  const filterPlanets = (input) => {
    const filteredPlanets = planets.filter((character) => {
      return character.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredPlanets(filteredPlanets);
    if (input === "") {
      setFilteredPlanets([]);
    }
  };

  const handleNext = () => {
    if (counter < 6) {
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
      <FilterPlanets filterPlanets={filterPlanets} />

      <PlanetsList
        planets={planets}
        filteredPlanets={filteredPlanets}
      />
      <div className="button-section">
        {counter > 1 && filteredPlanets.length === 0 ? (
          <button onClick={handlePrevious}>Previous</button>
        ) : null}
        {counter < 6 && filteredPlanets.length === 0 ? (
          <button onClick={handleNext}>Next</button>
        ) : null}
      </div>
    </div>
  );
};

export default PlanetsContainer;
