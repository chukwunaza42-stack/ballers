import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Load saved form data when component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("signupData"));
    if (savedData) {
      setUsername(savedData.username || "");
      setEmail(savedData.email || "");
      setPassword(savedData.password || "");
      setConfirmPassword(savedData.confirmPassword || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // clear error if everything is valid

    const userData = { username, email, password, confirmPassword };
    localStorage.setItem("signupData", JSON.stringify(userData)); // persist data

    console.log("User signed up:", userData);

    navigate("/dashboard");
  };

  const isFormValid =
    username &&
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    password.length >= 6;

  return (
    <div className="bg-[url('https://th.bing.com/th/id/R.00bb4399bcd65ffb1ef0a6b2ee7bbaf9?rik=bHTakzHLj65PdQ&pid=ImgRaw&r=0')] min-h-screen bg-cover bg-center">
      <div className="">
        <h1 className="text-3xl font-bold text-white ml-2.5">Sign Up Here To Join</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border m-5 border-gray-50 text-white"
          />
          <br />
          <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
            className="border m-5 border-gray-50 text-white"
          />
          <br />
          <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border m-5 border-gray-50 text-white"
          />
          <br />
          <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="border m-5 border-gray-50 text-white"
          />
          <br />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className={`p-2.5 border ml-2.5 border-black ${
            isFormValid ? "bg-green-300" : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
          >
          SIGN UP
          </button>
        </form>
     </div>
    </div>
  );
}

export default SignUp;
