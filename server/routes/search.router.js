const express = require("express");
const router = express.Router();

const { searchProducts } = require("../controllers/search.controller");

router.route("/search").get(searchProducts);

module.exports = router;
