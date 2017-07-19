var express = require('express');
var control = require('../control/userCtrl')
var isCheck = require('../config/userCheck')
var router = express.Router();


// 通知页
router.get('/',control.notice);
// 个人用户
router.get('/gw/:id', isCheck,control.user);
// 登录
router.get('/login',control.login);
router.post('/dologin',control.dologin);
// 注册
router.get('/reg',control.reg);
router.post('/doreg',control.doreg);
// 邮箱验证
router.get('/active',control.active);
router.get('/chmodok/:id',control.activeok);

// 设置个人信息
router.get('/setting',isCheck,control.setting);
router.post('/settingok',control.settingok)
// 退出
router.get('/logout',control.logout);

module.exports = router;