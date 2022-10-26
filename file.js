
const fs= require(`fs`);
// console.log(fs)
const path= require('path')
// console.log(path)

const dirPath= path.join(__dirname,"files")

// console.log(dirPath)

// for( i=0; i<5; i++)
// {
//     fs.writeFileSync(dirPath + "/hello"+i+".txt","hii aman")
// }

fs.readdir(dirPath,(err,files) => {
    // console.log(files)
    files.forEach((items) =>{
        console.log(items)
    })
})