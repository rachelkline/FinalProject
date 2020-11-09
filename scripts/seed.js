const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groupTrip");

const userSeed = [
    {
        email: "test@test.com",
        password: "testPass",
        firstName: "Rachel",
        lastName: "Kline"
    },
    {
        email: "hey@email.com",
        password: "testingPass",
        firstName: "Mark",
        lastName: "Roberts"
    }
];

db.User.insertMany(userSeed)
.then(data => {
    console.log(data);
})