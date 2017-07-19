var express = require('express');
var control = require('../control/adminCtrl')

var router = express.Router();

// 检测模块
function isCheck(req,res){
	if(!req.session.adminInfo){
		res.redirect('/admin/login');
	}
	res.send('1')
}

// 路由模块:
	// 主页
router.get('/', isCheck, control.index );
router.get('/login', control.login );
router.post('/dologin', control.dologin );




router.get('/data', control.data );
router.post('/adduser', control.adduser );
router.get('/edit', control.edit );
router.post('/seach', control.seach );
router.post('/del', control.del );

module.exports = router;