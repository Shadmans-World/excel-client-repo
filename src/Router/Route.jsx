import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import AgentDashboard from "../pages/agent/AgentDashboard";
import PrivateRoute from "../components/PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin-dashboard",
        element: (
          <PrivateRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/customer-dashboard",
        element: (
          <PrivateRoute allowedRoles={["customer"]}>
            <CustomerDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/agent-dashboard",
        element: (
          <PrivateRoute allowedRoles={["delivery agent"]}>
            <AgentDashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
