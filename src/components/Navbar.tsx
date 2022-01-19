import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>ROCK PAPER SCISSORS</h1>
        <div className="links">
          {/* <Link to="/game">Game</Link>
          <span>Hi there username</span> */}
          {/* <button>Logout</button> */}
          <Link to="/signup" className="btn">
            Signup
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
