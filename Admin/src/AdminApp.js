import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminNavbar from "./components/Navbar/AdminNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ManagePlans from "./components/ManagePlans/ManagePlans";
import ManageClaims from "./components/ManageClaims/ManageClaims";
import Transactions from "./components/Transactions/Transactions";
import UsersList from "./components/UsersList/UsersList";
import SignIn from "./components/Auth/SignIn";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Navbar/Profile";
import Settings from "./components/Navbar/Settings";
import Notifications from "./components/Navbar/Notifications";
import Messages from "./components/Navbar/Messages";

const AdminApp = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 overflow-x-hidden overflow-y-auto ${
            sidebarOpen ? "ml-64" : ""
          }`}
        >
          <AdminNavbar toggleSidebar={toggleSidebar} />
          <div className="container mx-auto p-4">
            <Routes>
              <Route
                path="/"
                element={
                  authenticated ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <Navigate to="/signin" replace />
                  )
                }
              />
              <Route
                path="/signin"
                element={<SignIn setAuthenticated={setAuthenticated} />}
              />
              <Route
                path="/dashboard"
                element={
                  authenticated ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/signin" replace />
                  )
                }
              />
              <Route path="/manage-plans" element={<ManagePlans />} />
              <Route path="/manage-claims" element={<ManageClaims />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/user-list" element={<UsersList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AdminApp;
