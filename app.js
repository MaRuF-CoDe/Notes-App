const fs = require('fs')
//creating a txt file and write 
fs.writeFileSync('notes.txt' , 'My Name is Maruf.')
//Adding more line to the crated txt file
fs.appendFileSync('notes.txt','I live in Bangladesh')