const fs = require('fs'), path = require('path')

function picker() {
    let root='06-build-page/styles';
    fs.mkdir('06-build-page/project-dist', ()=>{
        let wrFile = fs.createWriteStream('06-build-page/project-dist/style.css')
        fs.readdir('06-build-page/styles', (e, files)=>{
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
        
        
        
      
        function copyFile (root) {
            fs.mkdir('06-build-page/project-dist/assets/', ()=>{
                fs.readdir(root, (e, files)=>{
                    for (let i = 0; i < files.length; i++){
                        let name = [root, files[i]].join('/')
                        name = path.normalize(name);
                        fs.stat(name,(e,stat)=>{
                            if (stat.isDirectory()){
                                fs.mkdir('06-build-page/project-dist/assets/' + name.split('\\').pop(),()=>{
                                    copyFile('06-build-page/assets/' + name.split('\\').pop())
                                } )
                            } else {
                                let temp = '06-build-page/project-dist/assets/'+name.split('\\').at(-2)+'/'+name.split('\\').at(-1)
                                fs.copyFile(root+'/'+name.split('\\').at(-1), temp, ()=>{})
                            }   
                        })
                        
                    }
                })
            })
        }
        copyFile('06-build-page/assets', '06-build-page/project-dist/assets/')
        
        fs.copyFile('06-build-page/template.html', '06-build-page/project-dist/index.html', ()=>{
            fs.readFile('06-build-page/project-dist/index.html', (e, data)=>{
                let array = data.toString().split('\n');
                for(let i=0;i<array.length;i++){
                    if(array[i].trim()==='{{header}}'){
                        fs.readFile('06-build-page/components/header.html', (e, temp)=>{
                            array[i]=temp;
                            result = array.join('\n')
                            fs.writeFile('06-build-page/project-dist/index.html', result, ()=>{

                            })
                        })
                    }
                    else if(array[i].trim()==='{{footer}}'){
                        fs.readFile('06-build-page/components/footer.html', (e, temp)=>{
                            array[i]=temp;
                            result = array.join('\n')
                            fs.writeFile('06-build-page/project-dist/index.html',result, ()=>{

                            })
                        })
                    }
                    else if(array[i].trim()==='{{articles}}'){
                        fs.readFile('06-build-page/components/articles.html', (e, temp)=>{
                            array[i]=temp;
                            result = array.join('\n')
                            fs.writeFile('06-build-page/project-dist/index.html',result, ()=>{

                            })
                        })
                    }
                }
            })
        });
        
         
    })

    
}

picker()