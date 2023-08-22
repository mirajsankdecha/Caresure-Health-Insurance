const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const planRoutes = require("./routes/planRoutes");
require("dotenv").config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB using the MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/users", userRoutes);
app.use("/plans", planRoutes);

// Start the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
