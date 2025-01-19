import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !phone || !privacyAccepted) {
      setError("Vul alle velden in en accepteer het privacy statement!");
      return;
    }

    navigate("/keuze");
  };

  return (
    <div className="login_container">
      <h2 className="login_title">Login</h2>
      {error && <span className="Error">{error}</span>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Naam" value={name} onChange={(e) => setName(e.target.value)} className="login_input"/>
        <input type="tel" placeholder="Telefoonnummer" value={phone} onChange={(e) => setPhone(e.target.value)} className="login_input"/>
        <div className="checkbox-container">
          <input type="checkbox" id="privacy" checked={privacyAccepted} onChange={() => setPrivacyAccepted(!privacyAccepted)}/>
          <label htmlFor="privacy">Ik accepteer het privacy statement</label>
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
    </div>
  );
}

export default Login;
