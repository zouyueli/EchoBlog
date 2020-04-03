const $ = require("jquery");

$(document).ready(function(){

	let wrapper = $(".wrapper");
	
	let p1 = new Promise((resolve,reject)=>{
		$.ajax({
			method:"get",
			url:"http://127.0.0.1:8080/showBlogs",
			success:function(data){
				resolve(data);
			},
			error:function(err){
				reject(err);
			}
		});
	})
	
	p1.then(function(data){
		let obj = JSON.parse(data);
		$.addNodes(obj);
		$(".wrapper").click(function(e){
			let event = e || window.event;
			let target = event.target || event.srcElement;
			let id =$(target).attr("value");
			window.location.href = "./singleBlog.html?id="+id;
		})
	}).catch(function(err){
		console.log(err);
	});
	
	
	$.addNodes = function(data){
		for(let i= 0; i<data.length;i++){
			let a = $("<a>").append($("<h2>").attr("value",data[i]["id"]).text(data[i]["title"]));
			let article = $("<article>").text(data[i]["content"]);
			let div = $("<div>").addClass("single-blog").append(a,article);
			$(".wrapper").append(div);
		}
	}
})