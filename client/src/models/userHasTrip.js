const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userHasTripSchema = new Schema ({
    user_id: { user_id },
    trips: [
        { trip_id },
    ]
});

const userHasTrip = mongoose.model("userHasTrip", userHasTripSchema);

module.exports = userHasTrip;