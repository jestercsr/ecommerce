import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Produits() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/produits/${id}`)
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
      <div className="grid grid-cols-2 p-5 gap-4 md:grid-cols-3 lg:grid-cols-2 my-10">
        <div>
          <h2 className="text-[30px] text-neutral-950 font-extrabold hover:text-sky-950">{produit.titre}</h2>
          <img src={produit.photo} alt={produit.titre} className="w-[50%] m-auto" />
        </div>
        <div className="pt-4 text-sky-600 font-semibold  m-auto">
          <h2 className="text-[20px] mb-10 text-neutral-950 font-extrabold">Description : </h2>
          <p className="text-[14px] mb-5">{produit.description}</p>
          <p className="text-neutral-950 text-[2Opx]">Prix: <span className="text-xl text-sky-600">{produit.prix} €</span></p>
          <p className="text-red-600">Il reste: {produit.quantite} produits</p>
        </div>
      </div>
    </div>
  );
}
