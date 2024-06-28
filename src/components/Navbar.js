import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-ul">
        <ul>
          <li>
            <NavLink to="/" style={{color: "black", textDecoration: "none"}}>Accueil</NavLink>
            <NavLink to="/product" style={{color: "black", textDecoration: "none"}}>Produits</NavLink>
            <NavLink to="/contact" style={{color: "black", textDecoration: "none"}}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
