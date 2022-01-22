import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedPage from "../../motion/animate-page";
import { landingVariants } from "../../motion/variants";
import "./landingPage.css";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home";
    return () => {
      document.title = "";
    };
  }, []);

  return (
    <AnimatedPage>
      <header className="landing-hero">
        <div className="header-container">
          <motion.button
            className="landing-btn"
            variants={landingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
          >
            <Link style={{ color: "white" }} to="/login">
              Play
            </Link>
          </motion.button>
        </div>
      </header>
    </AnimatedPage>
  );
};

export default LandingPage;
