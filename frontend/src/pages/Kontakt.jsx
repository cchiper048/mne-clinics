import React from "react";
import { useState } from "react";
import "../styles/kontakt.css";

export const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Poslati podaci:", formData);
    alert("Poruka je poslata!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="kontakt-holder">
      <h1>Kontaktirajte nas:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group-kontakt">
          <label htmlFor="name">Ime:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-kontakt">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-kontakt">
          <label htmlFor="subject">Tema:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-kontakt">
          <label htmlFor="message">Poruka:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};
