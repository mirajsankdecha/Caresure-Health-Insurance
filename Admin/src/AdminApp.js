// admin/AdminApp.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/Navbar/AdminNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ManagePlans from "./components/ManagePlans/ManagePlans";
import ManageClaims from "./components/ManageClaims/ManageClaims";

const AdminApp = () => {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-plans" element={<ManagePlans />} />
            <Route path="/manage-claims" element={<ManageClaims />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminApp;
