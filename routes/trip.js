const router = require("express").Router();
const tripController = require("../controllers/postController");

// Post API Routes go here
// /api/posts/
router.route("/trip")
	.get(tripController.findAll)
	.post(tripController.create);

// /api/posts/:id routes only
router.route("/trip/:id")
	.get(tripController.findById)
	.put(tripController.update)
	.delete(tripController.remove)

module.exports = router;