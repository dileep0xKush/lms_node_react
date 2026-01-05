import { createBrowserRouter } from "react-router-dom";
import { isProd } from "../lib/env";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/dashboard/Dashboard";

import ErrorPage from "../pages/system/ErrorPage";
import Users from "../pages/users/Users";
import PublicRoute from "../components/auth/PublicRoute";
import PrivateRoute from "../components/auth/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,

    ...(isProd && { errorElement: <ErrorPage /> }),

    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot", element: <ForgotPassword /> },
    ],
  },

  {
    path: "/",
    element: <PrivateRoute />,

    ...(isProd && { errorElement: <ErrorPage /> }),

    children: [
      {
        path: "dashboard",
        element: <AuthLayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
      {
        path: "users",
        element: <AuthLayout />,
        children: [{ index: true, element: <Users /> }],
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
