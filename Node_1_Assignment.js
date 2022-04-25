//  creating a file in a pirticular folder and add the time stamp to that file 


const fs = require('fs')

fs.writeFileSync('./sample.txt',`\n${Date()}`,(err)=>{
if(err){
    console.log(err)
}else{
    console.log('file has been saved')
}
})

//  Reading all the txt files in the folder 


const path = __dirname

var filess=fs.readdirSync(__dirname)
filess.forEach((file)=>{
    if(file.split(".")[[(file.split(".")).length-1]]=='txt'){
        console.log(file)
    }
})
