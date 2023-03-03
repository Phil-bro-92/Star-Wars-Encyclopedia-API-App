import { useState, useEffect } from "react";
import FilmDetail from "../components/FilmDetail";
import FilmList from "../components/FilmList";

const FilmsContainer = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    fetchFilms();
  });

  const fetchFilms = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((films) => setFilms(films.results));
  };

  const sortFilms = () => {
    films.sort((a, b) => {
      return parseFloat(a.episode_id) - parseFloat(b.episode_id);
    });
  };
  sortFilms();

  const getSelectedFilm = (film) => {
    setSelectedFilm(film);
  };

  return (
    <div>
      <FilmList films={films} getSelectedFilm={getSelectedFilm} />
      {selectedFilm ? <FilmDetail film={selectedFilm} /> : null}
    </div>
  );
};
export default FilmsContainer;
