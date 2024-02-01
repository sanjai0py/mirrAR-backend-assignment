const { Sequelize, DataTypes } = require("sequelize");
const ProductModel = require("./models/Product.model");
const VariantModel = require("./models/Variant.model");
// const {
//   updateVarientVector,
//   updateProductVector,
// } = require("./utils/searchVectorUtils");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established with database");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });

(async () => await sequelize.sync({ alter: true }))();

const Product = ProductModel(sequelize, DataTypes);
const Variant = VariantModel(sequelize, DataTypes);

// async function updateVarientVector(variant) {
//   try {
//     const updatedVariant = await Variant.findByPk(variant.id);
//     console.log(updatedVariant);
//     if (updatedVariant) {
//       const { name } = updatedVariant;
//       const search_vector = Sequelize.literal(
//         `to_tsvector('english', '${name}')`
//       );
//       await Variant.update(
//         { search_vector },
//         { where: { id: updatedVariant.id } }
//       );
//     }
//   } catch (error) {
//     console.error("Error updating search_vector:", error);
//   }
// }

async function updateProductVector(product) {
  try {
    const updatedProduct = await Product.findByPk(product.id);
    console.log(updatedProduct);
    if (updatedProduct) {
      const { name, description } = updatedProduct;
      const search_vector = Sequelize.literal(
        `to_tsvector('english', '${name} ${description}')`
      );
      await Product.update(
        { search_vector },
        { where: { id: updatedProduct.id } }
      );
    }
  } catch (error) {
    console.error("Error updating search_vector:", error);
  }
}

// hooks
Product.beforeCreate((product) => {
  updateProductVector(product);
});

Product.beforeUpdate((product) => {
  updateProductVector(product);
});

// Variant.beforeCreate((variant) => {
//   updateVarientVector(variant);
// });

// Variant.beforeUpdate((variant) => {
//   updateVarientVector(variant);
// });

// one to many relationship between product and variant
Product.hasMany(Variant, {
  as: "variants",
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// one to one relationship between variant and product
Variant.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

module.exports = {
  Product,
  Variant,
  sequelize, //for creating transactions
};
