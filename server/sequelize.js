const { Sequelize, DataTypes } = require("sequelize");
const ProductModel = require("./models/Product.model");
const VariantModel = require("./models/Variant.model");

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
