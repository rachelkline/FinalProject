const router = require("express").Router();
const userRoutes = require("./users");

//Post routes
router.use("/api/signup", userRoutes);

module.exports = router;