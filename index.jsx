import React from "react";
import styles from './style.module.css';

<div className={styles.container}>
  {/* Andere componenten */}
</div>

function GebruikersMatchingApp() {
  return (
    <div className="container">
      <h1>Gebruikers Matching App</h1>

      <div id="registration">
        <h2>Aanmelden</h2>
        <form id="registerForm">
          <label htmlFor="name">Naam:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">Telefoonnummer:</label>
          <input type="tel" id="phone" name="phone" required />

          <div className="checkbox">
            <input type="checkbox" id="privacy" name="privacy" required />
            <label htmlFor="privacy">
              Ik ga akkoord met het privacy statement
            </label>
          </div>

          <button type="submit">Aanmelden</button>
        </form>
      </div>
    </div>
  );
}

export default GebruikersMatchingApp;
