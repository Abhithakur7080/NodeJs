const fs = require('fs');

// create
// fs.writeFile('read.txt', "welcome to Node Js", (err)=>{
//     console.log('file is created');
//     console.log(err);
// });

// append/add
// fs.appendFile('read.txt', " with abhijeet", (err)=>{
//     console.log('appended');
//     console.log(err);
// })

// read file with buffer data
// fs.readFile('read.txt', (err, data)=>{
//     console.log(data);
//     console.log(err);
//     console.log(data.toString());
// });
//buffer data
/*
<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 4e 6f 64 65 20 4a 73 77 69 74 68 20 61 62 68 69 6a 65 65 74>
*/

// read file without buffer data
// fs.readFile('read.txt', 'utf8', (err, data)=>{
//     console.log(data);
//     console.log(err);
// });

//rename
// fs.rename('read.txt', 'write.txt', (err) => {
//     console.log('renamed');
//     console.log(err);
// })

//delete
fs.unlink('write.txt', (err) => {
    console.log('file deleted');
    console.log(err);
})