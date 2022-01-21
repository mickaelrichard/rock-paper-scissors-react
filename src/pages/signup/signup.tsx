import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import AnimatedPage from "../../motion/animate-page";
import { UserContext } from "../../context/auth";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setState = useContext(UserContext)[1];
  const navigate = useNavigate();

  const isInvalid = password === "" || email === "" || password === "";

  useEffect(() => {
    document.title = "Signup";
  }, []);

  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      setLoading(false);
      return setError("Passwords do not match");
    }

    try {
      const { data: response } = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      setState({
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
      setConfirmPassword("");
      setLoading(false);
    }
  };

  return (
    <AnimatedPage>
      <form>
        <h2>Sign up</h2>
        <input
          type="text"
          placeholder="Display username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="error"> {error}</div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 1000 }}
          disabled={loading || isInvalid}
          onClick={registerHandler}
        >
          Sign up
        </motion.button>
      </form>
    </AnimatedPage>
  );
}
