var Inventory = require('./model');

exports.create = function(req, res) {
	var data = req.body.objectData,
		inventory = new Inventory();
	inventory.name = data.name;

	inventory.save(function(error, result) {
		console.log(error, result);
	});
}

exports.readAll = function(req, res) {
	Inventory.find({}, function(error, result) {
		console.log(error, result);
	});
}

exports.update = function(req, res) {
	var data = req.body.objectData,
		id = 
}