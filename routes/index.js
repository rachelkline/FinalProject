const path = require("path");
const router = require("express").Router();
const tripRoutes = require("./trip");
const userRoutes = require("./user/users");

// All routes go here
router.use("/api/trip", tripRoutes);
router.use("/api/signup", userRoutes);

router.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;