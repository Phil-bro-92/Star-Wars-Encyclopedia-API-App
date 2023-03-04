const PlanetsList = ({ planets, filteredPlanets }) => {
  let spheres;

  if (filteredPlanets.length > 0) {
    spheres = filteredPlanets;
  } else {
    spheres = planets;
  }

  const planetNodes = spheres.map((planet, index) => {
    return (
      <tr key={index}>
        <td>{planet.name}</td>
        <td>{planet.climate}</td>
        <td>{planet.diameter}</td>
        <td>{planet.population}</td>
        <td>{planet.terrain}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Diameter (km)</th>
            <th>Population</th>
            <th>Terrain</th>
          </tr>
        </thead>
        <tbody>{planetNodes}</tbody>
      </table>
    </>
  );
};

export default PlanetsList;
