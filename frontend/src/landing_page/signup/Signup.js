import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/signup", {
        username,
        email,
        password,
      });

      alert(res.data.message);

      // ✅ Dashboard redirect
      window.location.href = "http://localhost:3001/";
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      {/* 🔹 Top Navbar */}
      <header className="navbar">
        <div className="navbar-content">
       
          <h1>Zerodha Clone</h1>
        </div>
      </header>

      {/* 🔹 Signup Form */}
      <div className="signup-wrapper">
        <div className="signup-card">
          <h2>Create Your Account</h2>
          <p className="subtitle">Sign up to access your dashboard</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
