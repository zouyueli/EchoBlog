
let nums = document.getElementsByClassName("num");
let clipLefts = document.getElementsByClassName("clip-left");
let cilpRights = document.getElementsByClassName("clip-right");
let circle = document.getElementsByClassName("circle");

let template;
for(let i=0 ; i<nums.length;i++){
	 let num = Number.parseInt(nums[i].innerText);
	 //百分比对应的度数
	 let degress = Math.ceil(num *3.6);
	 template = `rotate(${degress}deg)`
	 if(degress < 180){
		cilpRights[i].style.transform=template;
		clipLefts[i].style.zIndex="10";
	 }else{
		degress = degress-180;
		let clipMask = document.createElement("div");
		clipMask.classList.add("clip-mask");
		circle[i].appendChild(clipMask);   
		clipLefts[i].style.transform=`rotate(${degress}deg)`;
	}

}

