const getDb = require('../config/admin_config');

var obj ={};

// 后台登录页
obj.login = function(req,res){
	res.render('admin/login');
}
obj.dologin = function(req,res,next){
	var adminCon = {
		name:req.body.uname,
		pwd:req.body.pwd
	}
	console.log(adminCon);
	getDb
	res.send('ok11111111')
}
// // 后台主页
// obj.index = function(req,res){
// 	res.render('admin/index')
// }
// // 查询数据模块
// obj.data = function(req,res){
// 	getDb(function(db){
// 		db.collection("userlist").find().toArray(function(err,doc){
// 			if(err){
// 				res.send('There was a problem adding the information to the database.');
// 			}else{
// 				res.send({data:doc})	
// 			}
// 		});
// 	})	
// }
// // 新增用户
// obj.adduser = function(req,res){
// 	 getDb(function(db){
// 		// 从表单中获得数据
// 		var userid = req.body.userid||0;
// 		var username = req.body.username;
// 		var usersex = req.body.usersex;
// 		var userage = req.body.userage;
// 		var userclass = req.body.userclass;
// 		var usertel = req.body.usertel;
// 		var userTime = new Date();
// 		var mongodb = require('mongodb'); 
// 	    var obj_id = mongodb.ObjectID(userid);
// 		db.collection('userlist').update({'_id':obj_id},{$set:{'name':username,'sex':usersex,'age':userage,'class':userclass,'tel':usertel,'time':userTime}
// 		},{upsert:true},function(err,doc){
// 			if(err){
// 				res.send('There was a problem adding the information to the database.');
// 			}else{
// 				res.send(doc)
// 			}
// 		})
// 	 })
// }
// // 编辑用户
// obj.edit = function(req,res) {
// 	for(var i in req.body){
// 		uid = i
// 	}
// 	getDb(function(db){
// 	     var mongodb = require('mongodb'); 
// 	     var obj_id = mongodb.ObjectID(uid);
// 	     db.collection("userlist").find({"_id":obj_id}).toArray(function(err,doc){   
// 	         if (err){
// 	              console.log(err);
// 	              res.send('{"error":"remove fail"}');            
// 	         }else{
// 	             res.send(doc);
// 	         }
	             
// 	     });
// 	})
// }
// // 搜索用户
// obj.seach = function(req,res){
// 	getDb(function(db){
// 		for(var i in req.body){
// 			req.body.data = i
// 		}
// 		console.log(req.body.data)
//         db.collection("userlist").find({$or:[{'name':req.body.data},{'sex':req.body.data},{'age':req.body.data},{'class':req.body.data},{'tel':req.body.data}]}).toArray(function(err,data){
// 	         if (err){
// 	              console.log(err);
// 	              res.send('{"error":"find fail"}');            
// 	         }else{
// 	             res.send(data);
// 	         }
//         })

// 	 })
// }
// // 删除用户
// obj.del = function(req,res){
// 	getDb(function(db){
// 	     var mongodb = require('mongodb'); 
// 	     var obj_id = mongodb.ObjectID(req.body.uid);
// 	     db.collection('userlist').remove({"_id":obj_id},function(err,result){        
// 	         if (err){
// 	              console.log(err);
// 	              res.send('{"error":"remove fail"}');            
// 	         }else{
// 	             res.send(result);
// 	         }
	             
// 	     });
// 	 })
// }

module.exports = obj