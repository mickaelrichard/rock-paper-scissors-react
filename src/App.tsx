import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game, Login, Signup, LandingPage } from "./pages";
import { Navbar } from "./components";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
