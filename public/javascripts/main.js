require.config({
    baseUrl: "javascripts/lib/",
    paths: {
        "app": "..",
        "underscore": "underscore",
        "backbone": "backbone"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require([
    "jquery",
    "underscore",
    "backbone",
    "app/views/Inventory.View"
], function(
    $,
    _,
    Backbone,
    InventoryView
) {

	var socket = io.connect();
	

	var data = {name: "pr_arrietty", sold: []};
		inventory = new InventoryView({socket: socket, data: data});
	
	$("body").append(inventory.render().el);
});