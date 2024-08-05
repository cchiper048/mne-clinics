import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Kontakt } from "../pages/Kontakt";
import { ONama } from "../pages/ONama";
import { Cjenovnik } from "../pages/Cjenovnik";
import { Doktori } from "../pages/Doktori";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ZakaziPregled } from "../components/ZakaziPregled";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Layout),
    children: [
      {
        path: "/",
        element: React.createElement(Home),
      },
      {
        path: "/doktori",
        element: React.createElement(Doktori),
      },
      {
        path: "/cjenovnik",
        element: React.createElement(Cjenovnik),
      },
      {
        path: "/onama",
        element: React.createElement(ONama),
      },
      {
        path: "/kontakt",
        element: React.createElement(Kontakt),
      },
      {
        path: "/login",
        element: React.createElement(Login),
      },
      {
        path: "/register",
        element: React.createElement(Register),
      },
      {
        path: "/zakazivanje",
        element: React.createElement(ZakaziPregled),
      },
    ],
  },
]);
