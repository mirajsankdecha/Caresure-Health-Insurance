import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Navigate to the home page ("/") after successful logout
  };

  return (
    <div>
      <h2>You are now logged out.</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logout;
