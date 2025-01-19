import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/keuze.css";

function Keuze() {
  const navigate = useNavigate();

  const ChoiceButton = (choice) => {
    navigate("/input", { state: { choice } });
  };

  const ToMatchesButton = () => {
    navigate("/matches");
  }

  return (
    <div>
      <button className="matches-button" onClick={ToMatchesButton}>
        Bekijk Matches
      </button>
      <div className="keuze-container">
        <button className="keuze-button" onClick={() => ChoiceButton("Ik droom aan...")}>
          Ik droom aan...
        </button>
        <button className="keuze-button" onClick={() => ChoiceButton("Ik denk aan...")}>
          Ik denk aan...
        </button>
      </div>
    </div>
  );
}

export default Keuze;

