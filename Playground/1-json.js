const fs = require('fs')
// const book = {
//     title : 'Programming with C',
//     author : 'Maruf'
// }
// const JSONbook = JSON.stringify(book);
//console.log(JSONbook);
//fs.writeFileSync('1-json.json',JSONbook);
const dataBuffer = fs.readFileSync('1-json.json');

const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);

user.age = "24"
user.name = "Karan"

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json',userJSON);