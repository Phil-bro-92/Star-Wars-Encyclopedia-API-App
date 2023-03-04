import { useState, useEffect } from "react";
import "./Container.css";
import VehiclesList from "../components/VehiclesList";
import FilterVehicles from "../components/FilterVehicles";

const VehiclesContainer = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    fetchVehicles(counter);
  }, [counter]);

  const fetchVehicles = (page) => {
    fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setVehicles(data.results));
  };

  const filterVehicles = (input) => {
    const filteredVehicles = vehicles.filter((vehicle) => {
      return vehicle.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredVehicles(filteredVehicles);
    if (input === "") {
      setFilteredVehicles([]);
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
      <FilterVehicles filterVehicles={filterVehicles} />

      <VehiclesList
        vehicles={vehicles}
        filteredVehicles={filteredVehicles}
      />
      <div className="button-section">
        {counter > 1 && filteredVehicles.length === 0 ? (
          <button onClick={handlePrevious}>Previous</button>
        ) : null}
        {counter < 4 && filteredVehicles.length === 0 ? (
          <button onClick={handleNext}>Next</button>
        ) : null}
      </div>
    </div>
  );
};

export default VehiclesContainer;
