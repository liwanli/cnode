var path=require("path");
var multer=require("multer");
var timeStamp=require("time-stamp");
var uid=require("uid");

function uploadFile(fileName,savePath){

	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, savePath)
		},
		filename: function (req, file, cb) {
			var ext=path.extname(file.originalname);
			var fileN=timeStamp('YYYYMMDDHHmmssms')+uid(10)+ext;
			cb(null,fileN);
		}
	})
	function fileFilter (req, file, cb) {
		var allowType=['image/jpeg','image/png','image/gif'];
		if(allowType.indexOf(file.mimetype)==-1){
			console.log("类型不对");
			var error=new Error();
			error.code="类型不对";
			cb(error);
			cb(null,false);
		}else{
			console.log("上传成功");
			cb(null,true);
		}

	}
	var upload=multer({
		storage: storage,
		fileFilter: fileFilter,
		limits:{
			fileSize:1024*300
		}
	}).single(fileName);
	return upload;
}

module.exports=uploadFile;