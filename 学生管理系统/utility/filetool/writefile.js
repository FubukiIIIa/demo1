/*
 * @Author: your name
 * @Date: 2020-03-01 22:09:13
 * @LastEditTime: 2020-03-02 01:20:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cms_dev/utility/filetool/writefile.js
 */
const fs = require('fs-extra');
const path = require('path');

// 数据目录
const dPath = path.resolve(__dirname, '../../datas/');

// With async/await:
async function wfile(fileName, data, cb) {
  try {
    let file_full_path = path.join(dPath, fileName);
    await fs.outputJson(file_full_path, data)
    console.log('success!')
    cb(true);
  } catch (err) {
    console.error(err)
    cb(false);
  }
}

module.exports.writeFile = wfile;
