import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar.js";
import Home from "./Pages/Home/Home.js";
import Plans from "./Pages/Plans/Plans.js";
import Renew from "./Pages/Renew/Renew.js";
import Claims from "./Pages/Claims/Claims.js";
import About from "./Pages/About/About.js";
import Footer from "./Pages/Footer/Footer.js"; 
import Error from "./Pages/Error/Error.js";
const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#FBFCF8]">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/renew" element={<Renew />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
