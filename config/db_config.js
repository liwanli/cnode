var mongoose = require('mongoose');
var host = '127.0.0.1',
	port="27017",
	dbs="objCnode";
var dburl = 'mongodb://'+host+':'+port+'/'+dbs;
mongoose.connect(dburl,{useMongoClient:true},function(err){
	if(err){
		console.log('连接数据库失败',err);
		return;
	}else{
		console.log('连接数据库成功！')
	}
});
module.exports=mongoose;