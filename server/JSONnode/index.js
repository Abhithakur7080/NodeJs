const biodata = {
    name: 'AB',
    age: 25,
}
const jsonData = JSON.stringify(biodata);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);

const fs = require('fs');

// fs.writeFile('jsonData.json', jsonData, (err, data) => {
//     console.log(err);
// });
fs.readFile('jsonData.json', 'utf-8', (err, data) => {
    const orgData = JSON.parse(data);
    console.log(orgData);
})


