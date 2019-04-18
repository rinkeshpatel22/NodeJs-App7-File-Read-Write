// import fs module
const fs = require('fs');
const filePath = 'app/files/read.txt';

let readFile = (req, res) => {
    fs.readFile(filePath,'utf8',(err,fileData)=>{
        if(err) {
            res.send('Error: ' + err);
        } else {
            res.send(fileData);
        }
     })
}

// export controller
module.exports = {
    readFile: readFile
}