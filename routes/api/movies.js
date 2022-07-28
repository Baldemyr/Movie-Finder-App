const router = require("express").Router();
// const gameController = require("../../controllers/gameController");

// Matches with "/api/game"
// router.route("/")
  .get(gameController.findAll)
  .post(gameController.create);

// Matches with "/api/game/:id"
// router
  .route("/:id")
  .get(gameController.findById)
  .put(gameController.update)
  .delete(gameController.remove);

module.exports = router;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy