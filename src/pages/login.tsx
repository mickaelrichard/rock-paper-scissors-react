import { useState } from "react";

export default function Login() {
  // const [username, setUsername] = useState("");
  // const [emailAddress, setEmailAddress] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const isInvalid = password === "" || emailAddress === "";

  return (
    <div>
      <form>
        <h2>Login</h2>
        <input type="text" placeholder="Display username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <div className="error"></div> */}
        <button>Login</button>
        {/* <button disabled>Loading</button> */}
      </form>
    </div>
  );
}
