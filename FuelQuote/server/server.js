const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
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
app.use('/api/Profile', require('./Routes/ProfileRoutes'));
app.use('/api/FuelQuote', require('./Routes/FuelQuote'));
app.use('/api/UserLogin',require('./routes/login'));
app.use('/api/Register', require('./routes/register')) ;

// Port
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});