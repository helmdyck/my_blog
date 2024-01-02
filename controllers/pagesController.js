const { Article, Category } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({
    include: Category // Incluye el modelo Category
  });
  res.json({ articles });
}

async function showCategory(req, res) {
  const articles = await Article.findAll({ where: { categoryId: req.params.id } })
  res.json({ articles });
}

async function index(req, res) {
  const categories = await Category.findAll()
  res.json({ categories });
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showCategory,
  index,
};
