const http = require('http');
const https = require('https');
const express = require('express');
const app = express();
var fs = require('fs');
const path = require('path');

const util = require('util')
const exec = util.promisify(require('child_process').exec)

app.get('/', (req, res)=>{
    
    const directoryPath = path.join(__dirname);
    fs.readdir(directoryPath, function (err, files) {

        if (err) { return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) { console.log(file); 
        });

    });
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})