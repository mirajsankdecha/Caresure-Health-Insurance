// admin/components/AdminNavbar.js

import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-semibold">
          Caresure Health Insurance Admin
        </Link>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/manage-plans">Manage Plans</Link>
          </li>
          <li>
            <Link to="/manage-claims">Manage Claims</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
