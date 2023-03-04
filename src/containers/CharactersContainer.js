import { useState, useEffect } from "react";
import "./Container.css";
import CharacterList from "../components/CharacterList";
import FilterCharacters from "../components/FilterCharacters";

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    fetchCharacters(counter);
  }, [counter]);

  const fetchCharacters = (page) => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  };

  const filterCharacters = (input) => {
    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredCharacters(filteredCharacters);
    if (input === "") {
      setFilteredCharacters([]);
    }
  };

  const handleNext = () => {
    if (counter < 9) {
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
      <FilterCharacters filterCharacters={filterCharacters} />

      <CharacterList
        characters={characters}
        filteredCharacters={filteredCharacters}
      />
      <div className="button-section">
        {counter > 1 && filteredCharacters.length === 0 ? (
          <button onClick={handlePrevious}>Previous</button>
        ) : null}
        {counter < 9 && filteredCharacters.length === 0 ? (
          <button onClick={handleNext}>Next</button>
        ) : null}
      </div>
    </div>
  );
};

export default CharactersContainer;
