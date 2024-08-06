import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useAuth } from "../services/auth";
import {  useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errVisible, setErrVisible] = useState(true);
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setErrVisible(true);
    }
  }, [email, password]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authenticate(email, password);
      setEmail("");
      setPassword("");
      setError(null);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleErrClose = () => {
    setErrVisible(false);
  };

  return (
    <div className="login-holder">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group-login">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group-login">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && errVisible && (
        <p className="error-msg" onClick={handleErrClose}>
          {error}
        </p>
      )}
    </div>
  );
};
