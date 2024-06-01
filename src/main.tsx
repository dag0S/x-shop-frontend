import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "dotenv/config";
import Shop from "./pages/Shop/Shop";
import Layout from "./layout/Layout";
import Admin from "./pages/Admin/Admin";
import Basket from "./pages/Basket/Basket";
import Auth from "./pages/Auth/Auth";
import Device from "./pages/Device/Device";
import { paths } from "./paths/paths";
import "./scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: paths.shop,
        element: <Shop />,
      },
      {
        path: paths.admin,
        element: <Admin />,
      },
      {
        path: paths.basket,
        element: <Basket />,
      },
      {
        path: paths.auth,
        element: <Auth />,
      },
      {
        path: paths.device + "/:id",
        element: <Device />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
