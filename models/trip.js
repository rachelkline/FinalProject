const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: { type: String, require: true },
    location: { type: String, require: true },
    tripLength: { type: Number, require: true },
    budget: { type: Number },
    budgetLog: {type: String },
    itinerary: { type: String },
    date: { type: Date, default: Date.now }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;