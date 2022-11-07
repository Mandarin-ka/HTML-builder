let fs = require('fs'),
	path = require('path')

function copy(root) {
    fs.mkdir('04-copy-directory/copy-files', ()=>{
        fs.readdir(root,(e,files)=>{
            for(let i = 0; i < files.length; i ++) {
                let name = [root, files[i]].join('/');
                name = path.normalize(name);
                let file = name.split('\\').at(-1);
                fs.copyFile(name,'04-copy-directory/copy-files/' + file, err=>{});
            }
        })
        
    })
}

copy('04-copy-directory/files')