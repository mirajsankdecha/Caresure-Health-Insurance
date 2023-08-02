// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Plans from "./Pages/Plans/Plans";
import PlanDetailPage from "./Pages/Plans/PlanDetailPage";
import Renew from "./Pages/Renew/Renew";
import Claims from "./Pages/Claims/Claims";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Error from "./Pages/Error/Error";
import { AuthProvider } from "./Pages/Plans/Auth/Auth";
import Logout from "./Pages/Plans/Auth/Logout"; // Add the Logout component

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFCF8]">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/:id" element={<PlanDetailPage />} />
          <Route path="/renew" element={<Renew />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />{" "}
          {/* Add the Logout route */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
