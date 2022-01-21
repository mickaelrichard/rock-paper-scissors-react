import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { navVariants, hoverVariants } from "../../motion/variants";
import { UserContext } from "../../context/auth";
import { GameContext } from "../../context/game";
import "./navbar.css";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const { resetGameStorage } = useContext(GameContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({ data: null, loading: false, error: null });
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
        <h1 className="navbar-title">
          <Link to="/">ROCK PAPER SCISSORS </Link>
        </h1>

        <div className="navbar-links">
          {user.data ? (
            <>
              <span>Hi there, {user.data.username}</span>

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
