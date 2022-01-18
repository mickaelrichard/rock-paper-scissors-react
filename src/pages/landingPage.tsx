import { Link } from "react-router-dom";
const landingPage = () => {
  return (
    <>
      <header className="hero">
        <div className="header-container">
          <button className="play-btn">
            <Link style={{color:"white"}} to="/login">Play</Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default landingPage;
