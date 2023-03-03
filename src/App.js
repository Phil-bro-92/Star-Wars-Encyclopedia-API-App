import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FilmsContainer from "./containers/FilmsContainer";
import StarshipsContainer from "./containers/StarshipsContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <Router >
      <Header />
      <NavBar />
      <Routes >
        <Route path="/" element={<FilmsContainer />} />
        <Route path="/starships" element={<StarshipsContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
