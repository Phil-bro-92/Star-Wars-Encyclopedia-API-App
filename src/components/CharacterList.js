const CharacterList = ({ characters, filteredCharacters }) => {
  let people;

  if (filteredCharacters.length > 0) {
    people = filteredCharacters;
  } else {
    people = characters;
  }

  const characterNodes = people.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.height}</td>
        <td>{character.mass}</td>
        <td>{character.hair_color}</td>
        <td>{character.birth_year}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height (cm)</th>
            <th>Mass (kg)</th>
            <th>Hair Colour</th>
            <th>Birth Year</th>
          </tr>
        </thead>
        <tbody>{characterNodes}</tbody>
      </table>
    </>
  );
};

export default CharacterList;
