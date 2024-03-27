const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/user', require('./routes/user'));
app.use('/api/fuelQuote', require('./routes/fuelQuote'));
app.use('/api/userLogin',require('./routes/login'));

// Port
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});