const validator = require("validator");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail("alenmar.am@gmail.com"));
console.log(validator.isEmail("alenmar.amgmail.com"));
console.log(validator.isURL("https://comila.com"));
console.log(validator.isURL("https:/comila.com"));
