const os = require('os');

const architechure = os.arch();
console.log(`architechure:  ${architechure}`);
//architechure:  x64

const host_name = os.hostname();
console.log(`Host Name: ${host_name}`);
//Host Name: Abhijeetthakur

const platform = os.platform();
console.log(`Platform: ${platform}`);
//Platform: win32

const free_memory = os.freemem();
console.log(`Free Memory: ${free_memory/1024/1024/1024} Gb`);
//Free Memory: 0.5021476745605469 Gb

const total_memory = os.totalmem();
console.log(`Total Memory: ${total_memory/1024/1024/1024} Gb`);
//Total Memory: 3.7940597534179688 Gb

const temp_directory = os.tmpdir();
console.log(`Temp Directory: ${temp_directory}`);
//Temp Directory: C:\Users\abhij\AppData\Local\Temp

const type = os.type();
console.log(`Type: ${type}`);
//Type: Windows_NT