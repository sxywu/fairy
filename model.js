var mongoose = require('mongoose'),
	db = mongoose.createConnection('localhost', 'inventory');

db.once('open', function() {
	console.log("huzzah!");
});

var inventorySchema = new mongoose.Schema({
	name: String,
	sold: [String]
});

exports.inventory = db.model('Inventory', inventorySchema);