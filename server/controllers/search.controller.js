const express = require("express");
const router = express.Router();
const { Op, literal } = require("sequelize");

const asyncHandler = require("../middlewares/asyncHandler");
const { Product, Variant } = require("../sequelize");

const searchProducts = asyncHandler(async (req, res) => {
  const { query } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          literal(`to_tsvector('english', name) @@ to_tsquery('english', :query)`),
          literal(`to_tsvector('english', description) @@ to_tsquery('english', :query)`),
        ],
      },
      include: [
        {
          model: Variant,
          as: "variants",
          attributes: ["name", "sku", "additional_cost", "stock_count"],
        },
      ],
      attributes: ["id", "name", "description", "price", "image"],
      replacements: { query },
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
