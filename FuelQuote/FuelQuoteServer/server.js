const express = require("express");
const errorHandler = require("./middleware/errorHandler")
const app = express();

const cors = require("cors");

//imported routes for login & signUp here
const userRoutes = require('./routes/user')

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(require("./routes/record"));
//resgister routes for login & signUp here
app.use('/api/user', userRoutes)

// Error Handler
app.use(errorHandler)
// Get MongoDB driver connection
const dbo = require("./database/conn");
 
app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});