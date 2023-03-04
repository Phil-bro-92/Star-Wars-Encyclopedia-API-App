import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FilmsContainer from "./containers/FilmsContainer";
import CharactersContainer from "./containers/CharactersContainer";
import PlanetsContainer from "./containers/PlanetsContainer";
import SpeciesContainer from "./containers/SpeciesContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import StarshipsContainer from "./containers/StarshipsContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<FilmsContainer />} />
        <Route path="/characters" element={<CharactersContainer />} />
        <Route path="/planets" element={<PlanetsContainer />} />
        <Route path="/species" element={<SpeciesContainer />} />
        <Route path="/vehicles" element={<VehiclesContainer />} />
        <Route path="/starships" element={<StarshipsContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
