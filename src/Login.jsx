import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get signup data from localStorage
    const savedData = JSON.parse(localStorage.getItem("signupData"));

    if (!savedData) {
      setError("No signup data found. Please sign up first!");
      return;
    }

    if (email === savedData.email && password === savedData.password) {
      setError("");
      console.log("Login successful!");
      navigate("/dashboard"); // redirect to dashboard
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="ml-80 mt-10">
      <h1 className="text-3xl font-bold">Login Here</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-black m-5"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-black m-5"
        />
        <br />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-green-300 border border-black p-2.5"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
