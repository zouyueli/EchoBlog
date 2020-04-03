const $ = require("jquery");
$(document).ready(function(){
let paramStr = window.location.href.substring(window.location.href.indexOf("?")+1);
let id = paramStr.split("=")[1];
console.log(paramStr)
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
	console.log(obj)
	
	$("input[name='title']").val(obj[0].title);
	$("textarea").val(obj[0].content);
	// $("input[name='categories']").append(obj[0].author);
	
	
	let categoriesList = ['Vue.js','Node.js','React.js','Angular4'];
	let pArr = obj[0].categories.split(",");
	console.log(pArr);
	for(let i = 0;i<categoriesList.length;i++){
		if(pArr.includes(categoriesList[i]) == true){
			//checked 属性添加与删除：prop('checked','true');   删除removeAtr("checked")
			$(" input[name='categories']").eq(i).prop('checked','true');
		}
	}
	
	
	let authorList = $("select option")
	for(let i=0;i<authorList.length;i++){
		// console.log(authorList[i].text)
		console.log(authorList[i])
		if(obj[0].author == authorList[i].text){
			$(authorList[i]).attr("selected","selected");
		}
		
	}
	
	
	// for(let i=0;i<arr.length;i++){
	// 	$("ul").append($("<li>").text(arr[i]));
	// }
	
	
	
	
};
});