const Variant = (sequelize, DataTypes) => {
  return sequelize.define("Variant", {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // SKU:{
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     }
    // }
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stockCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  });
};

module.exports = {
  Variant,
};
