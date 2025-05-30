import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.email) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
