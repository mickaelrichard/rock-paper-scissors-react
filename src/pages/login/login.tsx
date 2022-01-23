import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import AnimatedPage from "../../motion/animate-page";
import { UserContext } from "../../context/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const isInvalid =
    (email === "" && !email.includes("@" && ".")) || password === "";

  useEffect(() => {
    document.title = "Login";
    return () => {
      document.title = "";
    };
  }, []);

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: response } = await axios.post(
        "https://rock-paper-scissors-job-api.herokuapp.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      setUser({
        data: {
          id: response.data.user.id,
          email: response.data.user.email,
          username: response.data.user.username,
        },
        loading: false,
        error: null,
      });

      localStorage.setItem("token", response.data.token);

      axios.defaults.headers.common[
        "authorization"
      ] = `Bearer ${response.data.token}`;

      setLoading(false);
      navigate("/game");
    } catch (error: any) {
      setTimeout(() => {
        setError("");
      }, 5000);

      setError(error.response.data.errors[0].msg);
      setLoading(false);
    }
  };

  return (
    <AnimatedPage>
      <form onSubmit={loginHandler}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="error"> {error}</div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 1000 }}
          disabled={loading || isInvalid}
        >
          Login
        </motion.button>
      </form>
    </AnimatedPage>
  );
}
