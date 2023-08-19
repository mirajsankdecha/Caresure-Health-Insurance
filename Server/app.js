const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://mirajsankdecha:Miraj123@mongo.ks9wvwp.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Routes
app.use("/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
