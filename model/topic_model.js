var mongoose = require('../config/db_config');

var topicSchema = new mongoose.Schema({
    // 话题分类
    tab: String,
    // 话题标题
    title: String,
    // 话题内容
    content: String,
    // 关联用户
    uid: {
        type: 'ObjectId',
        ref: 'users'
    },
    // 发表时间
    reTime: {
        type:Date,
        default: Date.now
    },
    // 阅读量
    quantity: {
        type: Number,
        default: 0
    },
    // 最后评论时间
    lastreplyTime: {
        type:Date,
        default:null
    },
    lastreplyUser:{
        type:"ObjectId",
        ref:"users",
        default:null
    },
    reply: [{
        type: 'ObjectId',
        ref: 'users'
    }]


}, { versionKey: false });

var topicModel = mongoose.model('topic', topicSchema, 'topic')

module.exports = topicModel;
