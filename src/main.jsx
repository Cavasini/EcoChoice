import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/index.scss"
import App from "./App.jsx";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./routes/RegisterPage.jsx";
import AdminLogin from "./routes/AdminLogin.jsx";
import AdminAcess from "./routes/AdminAcess.jsx";

const Token = sessionStorage.getItem("senhaData");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Home/>},
      { path:"register", element: <RegisterPage/>},
      { path:"admin", element: <AdminLogin/>},
      { path: `admin/${Token}`, element: <AdminAcess/>}
    ]
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
