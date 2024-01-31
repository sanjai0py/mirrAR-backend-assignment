const asyncHandler = require("../middlewares/asyncHandler");
const createProductWithVariants = require("../utils/createProductWithVarient");

const newProduct = asyncHandler((req, res) => {
  /* req.body should look like this...
      {
        product_name: "Basketball",
        description: "A basketball",
        price: 200.00,
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

  const { product_name, price, description, variantsData } = req.body;
  const productData = { name: product_name, price, description };

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

const getProductById = asyncHandler((req, res) => {
  res.send("getProductById");
});

module.exports = {
  newProduct,
  getProductById,
};
