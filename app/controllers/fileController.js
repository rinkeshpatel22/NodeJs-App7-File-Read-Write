// import fs module
const fs = require('fs');
const readFilePath = 'app/files/read.txt';
const writeFilePath = 'app/files/write.txt';

// read file methos
let readFile = (req, res) => {
    fs.readFile(readFilePath,'utf8',(err,fileData)=>{
        if(err) {
            res.send('Error: ' + err);
        } else {
            res.send(fileData);
        }
     })
}

// write file method
let writeFile = (req, res) => {
    fs.writeFile(writeFilePath, req.params.data,(err)=>{
        if(err) {
            res.send('Error: ' + err);
        } else {
            res.send(`Your Data has been written to app/files/write.txt file`);
        }
     });
}

// export controller
module.exports = {
    readFile: readFile,
    writeFile: writeFile
}