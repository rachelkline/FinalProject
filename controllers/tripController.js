const db = require("../models");
const mongoose = require("mongoose");

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
			.findById({_id: req.params.id})
			.then(tripData => {
				res.json(tripData)
			})
			.catch(err => console.log(err));
	},
	findByUser: (req, res) => {
		user = `ObjectId("${req.user._id}")`
		console.log(req.user._id)
		db.Trip
			.find({
				users : req.user._id
			})
			.then(tripData => {
				res.json(tripData)
			})
			.catch(err => console.log(err));
	},
	create: (req, res) => {
		let data = req.body;
		console.log(req.user._id)
		data.users = [req.user._id]
		db.Trip
			.create(data)
			.then(tripData => {
			  res.json(tripData)
			})
			.catch(err => console.log(err));
	},
	update: (req, res) => {
		
		db.Trip
			.findOneAndUpdate({ _id: req.params.id }, {$push: {"users": req.user._id}})
			.then(tripData => {
				res.json(tripData)
			})
			.catch(err => console.log(err));
	},
	addEvent: (req, res) => {
		const tripPath = `tripLength.${req.body.dateIndex}.events`;
		db.Trip.findByIdAndUpdate({_id: req.params.id}, {$push: {[tripPath]: req.body.eventData}} )
			.then(tripJaunt => console.log(tripJaunt))
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