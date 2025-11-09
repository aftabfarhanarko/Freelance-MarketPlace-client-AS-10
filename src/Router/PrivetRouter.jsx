import React from "react";
import { useAuth } from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/register"></Navigate>;
  }
};

export default PrivetRouter;
