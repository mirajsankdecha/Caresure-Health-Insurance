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
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-indigo-200">
      <div className="flex md:w-1/2 p-8 bg-white rounded shadow-md">
        <div className="w-1/2 hidden md:block">
          <div className="relative overflow-hidden h-full">
         
            <img
              src="https://img.freepik.com/premium-vector/man-with-insurance_118813-9057.jpg?w=900"
              alt="Login"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
          <div className="mb-4">
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-none outline-none px-3 py-2 "
                placeholder="Username"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none outline-none px-3 py-2 "
                placeholder="Password"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              onClick={handleSignIn}
              className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Sign In
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
