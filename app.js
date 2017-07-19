const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const setTime = require("./config/setTime");
const app = express();

const index = require('./routes/index');
const user = require('./routes/user');
const topic = require('./routes/topic');
const admin = require('./routes/admin');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('view engine','html');
// app.engine('.html',require('ejs').__express);


app.use(flash());

app.use(session({
    secret: 'fgadhsjlkfads',
    resave: true, // 每次请求，重样设置session
    rolling: true, //每次都重新设置cookie默认
    saveUninitialized: false, //是否重新设置,cookie,session
    cookie: {
        maxAge: 1000 * 60 * 60
    },
}));
app.use(function(req, res, next) {
    res.locals.errMsg = req.flash("message");
    res.locals.index = req.session.index;
    res.locals.userinfo = req.session.userinfo;
    res.locals.articleInfo = req.session.articledata;
    res.locals.time = setTime;
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/u', user);
app.use('/topic', topic);
app.use('/admin', admin);


app.listen(80, function() {
    console.log('服务器已经成功运行！');
})
