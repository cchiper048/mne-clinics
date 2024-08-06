import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../services/AuthContext";

export const useAuth = () => {
  const { login, logout } = useContext(AuthContext);

  const authenticate = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/login/", {
        email,
        password,
      });
    } catch (error) {
      throw new Error("Nepostojeci korisnik!");
    }
  };

  return {
    authenticate,
    logout,
  };
};
export const register = async (
  email,
  name,
  surname,
  country,
  city,
  address,
  password
) => {
  try {
    const response = await axios.post("http://localhost:8000/register/", {
      email,
      name,
      surname,
      country,
      city,
      address,
      password,
    });
    console.log(response.data.token);
  } catch (error) {
    throw new Error("Registracija nije uspela. Proverite svoje podatke.");
  }
};
