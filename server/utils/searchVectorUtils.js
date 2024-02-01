// const { Sequelize } = require("sequelize");

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

// async function updateProductVector(product) {
//   try {
//     const updatedProduct = await Product.findByPk(product.id);
//     console.log(updatedProduct);
//     if (updatedProduct) {
//       const { name, description } = updatedProduct;
//       const search_vector = Sequelize.literal(
//         `to_tsvector('english', '${name} ${description}')`
//       );
//       await Product.update(
//         { search_vector },
//         { where: { id: updatedProduct.id } }
//       );
//     }
//   } catch (error) {
//     console.error("Error updating search_vector:", error);
//   }
// }

// module.exports = {
//   updateVarientVector,
//   updateProductVector,
// };
