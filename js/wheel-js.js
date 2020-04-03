

// 利用jquery来实现 轮播
$(document).ready(function(){
	let speed = 1000;
	let m = 0 ;

	let timer = setInterval(play,speed);


	//定时器 回调函数
	function play(){
		// console.log(m);
		if(m >4){
			m=0;
		}
		controlPlay(m);
		m++;
	}

	function controlPlay(n){
		$(".work-list a").removeClass("current").eq(n).addClass("current");
		$(".icon-list li").removeClass("current").eq(n).addClass("current");
	}
	
	
	//鼠标悬停和移开 事件
	$(".work-list a").mouseenter(function(){
		clearInterval(timer);
		$(".slidebar").fadeIn()
		
	}).mouseleave(function(){
		timer = setInterval(play,speed);
		$(".slidebar").fadeOut()
	})
	
	
	//点击某个图标 跳转到指定图片
	$(".icon-list li").click(function(){
		m = $(this).index();
		controlPlay(m);
		m++;
	})
	
	//点击左右按钮 切换到上/下图片
	$(".slidebar-left").click(function(){
		m= m-2;
		console.log(m)
		if(m<0){
			m=4;
		}
		controlPlay(m);
		m++;
		
	})
	
	$(".slidebar-right").click(function(){
		if(m>4){
			m=0
		}
		controlPlay(m);
		m++;
	})
	


});