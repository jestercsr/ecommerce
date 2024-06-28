import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Produits() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/admin/produits/${id}`)
      .then((res) => res.json())
      .then((data) => setProduit(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!produit) {
    return <div>Loading....</div>;
  }
  return (
    <div>
        <Navbar />
        <div>
      <h2>{produit.titre}</h2>
      <img src={produit.photo} alt={produit.titre} />
      <p>{produit.description}</p>
      <p>Prix: {produit.prix} €</p>
      <p>Quantité: {produit.quantite}</p>
      </div>
    </div>
  );
}
