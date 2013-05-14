define([
	"jquery",
	"underscore",
	"backbone",
	"app/models/Inventory.Model"
], function(
	$,
	_,
	Backbone,
	InventoryModel
) {
	return Backbone.Collection.extend({
		model: InventoryModel,
		
	});
});