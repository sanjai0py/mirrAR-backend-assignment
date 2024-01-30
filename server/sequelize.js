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

sequelize.authenticate().then(() => {
  console.log("Connection established with database");
}).catch((err) => {
  console.log("Unable to connect to database", err);
});

(async () => await sequelize.sync({ alter: true }))();

const Product = ProductModel(sequelize, DataTypes);
const Variant = VariantModel(sequelize, DataTypes);

// Product.hasMany(Variant, {
//   as: "variants",
//   onDelete: "cascade",
// });
