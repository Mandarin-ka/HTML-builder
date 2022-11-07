let fs = require('fs'),
	path = require('path')

function read(root) {

	let files = fs.readdirSync(root)
	for(let i = 0; i < files.length; i ++) {

		let name = [root, files[i]].join('/')
			name = path.normalize(name)
        let stat = fs.statSync(name)
        if(stat.isFile()){
            let file = name.split('\\').at(-1)
            console.log(file.split('.')[0] +'--'+ file.split('.').at(-1) + '--' + stat.size/1024 + 'kb')
        }
	}
}

read('03-files-in-folder/secret-folder')