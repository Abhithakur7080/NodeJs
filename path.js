const path = require('path');

console.log(path.dirname('D:/NodeJs/path.js'));
//directory name
//D:/NodeJs

console.log(path.extname('D:/NodeJs/path.js'));
//extension name
//.js

console.log(path.basename('D:/NodeJs/path.js'));
//file name
//path.js

console.log(path.parse('D:/NodeJs/path.js'));
/*
{
  root: 'D:/',
  dir: 'D:/NodeJs',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
*/
const mypath = path.parse('D:/NodeJs/path.js');
console.log(mypath.name);
//path