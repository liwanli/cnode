var mongoose = require('../config/db_config');

var adminSchema = new mongoose.Schema({

	// 用户名：
	name:{
		type:String,
		unique:true
	},
	// 密码：
	password:String,
},{versionKey:false})

var adminModel = mongoose.model('admin',adminSchema,'admin')

module.exports = adminModel;