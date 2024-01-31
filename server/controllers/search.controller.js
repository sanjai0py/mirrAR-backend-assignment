const express = require("express");
const router = express.Router();
const Op = require("sequelize").Op;

const asyncHandler = require("../middlewares/asyncHandler");

const { Product } = require("../sequelize");

const searchProducts = asyncHandler(async (req, res) => {
  const { productName, description, variantName } = req.query;

  if (productName) {
    const products = await Product.findAll({
      where: {
        name: { [Op.iLike]: `%${productName}%` },
        description: { [Op.iLike]: `%${description}%` },
      },
    });

    res.status(200).json({
      message: "Products retrieved successfully",
      products,
    });
  }
});

module.exports = {
  searchProducts,
};
