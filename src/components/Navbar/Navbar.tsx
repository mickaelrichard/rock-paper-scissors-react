import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/auth";
import { GameContext } from "../../context/game";
import "./navbar.css";
const Navbar = () => {
  const [state, setState] = useContext(UserContext);
  const { resetGameStorage } = useContext(GameContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    resetGameStorage();
    navigate("/");
  };
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="navbar-title">
          ROCK PAPER SCISSORS
        </Link>
        <div className="navbar-links">
          {state.data ? (
            <>
              <span>Hi there, {state.data.username}</span>

              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="btn">
                Signup
              </Link>
              <Link to="/login" className="btn">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
