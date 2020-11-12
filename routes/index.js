const path = require("path");
const router = require("express").Router();
const tripRoutes = require("./trip");

// All routes go here
router.use("/api", tripRoutes);

router.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;