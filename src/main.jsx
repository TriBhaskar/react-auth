import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Layout from "./components/Layout.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="" element={<Layout />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="otp" element={<VerifyEmail />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
