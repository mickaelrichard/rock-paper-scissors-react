import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Game, Login, Signup, LandingPage, NotFound } from "./pages";
import { UnProtectedRoute } from "./routeProtection/unprotected-route";
import { ProtectedRoute } from "./routeProtection/protected-route";
import { Navbar } from "./components";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="content">
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game" element={<ProtectedRoute />}>
              <Route path="/game" element={<Game />} />
            </Route>
            <Route path="/login" element={<UnProtectedRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/signup" element={<UnProtectedRoute />}>
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
