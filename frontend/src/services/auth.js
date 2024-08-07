import { useContext } from "react";
import { AuthContext } from "../services/AuthContext";
import { useAxiosInstance } from "./axiosInstance";

export const useAuth = () => {
  const { setToken, setUser, login, logout } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();

  const authenticate = async (email, password) => {
    try {
      const response = await axiosInstance.post("/login/", {
        email,
        password,
      });

      const { token, name, surname, email: userEmail } = response.data;

      setToken(token);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      setUser({ name, surname, email: userEmail });
      login(token, { name, surname, email: userEmail });
    } catch (error) {
      throw new Error("Nepostojeći korisnik!");
    }
  };

  return {
    authenticate,
    logout,
  };
};
