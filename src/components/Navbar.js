import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [setProduits] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetch(`http://localhost:8080/api/produits/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setProduits(data))
      .catch((error) => console.error(error));
  };
  return (
    <nav className="duration-200 z-40 bg-sky-950 text-slate-50 sticky">
      <div className="flex justify-between px-8 items-center py-2 top-0 left-0">
        <div>
          <ul className="flex items-center gap-4 list">
            <li className="text-xs md:text-md lg:text-lg hover:text-sky-500 transition ease-in duration-300">
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li className="text-xs md:text-md lg:text-lg hover:text-sky-500 transition ease-in duration-300">
              <NavLink to="/product">Produits</NavLink>
            </li>
            <li className="text-xs md:text-md lg:text-lg hover:text-sky-500 transition ease-in duration-300">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="search">
        <input
          type="text"
          placeholder="Chercher un produit ..."
          value={search}
          onChange={handleSearch}
        />
        <button type="submit" className="bg-sky-700 hover:bg-sky-500">
          Rechercher
        </button>
      </div>
      </div>
    </nav>
  );
}
