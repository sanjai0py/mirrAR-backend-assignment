const express = require("express");
const router = express.Router();

const {
  newProduct,
  getProductById,
} = require("../controllers/product.controller");

router.route("/products").post(newProduct);
router.route("/products/:id").get(getProductById);
// router.route("/products/:id").put(updateProduct);
// router.route("/products/:id").delete(deleteProduct);

module.exports = router;
