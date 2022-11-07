let fs = require('fs');
let readedFile = fs.createReadStream('01-read-file' + '/text.txt', 'utf8')
readedFile.on('data', chunk => console.log(chunk))