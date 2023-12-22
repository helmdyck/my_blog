const { Article, Creator } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

// Display a listing of the resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, { include: Creator });
  const date = format(article.createdAt, "dd 'de' MMMM, yyyy.");

  res.json({ article, date });
}

async function index(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
