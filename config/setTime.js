function getT(time){
	var now=new Date().getTime();
	var timeS="";
	// 计算创建时间,与当前时间相差秒
	var timeZ=Math.floor((now-time)/1000);
	if(timeZ<3){
		timeS="刚刚";
	}else if(timeZ<60){
		timeS=timeZ+"秒前";
	}else if(Math.floor((timeZ/60)<60)){
		var m=Math.floor(timeZ/60);
		timeS=m+"分钟前";
	}else if((timeZ/60/60)<24){
		var h=Math.floor(timeZ/60/60);
		timeS=h+"小时前";
	}else if((timeZ/60/60/24)<30){
		var d=Math.floor(timeZ/60/60/24);
		timeS=d+"天前";
	}else if((timeZ/60/60/24/30)<12){
		var y=Math.floor(timeZ/60/60/24/30);
		timeS=y+"月前";
	}else{
		var year=Math.floor(timeZ/60/60/24/30/12);
		timeS=year+"年前";
	}
	return timeS;
}

module.exports = getT;