const express = require("express");

const app = express();

const cors = require("cors");

//imported routes for login & signUp here
const userRoutes = require('./routes/user')

// Importing fuel quote routes
const fuelQuoteRoutes = require('./routes/fuelQuote')

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

// May not need
app.use(require("./routes/record"));

// Get MongoDB driver connection
const dbo = require("./database/conn");
 
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//resgister routes for login & signUp here
app.use('/api/user', userRoutes)

// Registering routes for Fuel Quotes
app.use('/api/fuelQuote', fuelQuoteRoutes)

app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});