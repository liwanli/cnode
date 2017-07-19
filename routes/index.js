var express = require('express');
var control = require('../control/indexCtrl')

var router = express.Router();

// 检测模块
function isCheck(req,res){
	if(!req.session.userinfo){
		res.redirect('/u/login');
	}
	res.send('1')
}

// 路由模块:
	// 主页
router.get('/',control.index);
	// 新手入门
router.get('/getstart',control.getstart)
	// API
router.get('/api',control.api)
	// 关于
router.get('/about',control.about)

module.exports = router;