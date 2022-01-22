import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedPage from "../../motion/animate-page";
import "./not-found.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Error";
    return () => {
      document.title = "";
    };
  }, []);
  return (
    <AnimatedPage>
      <div className="not-found-countainer">
        <>
          <img
            src={"/not-found.svg"}
            alt="not found"
            className="not-found-image"
          />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 1000 }}
          >
            <Link className="btn" to="/">
              back home
            </Link>
          </motion.div>
        </>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
