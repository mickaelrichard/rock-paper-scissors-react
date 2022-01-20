import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game, Login, Signup, LandingPage, NotFound } from "./pages";
import { Navbar } from "./components";
import { ProtectedRoute } from "./helpers/protected-route";
import { UnProtectedRoute } from "./helpers/unprotected-route";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
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
      </div>
    </Router>
  );
};

export default App;
