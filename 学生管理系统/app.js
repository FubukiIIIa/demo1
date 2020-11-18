var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const bodyParser = require("body-parser");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express); //设置ejs渲染html
app.set('view engine', 'html');//设置html为模板引擎 注意这里是html

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "recommand 128 bytes random string", //建议使用 128 个字符的随机字符串
    name: "mysid", // 默认是sid
    cookie: {
      maxAge: 1000 * 60 * 60//生存周期1小时
    },
    resave: false, //cookie之间的请求规则,假设每次登陆，true是就算会话存在也重新保存一次
    saveUninitialized: false //默认是true强制保存未初始化的会话到存储器 false不保存未初始化的会话数据，减少服务器存储的使用
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 
app.get('/', (req, res) => {
  return res.redirect('/index');
});

var indexRouter = require("./routes/index");
app.use('/index', indexRouter);
var usersRouter = require("./routes/users");
app.use('/users', usersRouter);
var studentRouter = require("./routes/students");
app.use('/students', studentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


/**
 * 项目名：xxxxx系统
 * 功能：实现对学生查询，添加，修改，删除。
 * 对用户数据，学生数据，班级数据管理。
 * 
 * 技术栈：
 * 前端：HTML，CSS，JavaScript，Bootstrap,Jquery,Ajax
 * 后端：Node，Express，body-parser,ejs,cookie-parser,express-session,fs-extra
 * 
 * 项目采用模块化开发，使用Express生成器进行自动化构建项目。
 * RESTful 规范设计接口 路由中间件 
 * 工具的封装
 */
