const express = require("express");
const router = express.Router();
const creatorController = require("../controllers/creatorController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", creatorController.index);
router.get("/crear", creatorController.create);
router.post("/", creatorController.store);
router.get("/:id", creatorController.show);
router.get("/:id/editar", creatorController.edit);
router.patch("/:id", creatorController.update);
router.delete("/:id", creatorController.destroy);

module.exports = router;
