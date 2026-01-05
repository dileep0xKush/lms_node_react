import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/dashboard/Dashboard";

import ErrorPage from "../pages/system/ErrorPage";
import Users from "../pages/users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot", element: <ForgotPassword /> },
    ],
  },

  {
    path: "/dashboard",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Dashboard /> }],
  },
  {
    path: "/users",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Users /> }],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
