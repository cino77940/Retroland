import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Accueil from "./containers/Accueil";
import Roms from "./containers/Roms";
import About from "./containers/About";
import Emulators from "./containers/Emulators";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
<div className="App">
  <NavBar />
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/Emulators" element={<Emulators />}/>
    <Route path="/Roms" element={<Roms />}/>
    <Route path="/About" element={<About />}/>
  </Routes>
  <Footer />
</div>
  );
}

export default App;
