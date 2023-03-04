const VehiclesList = ({ vehicles, filteredVehicles }) => {
  let transport;

  if (filteredVehicles.length > 0) {
    transport = filteredVehicles;
  } else {
    transport = vehicles;
  }

  const vehicleNodes = transport.map((vehicle, index) => {
    return (
      <tr key={index}>
        <td>{vehicle.name}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.manufacturer}</td>
        <td>{vehicle.length}</td>
        <td>{vehicle.cargo_capacity}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Length (m)</th>
            <th>Cargo Capacity (kg)</th>
          </tr>
        </thead>
        <tbody>{vehicleNodes}</tbody>
      </table>
    </>
  );
};

export default VehiclesList;
