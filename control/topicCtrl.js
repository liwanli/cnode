const userModel = require("../model/user_model");
const topicModel = require("../model/topic_model");
const replyModel = require("../model/replyModel");
const Eventproxy = require('eventproxy');
const ep = new Eventproxy();
var obj = {};

// 发布话题
obj.create = function(req, res) {
    res.render('home/create');
};
obj.docreate = function(req, res) {
    var con = {
        tab: req.body.tab,
        title: req.body.title,
        content: req.body.content,
        uid: req.session.userinfo._id
    }
    topicModel.create(con, function(err, info) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/topic/' + info._id);
        };
    })
}
// 
obj.article = function(req, res, next) {
    // 
    ep.all('articleData', 'replyData', 'lll', function(articleData, replyData, lll) {
        res.render('home/article', { 'articleData': articleData, 'replyData': replyData });
    });
    var articleCon = {
            _id: req.params.id
        }
        // 根据话题ID查询作者信息与话题信息
    topicModel.find(articleCon).populate('uid', { name: 1, gold: 1, signature: 1 }).exec(function(err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                ep.emit('articleData', data)
            };
        })
        // 每次让阅读量增加
    topicModel.update(articleCon, { $inc: { quantity: 1 } }, function(err, data) {
            ep.emit("lll")
        })
        // 根据话题ID查询话题ID下所有评论与评论用户信息
    var replyCon = {
        tid: req.params.id
    }
    replyModel.find(replyCon).populate('uid', { name: 1, userpic: 1 }).exec(function(err, data) {
        ep.emit('replyData', data)
    });

}
// 编辑话题
obj.edit = function(req, res, next) {
    var con = {
        _id:req.parmas.id
    }

}
obj.del = function(req, res) {


    
    res.send()
}

// 回复评论
obj.reply = function(req, res, next) {
    var replyCon = {
        _id: req.body.tid
    }
    topicModel.findOne(replyCon, { reply: 1 }, function(err, rel) {
        if (err) {
            console.log(err);
            return;
        } else {
            var replyData = {
                // 用户ID
                uid: req.session.userinfo._id,
                // 回复标题
                tid: req.body.tid,
                // 用户名字
                name: req.session.userinfo.name,
                // 回复内容
                content: req.body.content,
                // 楼
                lou: ++rel.reply.length

            }
            replyModel.create(replyData, function(err, info) {
                if (err) {
                    console.log(err);
                    return false;
                } else {
                	var replyD={
                		 $push: { reply: info._id},
                		 lastreplyUser:req.session.userinfo._id,
                		 lastreplyTime:new Date()
                	};
                    topicModel.update(replyCon, replyD,function(err) {
                        replyModel.findOne({ _id: info._id }, function(err, data) {
                            // res.redirect('back')
                            res.send(data)
                        })
                    })
                }
            })
        }
    })
}
module.exports = obj;
