/*
 * @Author: your name
 * @Date: 2020-02-26 23:22:32
 * @LastEditTime: 2020-03-02 02:00:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cms_dev/routes/index.js
 */
var express = require('express');
var router = express.Router();
// 1. 引入检查用户状态 中间件
const checkLogin = require('../middleware/checklogin')
// 2. 使用 checklogin 用户状态的中间件
// 原理很简单，请求对每一个访问 / 和 /index的路由进行判断，也就是当前路由模块
router.use(checkLogin);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_js', { user: req.session.loginUser});
});

module.exports = router;
