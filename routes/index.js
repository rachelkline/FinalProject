const path = require("path");
const router = require("express").Router();
const postRoutes = require("./post");

// All routes go here
router.use();

router.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;