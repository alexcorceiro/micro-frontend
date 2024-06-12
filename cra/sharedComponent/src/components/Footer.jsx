import React from 'react'
import "./css/footer.css"

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h5>À Propos de Nous</h5>
        <p>
          Nous sommes une association sportive dédiée à promouvoir la pratique du sport pour tous les âges et tous les niveaux.
        </p>
      </div>
      <div className="footer-section">
        <h5>Liens Utiles</h5>
        <ul className="footer-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Événements</a></li>
          <li><a href="#">Équipes</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Association Sportive. Tous droits réservés.</p>
    </div>
  </footer>
  )
}

export default Footer