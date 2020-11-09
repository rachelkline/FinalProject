const router = require("express").Router();
const userController = require("../../controllers/userController");

//Matches with "/api/signup"
router
    .route("/api/signup")
    .post(userController.create);
