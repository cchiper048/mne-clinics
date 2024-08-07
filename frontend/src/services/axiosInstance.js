import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAxiosInstance = () => {
  const { token } = useContext(AuthContext);

  const instance = axios.create({
    baseURL: " https://633b-109-228-127-3.ngrok-free.app/",
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  return instance;
};

useAxiosInstance;
