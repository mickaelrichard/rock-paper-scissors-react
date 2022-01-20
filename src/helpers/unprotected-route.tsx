import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/auth";

export const UnProtectedRoute = () => {
  const [state] = useContext(UserContext);

  if (state.loading) return <div>Spinner...</div>;

  return !state.data ? <Outlet /> : <Navigate to="/game" />;
};
