import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/auth";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  const isInvalid = email === "" || password === "";

  useEffect(() => {
    document.title = "Login";
  }, []);

  const loginHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: response } = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
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

      setLoading(false);
    }
  };

  return (
    <div>
      <form>
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
        <button disabled={loading || isInvalid} onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
}
