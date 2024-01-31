const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  newProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller");

router.route("/products").get(getAllProducts);
router.route("/products").post(newProduct);
router.route("/products/:id").get(getProductById);
router.route("/products/:id").put(updateProductById);
router.route("/products/:id").delete(deleteProductById);

module.exports = router;
