/*
 * @Author: your name
 * @Date: 2020-02-28 17:24:40
 * @LastEditTime: 2020-03-04 17:04:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cms_dev/routes/students/index.js
 */
var express = require("express");
var router = express.Router();
// 1. 引入检查用户状态 中间件
const checkLogin = require('../../middleware/checklogin');
const readJSON = require("../../utility/filetool/readfile");
const writeJSON = require('../../utility/filetool/writefile');
// 2. 使用 checklogin 用户状态的中间件
// 原理很简单，请求对每一个访问 / 和 /index的路由进行判断，也就是当前路由模块
router.use(checkLogin);
/**
 * @description: 获取指定班级的所有学生
 * @param {cname: 班级名称} 
 * @return: 模板渲染
 */
router.get('/', function(req, res, next) {
  let cid = req.query.cid;
  readJSON.readFile("sdata.json", dd => {
    // 对数据进行遍历查找到对应的班级
    let item = dd.datas.find(value => value.cid === cid);
    res.send(JSON.stringify({ students: item.students}));
  });
});
/**
 * @description: 添加学生，根据cid进行添加
 * @param {type} 
 * @return: 
 */
router.post('/', (req, res) => {
  let body = req.body;
  readJSON.readFile("sdata.json", dd => {
    // 查找到对应班级的下标
    let cindex = dd.datas.findIndex(value => value.cid === body.cid);
    // 对学生的学号进行查询是否有重复
    let find = dd.datas[cindex].students.findIndex(value => value.sno === body.snumber);
    if (find == -1) { // 没有找到
      // 找 学生 的id 最大值
      let id_max = Math.max.apply(Math, dd.datas[cindex].students.map(function (o) { return o.id }));
      // 构造数据结构
      let jsonObj = {
        id: id_max + 1 + '',
        sno: body.snumber,
        truename: body.sname,
        age: body.sage,
        gender: body.ssex,
        tel: body.sphone,
        major: body.smajor,
        classid: body.cid
      };
      // 添加内存数据中
      dd.datas[cindex].students.push(jsonObj);
      // 整体写入到文件中
      writeJSON.writeFile("sdata.json", dd, flag => {
        if (flag) {
          res.send(JSON.stringify({ error: false, msg: "保存数据成功", data: dd.datas[cindex].students }));
        } else {
          res.send(JSON.stringify({ error: true, msg: "保存数据失败!" }));
        }
      });   
    } else { // 找到
      res.send(JSON.stringify({ error: true, msg: "学生学号重复!" } ));
    }
  });
});

/**
 * @description: PUT请求，对指定学生的数据进行修改
 * @param {type} 
 * @return: 
 */
router.put('/', (req, res) => {
  let body = req.body;
  readJSON.readFile("sdata.json", dd => {
    // 查找到对应班级的下标
    let cindex = dd.datas.findIndex(value => value.cid === body.cid);
    // 根据学生sno 找到学生
    let find_index = dd.datas[cindex].students.findIndex(value => value.sno === body.snumber);
    if (find_index != -1) { // 找到
      // 将dd中的数据重新改写
      dd.datas[cindex].students[find_index].truename = body.sname;
      dd.datas[cindex].students[find_index].age = body.sage;
      dd.datas[cindex].students[find_index].gender = body.ssex;
      dd.datas[cindex].students[find_index].tel = body.sphone;
      dd.datas[cindex].students[find_index].major = body.smajor;
      // 整体写入到文件中
      writeJSON.writeFile("sdata.json", dd, flag => {
        if (flag) {
          res.send(JSON.stringify({ error: false, msg: "保存数据成功", data: dd.datas[cindex].students }));
        } else {
          res.send(JSON.stringify({ error: true, msg: "保存数据失败!" }));
        }
      });
    } else { // 没找到
      res.send(JSON.stringify({ error: true, msg: "学生学号不存在!" }));
    }
  });
});
/**
 * @description: 删除学生
 * @param {班级ID、学生ID} 
 * @return: 
 */
router.delete('/', (req, res) => {
  let body = req.body;
  console.log(body);
  readJSON.readFile("sdata.json", dd => {
    // 查找到对应班级的下标
    let cindex = dd.datas.findIndex(value => value.cid === body.cid);
    // 根据学生sno 找到学生
    let find_index = dd.datas[cindex].students.findIndex(value => value.sno === body.snumber);
    if (find_index != -1) {
      dd.datas[cindex].students.splice(find_index, 1);
      // console.log(dd.datas[cindex].students.splic(find_index, 1));
      // 整体写入到文件中
      writeJSON.writeFile("sdata.json", dd, flag => {
        if (flag) {
          res.send(JSON.stringify({ error: false, msg: "保存数据成功", data: dd.datas[cindex].students }));
        } else {
          res.send(JSON.stringify({ error: true, msg: "保存数据失败!" }));
        }
      });
    } else {
      res.send(JSON.stringify({ error: true, msg: "学生学号不存在!" }));
    }
  });
});

module.exports = router;
