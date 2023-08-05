import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homePage/Homepage";
import Details from "./pages/details/Details";
import Panier from "./pages/panier/Panier";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </div>
  );
}

export default App;
