// Auth.js

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage (if available)
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    // Implement your login logic here

    // Assuming successful login, set user data
    const loggedInUser = {
      id: 1, // You can assign a unique ID here, in real apps, this will come from the server.
      email,
      username: "username_placeholder", // Replace with actual username if available
    };
    setUser(loggedInUser);

    // Save user data to LocalStorage
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  const register = (email, password, username) => {
    // Assuming successful registration, set user data
    const newUser = {
      email,
      password,
      username,
    };
    setUser(newUser);

    // Save user data to LocalStorage
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);

    // Remove user data from LocalStorage on logout
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
