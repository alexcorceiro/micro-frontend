import React from 'react'
import "./css/header.css"

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="navbar-brand">Association Sportive</a>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="#" className="nav-link">Accueil</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Événements</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Équipes</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header