import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../services/AuthContext";

export const PrivateRoute = ({ element: Component, ...rest }) => {
  const { authToken } = useContext(AuthContext);

  if (!authToken) {
    alert("Morate biti prijavljeni da biste pristupili ovoj stranici.");
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
