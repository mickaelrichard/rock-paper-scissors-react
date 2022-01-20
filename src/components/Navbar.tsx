import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/auth";
const Navbar = () => {
  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="nav-title">
          ROCK PAPER SCISSORS
        </Link>
        <div className="links">
          {state.data ? (
            <>
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
              <Link to="/game" className="btn">
                Game
              </Link>
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
