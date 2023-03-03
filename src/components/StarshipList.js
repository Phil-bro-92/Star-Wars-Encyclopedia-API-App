import "./StarshipList.css";

const StarshipList = ({ starships, filteredStarships }) => {
  let ships;

  if (filteredStarships.length > 0) {
    ships = filteredStarships;
  } else {
    ships = starships;
  }

  const starshipNodes = ships.map((starship, index) => {
    return (
      <tr key={index}>
        <td>{starship.name}</td>
        <td>{starship.model}</td>
        <td>{starship.manufacturer}</td>
        <td>{starship.cargo_capacity}</td>
        <td>{starship.length}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Ship</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Cargo Capacity (Kg)</th>
            <th>Length(m)</th>
          </tr>
        </thead>
        <tbody>{starshipNodes}</tbody>
      </table>
    </>
  );
};

export default StarshipList;
