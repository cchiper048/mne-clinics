import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || null
  );
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ako postoji token u localStorage, postavite ga u stanje
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const login = (token, userData) => {
    // Postavite token i korisničke podatke
    setAuthToken(token);
    setUser(userData);
    localStorage.setItem("authToken", token); // Sinhronizujte token sa localStorage
  };

  const logout = () => {
    // Očistite token i korisničke podatke
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken"); // Sinhronizujte localStorage
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
