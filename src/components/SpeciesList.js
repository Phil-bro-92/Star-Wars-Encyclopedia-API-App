const SpeciesList = ({ species, filteredSpecies }) => {
  let spec;

  if (filteredSpecies.length > 0) {
    spec = filteredSpecies;
  } else {
    spec = species;
  }

  const speciesNodes = spec.map((species, index) => {
    return (
      <tr key={index}>
        <td>{species.name}</td>
        <td>{species.classification}</td>
        <td>{species.designation}</td>
        <td>{species.average_height}</td>
        <td>{species.average_lifespan}</td>
        <td>{species.language}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Classification</th>
            <th>Designation</th>
            <th>Average Height (m)</th>
            <th>Average Lifespan (years)</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>{speciesNodes}</tbody>
      </table>
    </>
  );
};

export default SpeciesList;
