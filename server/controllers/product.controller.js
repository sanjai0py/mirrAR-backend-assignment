const asyncHandler = require("../middlewares/asyncHandler");
const createProductWithVariants = require("../utils/createProductWithVarient");

const { Product } = require("../sequelize");

// get all products
const getAllProducts = asyncHandler((req, res) => {
  Product.findAll({ include: ["variants"] })
    .then((products) => {
      res.status(200).json({
        message: "Products retrieved successfully",
        products,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Products retrieval failed",
        error,
      });
    });
});

const newProduct = asyncHandler((req, res) => {
  /* req.body should look like this...
      {
        product_name: "Basketball",
        description: "A basketball",
        price: 200.00,
        image:link
        variantsData:[
            {
                name: 'Variant 1',
                sku: 'VAR1',
                additional_cost: 5.00,
                stock_count: 50,
            },
            {
                name: 'Variant 2',
                sku: 'VAR2',
                additional_cost: 8.00,
                stock_count: 30,
            },
        ];
      }
    */

  const { product_name, price, description, image, variantsData } = req.body;
  const productData = { name: product_name, price, description, image };

  createProductWithVariants(productData, variantsData)
    .then((product) => {
      res.status(201).json({
        message: "Product created successfully",
        product,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Product creation failed",
        error,
      });
    });
});

// get product by id
const getProductById = asyncHandler((req, res) => {
  /* req should look like this...
     http://localhost:5000/api/v1/products/b44ed9d4-b574-451e-9d7c-951db0110027
    */

  const { id } = req.params;

  Product.findByPk(id, { include: ["variants"] })
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      res.status(200).json({
        message: "Product retrieved successfully",
        product,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Product retrieval failed",
        error,
      });
    });
});

// this can only update the product name, price, and description

// todo: update variants
const updateProductById = asyncHandler((req, res) => {
  /* req.body should look like this...
      {
        product_name: "Basketball",
        description: "A basketball",
        price: 200.00,
        image:link
      }
    */

  const { id } = req.params;
  const { product_name, price, description, image } = req.body;
  const productData = { name: product_name, price, description, image };

  Product.findByPk(id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      product
        .update(productData)
        .then((updatedProduct) => {
          res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct,
          });
        })
        .catch((error) => {
          res.status(400).json({
            message: "Product update failed",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Product retrieval failed",
        error,
      });
    });
});

const deleteProductById = asyncHandler((req, res) => {
  /* req should look like this...
     http://localhost:5000/api/v1/products/b44ed9d4-b574-451e-9d7c-951db0110027
    */

  const { id } = req.params;

  Product.findByPk(id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      product
        .destroy()
        .then(() => {
          res.status(200).json({
            message: "Product deleted successfully",
          });
        })
        .catch((error) => {
          res.status(400).json({
            message: "Product deletion failed",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Product retrieval failed",
        error,
      });
    });
});

module.exports = {
  getAllProducts,
  newProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
