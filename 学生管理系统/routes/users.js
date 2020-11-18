/*
 * @Author: your name
 * @Date: 2020-02-26 23:22:32
 * @LastEditTime: 2020-03-02 02:02:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cms_dev/routes/users.js
 */
var express = require("express");
var router = express.Router();
const readJSON = require("../utility/filetool/readfile");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
/**
 * @description: 用户登录
 * @param {req:请求,res:响应}
 * @return: null
 */
router.post("/sign", (req, res) => {
  // 1. 获取 用户提交数据
  let bodyObj = req.body;
  if (bodyObj.uname) {//2. 有数据
    // 3. 读取用户文件数据(相当于访问数据库的操作，
    // 后期更换数据库只需要在此处更换相应的API即可，内部代码无需就修改)
    readJSON.readFile("udata.json", (ddata) => {
      // ddata为读取到的数据
      if (ddata) {
        // 读取到数据
        // 对读到的数据进行遍历使用ES6数组方法findIndex
        let dd = ddata.users;
        let find_index = dd.findIndex(item => {
          return item.uname === bodyObj.uname;
        });
        // -1 是没有查询到数据
        if (find_index != -1) {// 找到用户
          // 4. 再判断其密码是否正确
          if (dd[find_index].upwd === bodyObj.upwd) { // 密码正确
            // 5. 记录用户 设置session 状态 和用户信息
            req.session.logined = true;
            req.session.loginUser = {
              uname: bodyObj.uname,
              upwd: bodyObj.upwd,
              uid: dd[find_index].uid
            };
            // 发送数据
            res.send(JSON.stringify({ error: false, msg: "登录成功" }));
          } else { // 密码不正确
            res.send(JSON.stringify({ error: true, msg: "用户密码错误" }));
          }
        } else { // -1 是没有找到数据，也就是没有查找到登录的用户名
          res.send(JSON.stringify({ error: true, msg: "该用户不存在，请联系系统管理员。" }));
        }
      } else { // 本地数据仓库中无数据
        res.send(JSON.stringify({ error: true, msg: "读取数据失败，请联系管理员！" }));
      }
    });
  } else {
    // 5. 不传参
    res.send(JSON.stringify({ error: true, msg: "用户名不能为空" }));
  }
});


/**
 * @description: 获取该用户下的班级
 * @param {type} 
 * @return: 
 */
router.get('/classes', (req, res) => {
  readJSON.readFile("udata.json", ddata => {
    res.send('ok');
  });
});

/**
 * @description: 用户退出,设置session会话数据将其还原
 * @param 无 
 * @return: /index 重定向到 首页 
 */
router.get('/exit', (req, res) => {
  req.session.logined = false;
  req.session.loginUser = null;
  return res.redirect('/index');
});
/**
 * @description: 获取当前用户下所有的班级
 * @param {} 
 * @return: 
 */
router.get('/getclasses', (req, res) => {
  if (!req.session.logined || !req.session.loginUser) {
    return res.render("login_js");
  }
  readJSON.readFile("cdata.json", dd => {
    let user =  dd.data.find(item => item.uid === req.session.loginUser.uid);
    res.send(JSON.stringify({ data: user.uclasses}));
  });
});

router.get("/test", (req, res) => {
  readJSON.readFile("sdata.json", dd => {
    console.log(dd);
    res.send(JSON.stringify(dd));
  });
});

module.exports = router;
