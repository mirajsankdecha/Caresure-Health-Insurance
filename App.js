import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminApp from "./admin/AdminApp"; // Import the AdminApp component
import ClientApp from "./client/App"; // Import the ClientApp component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/client/*" element={<ClientApp />} />
      </Routes>
    </Router>
  );
};

export default App;
