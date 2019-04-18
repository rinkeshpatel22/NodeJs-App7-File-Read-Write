// import fs module
const fs = require('fs');
const filePath = 'app/files/write.txt';

let writeFile = (req, res) => {
    fs.writeFile(filePath, req.params.data,(err)=>{
        if(err) {
            res.send('Error: ' + err);
        } else {
            res.send(`Your Data has been written to app/files/write.txt file`);
        }
     });
}

// export controller
module.exports = {
    writeFile: writeFile
}