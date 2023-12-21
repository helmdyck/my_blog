const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Higiene íntima",
    },
    {
      name: "Juguetes",
    },
    {
      name: "Salud sexual",
    },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Category.");
};