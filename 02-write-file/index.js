const readline = require('readline')
const fs = require('fs');

let wrFile = fs.createWriteStream('02-write-file/text.txt')

readline.emitKeypressEvents(process.stdin)
console.log('Введите текст:')
let exit = '';
let result ='';
process.stdin.on('keypress', (string, key) => {
    result+=string;
    
    string !== ' ' && string !== '\n' ? exit += string : exit = '';
    if((key.ctrl === true && key == 'c') || exit ==='exit'){ 
        wrFile.write(result.slice(0, result.length-4));
        console.log('До свидания!')
        process.exit();
    }
    
})
