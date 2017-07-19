var express = require('express');
var control = require("../control/topicCtrl");
var isCheck = require('../config/userCheck')
var router = express.Router();

// 发布话题
router.get('/create', isCheck, control.create);
router.post('/docreate', isCheck, control.docreate);
// 查看文章内容
router.get('/:id', control.article);
// 编辑文章
router.get('/reply/:id/edit', control.edit)
// 删除文章
router.get('/reply/:id/del', control.del)
// 回复评论
router.post('/:id/reply', function(req,res,next){
	if(!req.session.userinfo){
		res.send("ok");
		return;
	}
	next();
},control.reply);


module.exports = router;
