const fs = require('fs'), path = require('path')

function bundle(root) {
    let wrFile = fs.createWriteStream('05-merge-styles/project-dist/bundle.css')
    fs.readdir('05-merge-styles/styles', (e, files)=>{
        for(let i = 0; i < files.length; i++) {
            let name = [root, files[i]].join('/');
            name = path.normalize(name);
            if(name.split('.').at(-1)==='css'){
                fs.readFile(name,'utf8', (e,d)=> {
                wrFile.write(d)
                })
            }
        }
    })
}

bundle('05-merge-styles/styles')