let show = document.getElementsByTagName("a")[0];
let write = document.getElementsByTagName("a")[1];
// console.log("sssssssssss")

//监听点击事件，跳转界面
show.onclick = function(){
	window.location.href="./src/html/showBlogs.html";
}

write.onclick = function(){
	window.location.href="./src/html/addBlog.html";
}