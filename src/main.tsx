import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Layout from "./layout/Layout";
import Admin from "./pages/Admin/Admin";
import Basket from "./pages/Basket/Basket";
import Device from "./pages/Device/Device";
import { paths } from "./paths/paths";
import "./scss/main.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";

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
        path: paths.login,
        element: <Login />,
      },
      {
        path: paths.registration,
        element: <Registration />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
