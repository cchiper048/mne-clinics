import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAxiosInstance = () => {
  const { token } = useContext(AuthContext);

  const instance = axios.create({
    baseURL: "http://localhost/",
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  return instance;
};

useAxiosInstance;
