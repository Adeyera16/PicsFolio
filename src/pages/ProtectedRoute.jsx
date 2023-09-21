import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ currentUser, children }) => {
  if (currentUser) {
    // If user is authenticated, render the component
    return children;
  } else {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
