import { useState, useEffect } from "react";
import "./FilmDetail.css";

const FilmDetail = ({ film }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, [film]);
  const fetchCharacters = () => {
    const characterPromise = film.characters.map((character) => {
      return fetch(character).then((response) => response.json());
    });
    Promise.all(characterPromise).then((data) => {
      setCharacters(data);
    });
  };
  const characterNodes = characters.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.height}</td>
        <td>{character.birth_year}</td>
      </tr>
    );
  });
  return (
    <div className="detail-container">
      <h2>
        Episode {film.episode_id}: {film.title}
      </h2>
      <table className="character-table">
        <tbody>
          <tr>
            <th>Director</th>
            <td>{film.director}</td>
          </tr>
          <tr>
            <th>Producer</th>
            <td>{film.producer}</td>
          </tr>
          <tr>
            <th>Opening Crawl</th>
            <td>{film.opening_crawl}</td>
          </tr>
          <tr>
            <th>Release Date</th>
            <td>{film.release_date}</td>
          </tr>
        </tbody>
      </table>
      <table className="character-table">
        <thead>
          <tr >
            <th className="character-header" colSpan={3}>Characters</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>birth_year</th>
          </tr>
        </thead>
        {characters ? <tbody>{characterNodes}</tbody> : null}
      </table>
    </div>
  );
};

export default FilmDetail;
