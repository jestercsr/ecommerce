import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Admin() {
  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newProduit, setNewProduit] = useState({
    titre: "",
    description: "",
    photo: "",
    prix: "",
    quantite: "",
    categorieId: "",
  });
  const [newCategorie, setNewCategorie] = useState({ nom: "" });

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/produits", {
        method: "GET"
      })
      .then((res) => res.json())
      .then((data) => setProduits(data))
      .catch((error) => console.error(error));
    fetch("http://localhost:8080/api/admin/categories", {
        method: "GET"
      })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
    fetch("http://localhost:8080/api/admin/messages", {
        method: "GET"
      })
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  const handleProduitSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/admin/produits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduit),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduits([...produits, data]);
        setNewProduit({
          titre: "",
          description: "",
          photo: "",
          prix: "",
          quantite: "",
          categorieId: "",
        });
      })
      .catch((error) => console.error(error));
  };

  const handleCategorieSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/admin/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategorie),
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories([...categories, data]);
        setNewCategorie({ nom: "" });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-[40px] text-sky-950">Admin</h1>
      <h2 className="text-[25px] text-emerald-700">Gestion des Produits</h2>

      <h3 className="text-[20px]">Ajouter des produits</h3>
      <form onSubmit={handleProduitSubmit} className="border rounded-xl w-1/2 m-auto box-border shadow-lg bg-slate-100 p-6 mb-5 items-center text-center">
        <div className="p-2 resize-x rounded-lg">
          <label className="text-md mr-2">Titre</label>
          <input className="p-2 resize-x rounded-lg"
            type="text"
            value={newProduit.titre}
            onChange={(e) =>
              setNewProduit({ ...newProduit, titre: e.target.value })
            }
            required
          />
        </div>
        <div className="p-2 resize-x rounded-lg">
          <label className="text-md mr-2">Description</label>
          <textarea rows={5} cols={25} className="p-2 resize-y rounded-lg"
            value={newProduit.description}
            onChange={(e) =>
              setNewProduit({ ...newProduit, description: e.target.value })
            }
            required
          />
        </div>
        <div className="p-2 resize-x rounded-lg">
          <label className="text-md mr-2">Photo</label>
          <input className="p-2 resize-x rounded-lg"
            type="text"
            value={newProduit.photo}
            onChange={(e) =>
              setNewProduit({ ...newProduit, photo: e.target.value })
            }
            required
          />
        </div>
        <div className="p-2 resize-x rounded-lg">
          <label className="text-md mr-2">Prix</label>
          <input className="p-2 resize-x rounded-lg"
            type="text"
            value={newProduit.prix}
            onChange={(e) =>
              setNewProduit({ ...newProduit, prix: e.target.value })
            }
            required
          />
        </div>
        <div className="p-2 resize-x rounded-lg">
          <label className="text-md mr-2">Quantité</label>
          <input className="p-2 resize-x rounded-lg"
            type="number"
            value={newProduit.quantite}
            onChange={(e) =>
              setNewProduit({ ...newProduit, quantite: e.target.value })
            }
            required
          />
        </div>
        <div className="p-2 resize-x rounded-lg">
          <label className="text-md mr-2">Catégorie</label>
          <select 
            value={newProduit.categorieId}
            onChange={(e) =>
              setNewProduit({ ...newProduit, categorieId: e.target.value })
            }
            required
          >
            <option value="" className="p-2 rounded-lg">Sélectionnez une catégorie</option>
            {categories.map((categorie) => {
              return (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.nom}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="p-2 bg-sky-700 hover:bg-sky-950 text-slate-50 rounded-2xl">Ajouter le Produit</button>
      </form>

      <h3 className="text-[20px]">Ajouter une catégorie</h3>
      <form onSubmit={handleCategorieSubmit} className="border rounded-xl w-1/2 m-auto box-border shadow-lg bg-slate-100 p-6 mb-5">
        <div>
          <label className="text-md mr-2">Nom</label>
          <input className="p-2 resize-x rounded-lg mb-3"
            type="text"
            value={newCategorie.nom}
            onChange={(e) =>
              setNewCategorie({ ...newCategorie, nom: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="p-2 bg-sky-700 hover:bg-sky-950 text-slate-50 rounded-2xl">Ajouter la Catégorie</button>
      </form>

      <h2 className="text-[25px] text-emerald-700">Tous les messages</h2>
      <ul>
        {messages.map((mess) => {
          return (
            <li key={mess.id}>
              {mess.nom} ({mess.email}) : {mess.message}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
