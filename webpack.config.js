let path = require('path');
let webpack = require("webpack");


module.exports = {
	entry: {
		circle:"./src/js/myjs/circle.js",
		nav:"./src/js/myjs/nav.js",
		send_request:"./src/js/myjs/send_request.js",
		wheel:"./src/js/myjs/wheel.js",
		showBlogs: './src/js/myjs/blog/showBlogs.js',
		editBlog :'./src/js/myjs/blog/editBlog.js',
		singleBlog :'./src/js/myjs/blog/singleBlog.js',
		addBlog: './src/js/myjs/blog/addBlog.js'
		
	},
	output:{
		path:path.join(__dirname,"./dist"),
		filename:"[name].js"
	},
	module:{
		rules:[
			
		]
	},
	// externals: {
	//     jquery: "jquery" //如果要全局引用jQuery，不管你的jQuery有没有支持模块化，用externals就对了。
	// }
	
};