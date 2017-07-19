var mongoose = require('../config/db_config');

var userSchema = new mongoose.Schema({

	// 用户名：
	name:{
		type:String,
		unique:true
	},
	// 密码：
	password:String,
	email:String,
	// 头像：
	userpic:{
		type:String,
		default:"default.png"
	},
	// 金币：
	gold:{
		type:Number,
		default:10
	},
	// 个人网站：
	web:String,
	// 地址：
	address:String,
	// 微博
	weibo:String,
	// GitHub
	github:String,
	// 个性签名：
	signature:{
		type:String,
		default:"这家伙很懒，什么个性签名都没有留下。"
	},
	// 注册时间：
	regtime:{
		type:Date,
		default:new Date()
	},
	// 权限
	active:{
		type:Number,
		default:0
	}

},{versionKey:false})

var userModel = mongoose.model('users',userSchema,'users')

module.exports = userModel;