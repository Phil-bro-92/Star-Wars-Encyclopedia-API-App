import { useState, useEffect } from "react";
import "./Container.css";
import StarshipList from "../components/StarshipList";
import FilterStarships from "../components/FilterStarships";

const StarshipsContainer = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    fetchStarships(counter);
  }, [counter]);

  const fetchStarships = (page) => {
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setStarships(data.results));
  };

  const filterStarships = (input) => {
    const filteredShips = starships.filter((starship) => {
      return starship.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredStarships(filteredShips);
    if (input === "") {
      setFilteredStarships([]);
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
      <FilterStarships filterStarships={filterStarships} />

      <StarshipList
        starships={starships}
        filteredStarships={filteredStarships}
      />
      <div className="button-section">
        {counter > 1 && filteredStarships.length === 0 ? (
          <button onClick={handlePrevious}>Previous</button>
        ) : null}
        {counter < 4 && filteredStarships.length === 0 ? (
          <button onClick={handleNext}>Next</button>
        ) : null}
      </div>
    </div>
  );
};

export default StarshipsContainer;
