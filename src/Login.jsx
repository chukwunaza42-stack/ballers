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
    <div className="bg-[url('https://wallpapers.com/images/featured/football-players-hd-emqpbm760h1avxrx.jpg')] min-h-screen bg-cover bg-center"> 
      <h1 className="text-3xl font-bold text-white text-center">Login Here</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-white ml-10 text-white mt-5"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-white ml-10 text-white mt-5"
        />
        <br />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-green-300 border border-white p-2.5 m-11 text-white font-bold "
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
