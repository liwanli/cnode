const topicModel = require("../model/topic_model");

var obj = {};

// 主页
obj.index = function(req, res) {
    topicModel.find().count(function(err,num) {
        var tab = req.query.tab || 'all'
        if(!req.query.tab||req.query.tab=='all'){
            var con = {}
        }else{
            var con = {tab:req.query.tab}
        }
    	var page = req.query.page || 1;   //当前页数
    	var pageSize = 5;   //每页显示多少条
    	var pageMax = Math.ceil(num/pageSize);  //最大页数
    	var pageStep=(page-1)*pageSize; 
/*
当前页数：     1  2   3   4   要跳过的条数  =  (当前页数 - 1) * 当前页数显示的条数
要跳过的条数： 0  30  60  90
*/
		topicModel.find(con, {}, {
	      sort:{
	        'lastreplyTime':-1
	      },
	      skip:pageStep,
	      limit:pageSize
		}).populate('uid', { name: 1, userpic: 1 }).populate("lastreplyUser",{userpic:1}).exec(function(err, data) {
            res.render('index', { data: data, tab: tab, page: page, pageMax: pageMax});
		})

    })
}
    // 新手入门
obj.getstart = function(req, res) {
        res.render('getstart')
    }
    // API
obj.api = function(req, res) {
        res.render('api')
    }
    // 关于
obj.about = function(req, res) {
    res.render('about')
}
module.exports = obj
