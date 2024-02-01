const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  newProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller");

/**
 * @swagger
 * paths:
 *   /products:
 *     get:
 *       summary: Get all products
 *       description: Retrieve a list of all products with their variants.
 *       responses:
 *         '200':
 *           description: Products retrieved successfully.
 *           content:
 *             application/json:
 *               example:
 *                 message: Products retrieved successfully
 *                 products:
 *                   - product_id: 1
 *                     name: Basketball
 *                     description: A basketball
 *                     price: 200.00
 *                     image: link
 *                     variants:
 *                       - variant_id: 1
 *                         name: Variant 1
 *                         sku: VAR1
 *                         additional_cost: 5.00
 *                         stock_count: 50
 *                       - variant_id: 2
 *                         name: Variant 2
 *                         sku: VAR2
 *                         additional_cost: 8.00
 *                         stock_count: 30
 *                   - product_id: 2
 *                     name: Football
 *                     description: A football
 *                     price: 150.00
 *                     image: link
 *                     variants:
 *                       - variant_id: 3
 *                         name: Variant X
 *                         sku: VARX
 *                         additional_cost: 7.00
 *                         stock_count: 40
 *                       - variant_id: 4
 *                         name: Variant Y
 *                         sku: VARY
 *                         additional_cost: 6.00
 *                         stock_count: 25
 *         '400':
 *           description: Products retrieval failed.
 *           content:
 *             application/json:
 *               example:
 *                 message: Products retrieval failed
 *                 error: 'Detailed error message'
 */
router.route("/products").get(getAllProducts);

/**
 * @swagger
 * paths:
 *   /products:
 *     post:
 *       summary: Create a new product with variants
 *       description: Create a new product and its associated variants.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product_name:
 *                   type: string
 *                   description: The name of the product.
 *                 description:
 *                   type: string
 *                   description: The description of the product.
 *                 price:
 *                   type: number
 *                   description: The price of the product.
 *                 image:
 *                   type: string
 *                   description: The link to the product image.
 *                 variantsData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the variant.
 *                       sku:
 *                         type: string
 *                         description: The SKU of the variant.
 *                       additional_cost:
 *                         type: number
 *                         description: The additional cost of the variant compared to the base product cost.
 *                       stock_count:
 *                         type: integer
 *                         description: The stock count of the variant.
 *       responses:
 *         '201':
 *           description: Product created successfully.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product created successfully
 *                 product:
 *                   product_id: 1
 *                   name: Basketball
 *                   description: A basketball
 *                   price: 200.00
 *                   image: link
 *                   variants:
 *                     - variant_id: 1
 *                       name: Variant 1
 *                       sku: VAR1
 *                       additional_cost: 5.00
 *                       stock_count: 50
 *                     - variant_id: 2
 *                       name: Variant 2
 *                       sku: VAR2
 *                       additional_cost: 8.00
 *                       stock_count: 30
 *         '400':
 *           description: Product creation failed.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product creation failed
 *                 error: 'Detailed error message'
 */
router.route("/products").post(newProduct);

/**
 * @swagger
 * paths:
 *   /products/{id}:
 *     get:
 *       summary: Get a product by ID
 *       description: Retrieve details of a product by its unique identifier.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The ID of the product.
 *           schema:
 *             type: string
 *             format: uuid
 *       responses:
 *         '200':
 *           description: Product retrieved successfully.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product retrieved successfully
 *                 product:
 *                   product_id: 1
 *                   name: Basketball
 *                   description: A basketball
 *                   price: 200.00
 *                   image: link
 *                   variants:
 *                     - variant_id: 1
 *                       name: Variant 1
 *                       sku: VAR1
 *                       additional_cost: 5.00
 *                       stock_count: 50
 *                     - variant_id: 2
 *                       name: Variant 2
 *                       sku: VAR2
 *                       additional_cost: 8.00
 *                       stock_count: 30
 *         '404':
 *           description: Product not found.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product not found
 *         '400':
 *           description: Product retrieval failed.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product retrieval failed
 *                 error: 'Detailed error message'
 */
router.route("/products/:id").get(getProductById);

/**
 * @swagger
 * paths:
 *   /products/{id}:
 *     put:
 *       summary: Update a product by ID
 *       description: Update details of a product by its unique identifier. Can only update the product name, price, and description.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The ID of the product.
 *           schema:
 *             type: string
 *             format: uuid
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product_name:
 *                   type: string
 *                   description: The updated name of the product.
 *                 description:
 *                   type: string
 *                   description: The updated description of the product.
 *                 price:
 *                   type: number
 *                   description: The updated price of the product.
 *                 image:
 *                   type: string
 *                   description: The updated link to the product image.
 *       responses:
 *         '200':
 *           description: Product updated successfully.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product updated successfully
 *                 product:
 *                   product_id: 1
 *                   name: Updated Basketball
 *                   description: Updated A basketball
 *                   price: 250.00
 *                   image: updated-link
 *         '404':
 *           description: Product not found.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product not found
 *         '400':
 *           description: Product update failed.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product update failed
 *                 error: 'Detailed error message'
 */
router.route("/products/:id").put(updateProductById);

/**
 * @swagger
 * paths:
 *   /products/{id}:
 *     delete:
 *       summary: Delete a product by ID
 *       description: Delete a product by its unique identifier.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The ID of the product.
 *           schema:
 *             type: string
 *             format: uuid
 *       responses:
 *         '200':
 *           description: Product deleted successfully.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product deleted successfully
 *         '404':
 *           description: Product not found.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product not found
 *         '400':
 *           description: Product deletion failed.
 *           content:
 *             application/json:
 *               example:
 *                 message: Product deletion failed
 *                 error: 'Detailed error message'
 */
router.route("/products/:id").delete(deleteProductById);

module.exports = router;
