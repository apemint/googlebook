const router = require("express").Router();
const Controller = require("../../controllers/booksController");

//matches with "api/books"
router.route("/")
  .get(Controller.findAll)
  .post(Controller.create);

// matches with "/api/books/:id"
router
  .route("/:id")
  .delete(Controller.remove);

module.exports = router;