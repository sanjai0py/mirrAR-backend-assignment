const Product = (sequelize, DataTypes) => {
  return sequelize.define("Product", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: "https://via.placeholder.com/150",
    },
  });
};

module.exports = Product;
