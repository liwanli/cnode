var express = require('express');
var user = express.Router();
var path = require('path');
var mongodb = require('mongodb');
var multiparty = require('multiparty');
/**
 * 定义请求mongodb数据函数   getDb()
 * @param  
 */


// var host = 'mongodb://127.0.0.1';
// var port = '27017';
// var dbs = 'stu';
// var url = path.join(host,port,dbs);
var url="mongodb://127.0.0.1:27017/stu"; 
function getDb(callback){
	mongodb.MongoClient.connect(url,function(err,db){
		if(err){console.log(err);return};
		callback(db);
	})
}

module.exports=user;