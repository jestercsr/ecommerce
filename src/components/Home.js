import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Banner from "./ui/Banner";
import Slider from "./ui/Slider";

export default function Home() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/produits")
      .then((res) => res.json())
      .then((data) => setProduits(data))
      .catch((error) => console.error(error));
  }, []); 

  return (
    <div>
      <Navbar />   
      <Slider />
      <Banner />
      <div className="grid grid-cols-2 p-5 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {produits.map((produit) => {
          return (
            <div key={produit.id} className="min-w-[230px] px-[8px] border-2 cursor-pointer shadow-xl hover:shadow-2xl rounded-2xl mb-5">
              <Link to={`/product/${produit.id}`}>
                <h3 className="text-[30px] my-10 text-neutral-950 font-extrabold hover:text-sky-950">{produit.titre}</h3>
                <img src={produit.photo} alt={produit.titre} className="w-[60%] m-auto rounded-2xl" />
                <p className="pt-4 text-[12px] text-sky-600 font-semibold">{produit.description}</p>
                <p className="pt-4 text-[15px] lg:text-lg text-sky-600 hover:text-sky-950 font-semibold">{produit.prix} €</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
