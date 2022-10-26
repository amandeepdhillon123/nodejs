
const fs=require('fs');

const path= require('path');

const dirPath= path.join(__dirname,'crud')
const filepath= `${dirPath}/apple.txt`;
//   make file 
// fs.writeFileSync(filepath,'this is a fruit')

// read file 

// fs.readFile(filepath,"utf8",(err,item) =>
// {
//     console.log(item)
// })

// update fie 

// fs.appendFile(filepath,"apple is good apple.txt",(err) => {
//     if(!err) console.log("file is updated")
// })


// fs.rename(filepath,`${dirPath}/rle.txt`,(err) => {
//     if(!err) console.log("file name is updated")
// });

fs.unlinkSync(`${dirPath}/rle.txt`)
