import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  const [produits, setProduits] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/produits")
      .then((res) => res.json())
      .then((data) => setProduits(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetch(`http://localhost:8080/api/produits/search?titre=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setProduits(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <div className="search">
        <input
          type="text"
          placeholder="Chercher un produit"
          value={search}
          onChange={handleSearch}
        />
        <button type="submit" onClick={handleSearch}>
          Rechercher
        </button>
      </div>
      <div style={{display: "grid", gridColumn: "5"}}>
        {produits.map((produit) => {
          return (
            <div key={produit.id} style={{backgroundColor:"beige", minWidth:"250px", border: "1px solid", borderRadius:"10px", width:"40%", boxShadow: "initial"}}>
              <Link to={`/product/${produit.id}`}>
                <h3>{produit.titre}</h3>
                <img src={produit.photo} alt={produit.titre} style={{with: "100%"}} />
                <p>{produit.description}</p>
                <p>{produit.prix} €</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
