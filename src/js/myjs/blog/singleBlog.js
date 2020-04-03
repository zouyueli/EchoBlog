
const $ = require("jquery");
$(document).ready(function(){
	let paramStr = window.location.href.substring(window.location.href.indexOf("?")+1);
	let id = paramStr.split("=")[1];
	$.ajax({
		method:"post",
		data:`id=${id}`,
		url:"http://127.0.0.1:8080/singleBlog",
		success:function(resp){
			let obj = JSON.parse(resp);
			$.bindInfo(obj);
		},
		error:function(err){
			console.log(err);
		}
	});

	$.bindInfo = function(obj){
		$("#single-blog").attr("value",obj[0].id);
		$("h1").append(obj[0].title);
		$("article").append(obj[0].content);
		$("span.author").append(obj[0].author);
		
		let arr = obj[0].categories.split(",");
		for(let i=0;i<arr.length;i++){
			$("ul").append($("<li>").text(arr[i]));
		}
	};


	$(".edit").click(function(){
		let id = $("#single-blog").attr("value");
		window.location.href="./editBlog.html?id="+id;
	});


	$(".delete").click(function(){
		let id = $("#single-blog").attr("value");
		$.post("http://127.0.0.1:8080/deleteBlog",'id='+id,function(){
				alert("success")
				window.location.href="./showBlogs.html";
		})

	})				

});