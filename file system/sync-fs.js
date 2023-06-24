const fs = require('fs');

//create
// fs.writeFileSync('read.txt', 'welcome to Node js');

//update
// fs.writeFileSync('read.txt', 'welcome to Node js with abhijeet');

//append/add
// fs.appendFileSync('read.txt', ' we learn coding');

//read
// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// output in buffer
/* 
<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 4e 6f 64 65 20 6a 73 20 77 69 74 68 20 61 62 68 69 6a 65 65 74 20 77 65 20 6c 65 61 72 6e 20 63 6f 64 69 6e 67> 
*/

// const org_file = buf_data.toString();
// console.log(org_data);

// output in original
/*
welcome to Node js with abhijeet we learn coding
*/



// create folder
// fs.mkdirSync('read');
// fs.writeFileSync('read/read.txt', 'welcome to Node js');
// fs.appendFileSync('read/read.txt', ' we learn coding');


// read without getting buffer data
// const read = fs.readFileSync('read/read.txt', 'utf8');
// console.log(read);

//rename
// fs.renameSync('read/read.txt', 'read/write.txt');

//delete file
// fs.unlinkSync('read/write.txt');

//delete folder
// fs.rmdirSync('read');



