const express = require("express");
const router = express.Router();

const { searchProducts } = require("../controllers/search.controller");

/**
 * @swagger
 * paths:
 *   /search:
 *     get:
 *       summary: Search products
 *       description: Retrieve a list of products based on one of the available search criteria.
 *       parameters:
 *         - in: query
 *           name: productName
 *           description: The name of the product to search for.
 *           schema:
 *             type: string
 *         - in: query
 *           name: description
 *           description: The description of the product to search for.
 *           schema:
 *             type: string
 *         - in: query
 *           name: variantName
 *           description: The name of the variant to search for.
 *           schema:
 *             type: string
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

router.route("/search").get(searchProducts);

module.exports = router;
