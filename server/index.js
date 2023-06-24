const chalk = require('chalk');

const http = require('http');

const port = 8000;

const localhost = '127.0.0.1';

const url = require('url');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(chalk.white.bgRed.bold(req.url));
    // res.end(`Server is connected on port: ${port}`);

    if(req.url == '/'){
        res.end('This is a Home Page')
    }
    else if(req.url == '/about'){
        res.end('This is a AboutUs page')
    }
    else if(req.url == '/contact'){
        res.end('This is a Contact us page')
    }
    else if(req.url == '/userapi'){
        res.writeHead(200, {"Content-type" : "application/json"})
        fs.readFile(`${__dirname}/JSONnode/jsonData.json`, "utf-8", (err, data) =>{
          console.log(chalk.white.bgRed.bold(err));
          console.log(chalk.white.bgGreenBright.bold(data));
          res.end(data);  
        });
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end(`<h1>404 error Page, Page doesn't exist</h1>`)
    }
});

server.listen(port, localhost, () => {
    console.log(chalk.black.bgGreenBright.bold(` Server is connected on Port: ${port} `));
});