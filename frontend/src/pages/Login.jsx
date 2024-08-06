import React from "react";
import { useState } from "react";
import "../styles/login.css";
import { useAuth } from "../services/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [errVisible, setErrVisible] = useState(true);
  const { authenticate } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await authenticate(email, password);
      setToken(token);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleErrClose = () => {
    setErrVisible(!errVisible);
    setEmail("");
    setPassword("");
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
      {error && (
        <p
          className={errVisible ? "error-msg" : "err-hide"}
          onClick={handleErrClose}
        >
          {error}
        </p>
      )}
    </div>
  );
};
