let fs = require('fs')
fs.readFile('01-read-file/text.txt', 'utf8', function(err,d){console.log(d)})