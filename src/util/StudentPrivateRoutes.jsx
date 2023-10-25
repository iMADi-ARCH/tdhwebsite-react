import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function StudentPrivateRoutes() {
  const studentLoggedIn = () => {
    if (localStorage.getItem("tdhAuthToken")) return true;
    else return false;
  };
  return studentLoggedIn() ? <Outlet /> : <Navigate to="/" />;
}
