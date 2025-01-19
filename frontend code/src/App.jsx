import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import Keuze from "./components/keuze.jsx";
import InputScherm from "./components/inputscherm.jsx";
import Bevestiging from "./components/bevestiging.jsx";
import Matches from "./components/matches.jsx";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/keuze" element={<Keuze />} />
        <Route path="/input" element={<InputScherm />} />
        <Route path="/bevestiging" element={<Bevestiging />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </Router>
  );
}

export default App;