import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "./users.json";

const SignIn = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const user = usersData.find((user) => user.username === username);

    if (user && user.password === password) {
      setError("");
      localStorage.setItem("token", "your-auth-token"); // Set the token in local storage
      setAuthenticated(true); // Update authenticated state
      navigate("/dashboard"); // Redirect to the dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
