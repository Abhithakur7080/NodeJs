const chalk = require('chalk');

const validator = require('validator');

console.log(chalk.white.bgBlue.bold(" Hello World! "));

const res = validator.isEmail('abhijeetthakur7080@gmail.com');

console.log(res? chalk.green.inverse.bold(res) : chalk.red.inverse.bold(res));