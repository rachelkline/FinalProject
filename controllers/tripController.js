const db = require("../models");

module.exports = {
	findAll: (req, res) => {
		db.Trip
			.find({})
			.then(tripData => {
				res.json(tripData);
			})
			.catch(err => console.log(err));
	},
	findById: (req, res) => {
		db.Trip
			.findById(req.params.id)
			.then(tripData => {
				res.json(tripData)
			})
			.catch(err => console.log(err));
	},
	create: (req, res) => {
		db.Trip
			.create(req.body)
			.then(tripData => {
			  res.json(tripData)
			})
			.catch(err => console.log(err));
	},
	update: (req, res) => {
		db.Trip
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(tripData => {
				res.json(tripData)
			})
			.catch(err => console.log(err));
	},
	remove: (req, res) => {
		db.Trip
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(tripData => {
				res.json(tripData)
			})
			.catch(err => console.log(err));
	}
}