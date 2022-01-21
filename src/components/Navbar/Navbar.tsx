import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { navVariants, hoverVariants } from "../../motion/variants";
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
    <motion.div
      className="navbar"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <nav>
        <Link to="/" className="navbar-title">
          ROCK PAPER SCISSORS
        </Link>
        <div className="navbar-links">
          {state.data ? (
            <>
              <span>Hi there, {state.data.username}</span>

              <motion.button
                onClick={handleLogout}
                className="btn"
                variants={hoverVariants}
                whileHover="hover"
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <motion.div variants={hoverVariants} whileHover="hover">
                <Link className="btn" to="/signup">
                  Signup
                </Link>
              </motion.div>
              <motion.div variants={hoverVariants} whileHover="hover">
                <Link className="btn" to="/login">
                  Login
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
