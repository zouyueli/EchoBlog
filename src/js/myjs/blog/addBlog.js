//与node进行数据交互，用jquery，简便
const $ = require("jquery");
$(document).ready(function(){
	$(".button").click(function(){
		$.ajax({
			method:"post",
			data:$("form").serialize(),
			async:true,
			url:"http://127.0.0.1:8080/addBlog",
			success:function(data){
				window.location.href = "../html/showBlogs.html";
			},
			error:function(data){
				consone.log(data);
			}
		});
	})
	
});