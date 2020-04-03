let more = document.getElementsByClassName("more-nav")[0]; 
let img = document.getElementsByTagName("img")[0]; 
let ul = more.getElementsByTagName("ul")[0];


//对更多图标 监听点击事件
img.onclick = function(event){
	if(ul.style.display == "none"){
		ul.style.display="block";
	}else{
		ul.style.display="none";
	}
}


//事件委托：通过冒泡 和 目标元素
ul.onclick = function(event){
	let el = window.event || event;
	let target = el.target || el.srcElement;
	ul.style.display="none"
	
}


function stopBubble(event){
    if(event.stopPropagation){
            //ie
    	event.stopPropagation();
    }else{
            //其他
    	event.cancelBubble = true;
    }
}




