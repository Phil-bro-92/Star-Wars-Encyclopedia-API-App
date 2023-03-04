import "./FilmList.css";

const FilmList = ({ films, getSelectedFilm }) => {
  const handleClick = (event) => {
    getSelectedFilm(films[event.target.value]);
  };

  const filmItems = films.map((film, index) => {
    return (
      <li
        className="film-list-item"
        key={index}
        value={index}
        onClick={handleClick}
      >
        Episode {film.episode_id} :&nbsp;
        {film.title}
      </li>
    );
  });
  return (
    <div>
      <ul className="film-list">{filmItems}</ul>
    </div>
  );
};

export default FilmList;
