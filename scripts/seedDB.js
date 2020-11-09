const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/myTrip"
  );


const tripSeed = [
    {
      users: [{}],
      name:"Florida Trip",
      location: "Miami",
      tripLength: 5,
      budget: 1000,
      budgetLog: "Add $100",
      itinerary: "Do something",

    }
];

db.Trip.remove({})
    .then(() => db.Trip.collection.insertMany(tripSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })