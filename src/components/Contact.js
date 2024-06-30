import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom, email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Message envoyé:", data);
        setNom("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="text-center">
      <Navbar />
      <h2 className="text-[30px] my-10 text-neutral-950 font-extrabold hover:text-sky-950">Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="border rounded-xl w-1/2 m-auto box-border shadow-lg bg-slate-100 p-6">
        <div className="p-2">
          <label className="p-5">Nom</label>
          <input className=""
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="p-2">
          <label className="p-5">Email</label>
          <input
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="p-2">
          <label className="p-5">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required className="resize-y h-[150px]"
          ></textarea>
        </div>
        <button type="submit" className="p-3 bg-sky-700 hover:bg-sky-950 rounded-2xl text-slate-50">Envoyer</button>
      </form>
    </div>
  );
}
