import React from "react";
import { useAuth } from "./Auth";

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
