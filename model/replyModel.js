var mongoose = require('../config/db_config');
var replySchema = new mongoose.Schema({
    // 评论名字
    name: String,
    // 评论内容
    content: String,
    // 当前用户ID
    uid: {
        type: 'ObjectId',
        ref: 'users'
    },
    // 当前话题ID
    tid: {
        type: 'ObjectId',
        ref: 'topic'
    },
    reTime: {
        type:Date,
        default: Date.now
    },
    // 评论第几楼
    lou:Number

}, { versionKey: false })

var replySchema = mongoose.model('replyAll', replySchema, 'replyAll')

module.exports = replySchema;
