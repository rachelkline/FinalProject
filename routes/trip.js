const router = require("express").Router();
const tripController = require("../controllers/tripController");

// Post API Routes go here
// /api/posts/
router.route("/trip")
	// .get(tripController.findAll)
	.get(tripController.findByUser)
	.post(tripController.create);

// /api/posts/:id routes only
router.route("/trip/:id")
	.get(tripController.findById)
	
	.put(tripController.update)
	.delete(tripController.remove)

module.exports = router;