define([
	"jquery",
	"underscore",
	"backbone",
	"text!app/templates/Inventory.Template.html"
], function(
	$,
	_,
	Backbone,
	InventoryTemplate
) {
	return Backbone.View.extend({
		className: "inventory",
		initialize: function() {
			this.socket = this.options.socket;
			this.data = this.options.data;
		},
		render: function() {
			this.$el.html(_.template(InventoryTemplate, this.data));

			return this;
		},
		events: {
			"click .inventoryImage": "sold"
		},
		sold: function() {
			var date = (new Date()).toString();
			this.data.sold.push(date);
			var data = {id: 0, sold: this.data.sold};
			this.socket.emit("update", data);

		}
	});
});