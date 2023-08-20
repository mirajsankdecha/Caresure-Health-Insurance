import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./Auth";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Send a POST request to your server for authentication
      const response = await axios.post("/users/login", {
        username,
        password,
      });

      // Assuming your server responds with a user object on successful login
      const user = response.data;

      // Call the login function with the user object (if provided by your Auth context)
      login(user);

      // Redirect or perform any other action upon successful login
      // For example, you can use the useHistory hook from react-router-dom to navigate to another page:
      // import { useHistory } from "react-router-dom";
      // const history = useHistory();
      // history.push("/dashboard");
    } catch (error) {
      // Handle authentication failure (e.g., display an error message)
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          {/* Add a link to the RegisterForm page */}
          <Link
            to="/register" // This should match the path of the RegisterForm route
            className="text-blue-500 hover:text-blue-700 font-bold"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
