require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//  ROUTES IMPORT
const products = require("./routes/product.router");
const search = require("./routes/search.router");

const { specs, swaggerUi } = require('./config/swagger.config');

// PORT
const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/v1", products);
app.use("/api/v1/", search);

// ERROR HANDLER
app.use(require("./middlewares/errorHandler"));

// LISTEN
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;