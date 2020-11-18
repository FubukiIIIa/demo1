/*
 * @Author: your name
 * @Date: 2020-02-28 10:32:53
 * @LastEditTime: 2020-03-01 23:55:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cms_dev/middleware/checklogin.js
 */
module.exports = (req, res, next) => {
  console.log('检查用户中间件', req.path);
  // 1. 判断 内存中是否保存有 session 会话数据
  if (req.path !== '/users/sign' ) {
    if (!req.session.logined || !req.session.loginUser) {
      return res.render("login_js"); // 这里要注意 使用return ,如果不使用return 则还会执行 next()
    }
  }
  next();
};
