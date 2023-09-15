const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel"); // Import your admin model

// Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the admin by username
    const admin = await Admin.findOne({ username });

    // If the admin does not exist, return an error
    if (!admin) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (passwordMatch) {
      // Generate a JWT token for authentication
      const token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET);

      return res.status(200).json({ authenticated: true, token });
    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
