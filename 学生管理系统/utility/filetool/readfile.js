/*
 * @Author: your name
 * @Date: 2020-02-28 17:46:42
 * @LastEditTime: 2020-03-02 01:49:27
 * @LastEditors: Please set LastEditors
 * @Description: 异步读取JSON文件,本模块读取JSON文件，然后将其解析为对象
 * @FilePath: /cms_dev/utility/filetool/readfile.js
 */
// 1. 引入第三方包 fs-extra
// fs-extra是fs的一个扩展，提供了非常多的便利API，并且继承了fs所有方法和为fs方法添加了promise的支持。
// 它应该是 fs 的替代品。
// cnpm i fs-extra -S
const fs = require('fs-extra');
const path = require('path');
// 数据目录
const dPath = path.resolve(__dirname, '../../datas/');
//2. With async/await: ES7 异步操作
async function rfile (fileName, cb) {
  // 使用try catch 不做异常
  try {
    let file_full_path = path.join(dPath, fileName);
    /**
     * @description: fs.readJson(filename) 异步读取JSON文件，返回JSON对象
     * @param {type} 
     * @return: 
     */
    const dataObj = await fs.readJson(file_full_path);
    cb(dataObj) // => 将数据通过回调函数传出
  } catch (err) {
    console.error(err)
    cb(null);
  }
}
// 3. 开放模块接口
module.exports.readFile = rfile;