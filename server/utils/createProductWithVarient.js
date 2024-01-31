const { Product, Variant, sequelize } = require("../sequelize");

const createProductWithVariants = async (productData, variantsData) => {
  let transaction;

  try {
    // Start a transaction
    transaction = await sequelize.transaction();

    // Create the product
    const product = await Product.create(productData, { transaction });

    console.log("product", product);
    // Create variants associated with the product
    await Promise.all(
      variantsData.map((variant) =>
        Variant.create({ ...variant, product_id: product.id }, { transaction })
      )
    );

    // Commit the transaction
    await transaction.commit();

    return product;
  } catch (error) {
    // Rollback the transaction in case of an error
    if (transaction) await transaction.rollback();
    throw error;
  }
};

module.exports = createProductWithVariants;
