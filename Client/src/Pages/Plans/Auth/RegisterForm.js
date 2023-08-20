import React, { useState } from "react";
import axios from "axios"; // Import Axios
// import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  // const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("/users/create", {
        email: email,
        password: password,
        username: username,
      });

      // Assuming your server returns a success message upon successful registration
      if (response.data.message === "Registration successful") {
        // Optionally, you can call your login function here
        // to automatically log in the user after registration.
        // For example: login(email, password);

        // Navigate to the home page ("/") after successful registration
        navigate("/");
      } else {
        // Handle registration failure (e.g., display an error message)
      }
    } catch (error) {
      // Handle network errors or server errors here
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <div className="w-64">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 mb-2 rounded border"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 mb-2 rounded border"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 rounded border"
        />
        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
