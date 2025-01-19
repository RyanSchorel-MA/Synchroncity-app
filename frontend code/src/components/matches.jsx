import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/matches.css";

function MatchesButton() {
  const navigate = useNavigate();

  const ReturnButton = () => {
    navigate("/keuze");
  };

  return (
    <div className="matches-container">
      <button className="back-button" onClick={ReturnButton}>
        Terug
      </button>
      <h1>Matches</h1>
      <div className="matches-list">
        <div className="match-card">
          <p><strong>Naam:</strong> John Doe</p>
          <p><strong>Match:</strong> Een plek die ik wil bezoeken</p>
          <p><strong>Tijd:</strong> 15 min geleden</p>
        </div>
        <div className="match-card">
          <p><strong>Naam:</strong> Jane Smith</p>
          <p><strong>Match:</strong> Een idee voor de toekomst</p>
          <p><strong>Tijd:</strong> Nu</p>
        </div>
        <div className="match-card">
          <p><strong>Naam:</strong> Mark Brown</p>
          <p><strong>Match:</strong> Een bijzondere gebeurtenis</p>
          <p><strong>Tijd:</strong> Afgelopen uur</p>
        </div>
        <div className="match-card">
          <p><strong>Naam:</strong> Lucy Davis</p>
          <p><strong>Match:</strong> Een herinnering die mij gelukkig maakt</p>
          <p><strong>Tijd:</strong> Ergens vandaag</p>
        </div>
      </div>
    </div>
  );
}

export default MatchesButton;
