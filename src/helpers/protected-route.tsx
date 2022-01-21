import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/auth";
import Loader from "../motion/Loader";

export const ProtectedRoute = () => {
  const [state] = useContext(UserContext);

  if (state.loading) return <Loader />;

  return state.data ? <Outlet /> : <Navigate to="/" />;
};
