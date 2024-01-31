const Variant = (sequelize, DataTypes) => {
  return sequelize.define("Variant", {
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
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    additional_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  });
};

module.exports = Variant;
