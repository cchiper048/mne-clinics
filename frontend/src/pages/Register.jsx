import React, { useState, useContext } from "react";
import { AuthContext } from "../services/AuthContext";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import { useAxiosInstance } from "../services/axiosInstance";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const { login, user } = useContext(AuthContext);

  const handleNameChange = (e) => setName(e.target.value);
  const handleSurnameChange = (e) => setSurname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const axiosInstance = useAxiosInstance();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Lozinke se ne poklapaju!");
      return;
    }

    try {
      const response = await axiosInstance.post("/register/", {
        email,
        name,
        surname,
        country,
        city,
        address,
        password,
      });
      const userResponse = await axiosInstance.post("/user/");
      const userData = userResponse.data;
      const token = response.data.token;
      login(token, userData);
      setSuccess("Uspešna registracija!");
      setError(null);
      navigate("/");
    } catch (error) {
      setError("Registracija nije uspela. Pokušajte ponovo.");
    }
  };

  return (
    <div className="register-holder">
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Ime:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Prezime:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={handleSurnameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Država:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Grad:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresa:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lozinka:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Potvrdi Lozinku:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Registruj se</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
};
