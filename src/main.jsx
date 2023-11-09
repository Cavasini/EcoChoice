import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/index.scss"
import App from "./App.jsx";
import Home from "./routes/Home";
// import AdminLogin from "./routes/AdminLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminAcess from "./routes/AdminAcess";
import RegisterPage from "./routes/RegisterPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Home/>},
      { path:"register", element: <RegisterPage/>},
      { path:"admin", element: <AdminAcess/>}
    ]
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
