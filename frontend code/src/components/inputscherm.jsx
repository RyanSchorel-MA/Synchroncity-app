import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/inputscherm.css";

const determineActionVerb = (choice) => {
  if (choice.toLowerCase().includes("droom")) {
    return "droomde";
  }
  if (choice.toLowerCase().includes("dacht")) {
    return "dacht";
  }
  return "dacht";
};

function InputScherm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { choice } = location.state || { choice: "Ik dacht aan" };

  const actionVerb = determineActionVerb(choice);

  const [selectedOption, setSelectedOption] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((selectedOption || customInput) && selectedTime) {
      setError("");
      navigate("/bevestiging", {
        state: { choice, selectedOption, customInput, selectedTime },
      });
    } else {
      setError("Vul zowel een keuze als een tijd in om door te gaan!");
    }
  };

  const ReturnButton = () => {
    navigate("/keuze");
  };

  const ToMatchesButton = () => {
    navigate("/matches");
  }

  return (
    <div>
      <button className="back-button" onClick={ReturnButton}>
        Terug
      </button>
      <button className="matches-button" onClick={ToMatchesButton}>
        Bekijk Matches
      </button>
      <div className="input-container">
        <h2>{choice}</h2>
        <span className={`error ${error ? "active" : ""}`}>{error}</span>
        <form onSubmit={handleSubmit}>
          <div className="options-wrapper">
            <div className="left-container">
              <h3>Waar {actionVerb} je aan?</h3>
              <label>
                <input type="radio" name="option" value="Een plek die ik wil bezoeken."
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Een plek die ik wil bezoeken.
              </label>
              <label>
                <input type="radio" name="option" value="Een persoon die belangrijk is voor mij."
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Een persoon die belangrijk is voor mij.
              </label>
              <label>
                <input type="radio" name="option" value="Een moment dat me gelukkig maakt."
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Een moment dat me gelukkig maakt.
              </label>
              <label>
                <input type="radio" name="option" value="Een situatie die me bezighoudt."
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Een situatie die me bezighoudt.
              </label>
              <textarea className="custom-input" placeholder="Vrije keuze" value={customInput}
                onChange={(e) => {
                  setSelectedOption("");
                  setCustomInput(e.target.value);
                }}>
              </textarea>
            </div>
            <div className="right-container">
              <h3>Wanneer {actionVerb} je hieraan?</h3>
              <label>
                <input type="radio" name="time" value="Nu" onChange={(e) => setSelectedTime(e.target.value)}
                />
                Nu
              </label>
              <label>
                <input type="radio" name="time" value="15 min geleden" onChange={(e) => setSelectedTime(e.target.value)}/>
                15 min geleden
              </label>
              <label>
                <input type="radio" name="time" value="Afgelopen uur" onChange={(e) => setSelectedTime(e.target.value)}/>
                Afgelopen uur
              </label>
              <label>
                <input type="radio" name="time" value="Ergens vandaag" onChange={(e) => setSelectedTime(e.target.value)}/>
                Ergens vandaag
              </label>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Verstuur
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputScherm;
