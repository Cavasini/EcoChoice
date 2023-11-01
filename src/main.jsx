import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/index.scss"
import App from "./App.jsx";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Home/>},
    ]
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
