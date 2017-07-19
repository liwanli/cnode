var fs = require('fs');
var gm = require('gm');


function resizeImg(imgSrc,imgDes,width,height,callback){
	gm(imgSrc).resize(width,height).write(imgDes,function(err){
		callback(err);
	})
}


module.exports=resizeImg;