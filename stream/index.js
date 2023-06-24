const chalk = require('chalk');

const fs = require('fs');

const http = require('http');

const port = 8000;

const localhost = '127.0.0.1';

const server = http.createServer();

const url = require('url');

server.on('request', (req, res) => {
    console.log(chalk.white.bgRed.bold(req.url));
    //method-1
    // fs.readFile('input.txt', (err, data) => {
    //     if(err){
    //         console.error(err);
    //     }
    //     res.end(data.toString());

    // })

    //method-2 better than 1
    // const readableStream = fs.createReadStream('input.txt');
    // readableStream.on('data', (chunkData) => {
    //     res.write(chunkData)
    // });
    // readableStream.on('end', () => {
    //     res.end();
    // });
    // readableStream.on('error', (err) => {
    //     console.log(chalk.white.bgRed.bold(err));
    //     res.end('File not found');
    // });

    //method-3 best
    const readableStream = fs.createReadStream('input.txt');
    readableStream.pipe(res);
});

server.listen(port, localhost, () => {
    console.log(chalk.white.bgGreenBright.bold(`Server is connected on port: ${port}`));
});
