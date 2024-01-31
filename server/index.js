require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//  ROUTES IMPORT
const products = require("./routes/product.router");

// PORT
const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", products);

// LISTEN
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
