import React, { useEffect, useState } from "react";

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
    fetch("http://localhost/api/admin/messages", {
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
    <div>
      <h1>Admin - Gestion des Produits</h1>

      <h3>Ajouter des produits</h3>
      <form onSubmit={handleProduitSubmit}>
        <div>
          <label>Titre</label>
          <input
            type="text"
            value={newProduit.titre}
            onChange={(e) =>
              setNewProduit({ ...newProduit, titre: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea rows={10} cols={30}
            value={newProduit.description}
            onChange={(e) =>
              setNewProduit({ ...newProduit, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Photo</label>
          <input
            type="text"
            value={newProduit.photo}
            onChange={(e) =>
              setNewProduit({ ...newProduit, photo: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Prix</label>
          <input
            type="text"
            value={newProduit.prix}
            onChange={(e) =>
              setNewProduit({ ...newProduit, prix: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Quantité</label>
          <input
            type="number"
            value={newProduit.quantite}
            onChange={(e) =>
              setNewProduit({ ...newProduit, quantite: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Catégorie</label>
          <select
            value={newProduit.categorieId}
            onChange={(e) =>
              setNewProduit({ ...newProduit, categorieId: e.target.value })
            }
            required
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.map((categorie) => {
              return (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.nom}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Ajouter le Produit</button>
      </form>

      <h3>Ajouter une catégorie</h3>
      <form onSubmit={handleCategorieSubmit}>
        <div>
          <label>Nom</label>
          <input
            type="text"
            value={newCategorie.nom}
            onChange={(e) =>
              setNewCategorie({ ...newCategorie, nom: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Ajouter la Catégorie</button>
      </form>

      <h3>Tous les messages</h3>
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
