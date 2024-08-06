import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../services/AuthContext";
import { useAxiosInstance } from "./axiosInstance";

export const useAuth = () => {
  const { login, logout } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();

  const authenticate = async (email, password) => {
    try {
      const response = await axiosInstance.post("/test-protected/", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      throw new Error("Nepostojeci korisnik!");
    }
  };

  return {
    authenticate,
    logout,
  };
};
