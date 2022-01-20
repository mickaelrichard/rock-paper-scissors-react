import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./landingPage.css";
const LandingPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <header className="landing-hero">
        <div className="header-container">
          <button className="landing-btn">
            <Link style={{ color: "white" }} to="/login">
              Play
            </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
