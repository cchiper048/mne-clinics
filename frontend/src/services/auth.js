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

      const token = response.data.token;
      setToken(token);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      const userResponse = await axiosInstance.get("/user/");
      const userData = userResponse.data;
      setUser(userResponse.data);
      login(token, userData);
    } catch (error) {
      throw new Error("Nepostojeći korisnik!");
    }
  };

  return {
    authenticate,
    logout,
  };
};
