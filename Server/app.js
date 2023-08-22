const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const planRoutes = require("./routes/planRoutes");

const app = express();
const port = 5000;
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://mirajsankdecha:Miraj123@mongo.ks9wvwp.mongodb.net/insurance?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Routes
app.use("/users", userRoutes);
app.use("/plans", planRoutes);

// Start the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
