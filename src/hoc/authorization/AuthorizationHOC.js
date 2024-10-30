import React from "react";
import { useContext } from "react";
import { AuthContext } from "~/contexts/auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function AuthorizationHOC({ page, redirect, hasRole }) {
  const { roles } = useContext(AuthContext);

  if (roles.includes(hasRole)) {
    return page;
  }

  return <Navigate to={redirect} />;
}
