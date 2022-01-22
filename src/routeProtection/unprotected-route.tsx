import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/auth";
import Loader from "../motion/Loader";

export const UnProtectedRoute = () => {
  const { user } = useContext(UserContext);

  if (user.loading) return <Loader />;

  return !user.data ? <Outlet /> : <Navigate to="/game" />;
};
