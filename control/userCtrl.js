var userModel = require('../model/user_model');
var sendMail = require('../config/email_config');
var crypto = require('../config/crypto_config');
var fileUpload = require('../config/file_upload');
var resizeImg = require('../config/setimg_config');
var obj = {};
// 通知页
obj.notice = function(req, res) {
        res.send('home/notice');
    }
    // 个人用户
obj.user = function(req, res, next) {
    var con = {
        uname : req.query.name
    }
    userModel.findOne(con, function(err, info) {

        res.render('home/user',{data:info});
    })
}
    // 登录
obj.login = function(req, res) {
        // res.redirect('/');
        res.render('home/login');
}
obj.dologin = function(req, res) {
        var con = {
            name: req.body.uname
        }
        userModel.findOne(con, function(err, data) {
            if (!data) {
                res.send('1');
            } else {
                if(data.active){
                    if (data.password === crypto(req.body.upwd)) {
                        req.session.userinfo = data;
                        res.send('ok');
                    } else {
                        res.send('3');
                    }                    
                }else{
                    res.send('2')
                }
            }
        })
    }
    // 注册
obj.reg = function(req, res) {
    res.render('home/reg');
}
obj.doreg = function(req, res) {
        var con = {
            name: req.body.uname
        };
        userModel.findOne(con, function(err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                if (data) {
                    req.flash("message", "用户名重复");
                    res.send(req.flash("message"));
                    return;
                } else {
                    // 创建用户加密后的数据
                    var udata = {
                        name: req.body.uname,
                        password: crypto(req.body.upwd),
                        email: req.body.umail,
                    }
                    userModel.create(udata, function(err, info) {
                        if (err) {
                            console.log(err);
                            return;
                        };
                        sendMail(info.name, info.email, info._id);
                        res.send("ok");
                    })
                }
            }
        });
    }
    // 邮箱验证
obj.active = function(req, res) {
var con = {
    name: req.query.uname
}
userModel.findOne(con, {'active':1}, function(err,data) {
    if(err){console.log(err);return;}else{
        if(data){
            if(data.active===1){
                res.render('home/active', { msg: 'ok' })
            }else{
                res.render('home/active', { msg: 'no' })
            }                    
        }else{
            res.send('错误！404')
        }
    }
})


}
obj.activeok = function(req, res) {
    var con = {
    _id: req.params.id
    }
    console.log(con)
    userModel.update(con,{ $set: { 'active': 1 } }, function(err, data) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/u/active?uname='+req.query.uname)
        }
    })
}
obj.setting = function(req, res) {
    res.render('home/setting')
}
obj.settingok = function(req, res) {

        var fileUp = fileUpload("file_upload", "public/uploads");
        fileUp(req, res, function(err) {
            if (err) {
                switch (err.code) {
                    case "类型不对":
                        res.send('类型不对')
                        break;
                }
            }
            var data = {
                name: req.body.Name,
                email: req.body.Email,
                web: req.body.web,
                address: req.body.address,
                weibo: req.body.weibo,
                github: req.body.github,
                signature: req.body.signature,
            }
            var con = {
                    _id: req.body.userid
                }
                // console.log(req.file);
                // { fieldname: 'file_upload',
                //   originalname: 'default.png',
                //   encoding: '7bit',
                //   mimetype: 'image/png',
                //   destination: 'public/uploads',
                //   filename: '20170711223024554bp8639a296.png',
                //   path: 'public\\uploads\\20170711223024554bp8639a296.png',
                //   size: 1534 }

            if (req.file) {
                // 图片上传后压缩
                resizeImg(req.file.path, 'public/user_pic/' + req.file.filename, 48, 48, function(err) {
                    if (!err) {
                        data.userpic = req.file.filename;
                        userModel.update(con, data, function(err) {
                            if (!err) {
                                userModel.findOne(con, function(err, data) {
                                    req.session.userinfo = data;
                                    res.send('修改成功');
                                })
                            } else {
                                console.log(err);
                                res.send('修改失败！')
                            }
                        });
                    } else {
                        console.log(err);
                        console.log('压缩图片失败！')
                    }
                });
            } else {
                userModel.update(con, data, function(err) {
                    if (!err) {
                        userModel.findOne(con, function(err, data) {
                            req.session.userinfo = data;
                            res.send('修改成功');
                        })
                    } else {
                        console.log(err);
                        res.send('修改失败！')
                    }
                });

            }
        })


        // res.send('上传！')
    }
    //退出用户
obj.logout = function(req, res) {
    req.session.userinfo = null;
    res.redirect('/')
}

module.exports = obj
