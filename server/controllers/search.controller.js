const express = require("express");
const router = express.Router();
const Op = require("sequelize").Op;

const asyncHandler = require("../middlewares/asyncHandler");

const { Product } = require("../sequelize");

const searchProducts = asyncHandler(async (req, res) => {
  const { productName, description, variantName } = req.query;

  try {
    let whereClause = {};

    if (productName) {
      whereClause.name = { [Op.iLike]: `%${productName}%` };
    }

    if (description) {
      whereClause.description = { [Op.iLike]: `%${description}%` };
    }

    if (variantName) {
      whereClause["$variants.name$"] = { [Op.iLike]: `%${variantName}%` };
    }

    const products = await Product.findAll({
      where: whereClause,
      include: ["variants"],
    });

    res.status(200).json({
      message: "Products retrieved successfully",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = {
  searchProducts,
};
