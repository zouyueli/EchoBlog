let path = require('path');
let webpack = require("webpack");


module.exports = {
	entry: {
		circle:"./src/js/myjs/circle.js",
		nav:"./src/js/myjs/nav.js",
		send_request:"./src/js/myjs/send_request.js",
		wheel:"./src/js/myjs/wheel.js",
	},
	output:{
		path:path.join(__dirname,"./dist"),
		filename:"[name].js"
	},
	module:{
		rules:[
			
		]
	}
	
};