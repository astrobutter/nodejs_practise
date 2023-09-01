const http = require('http');
const https = require('https');
const express = require('express');
const app = express();
var fs = require('fs');

app.get('/', (req, res)=>{
    // /* 
    https.get('https://coderbyte.com/api/challenges/json/age-counting', res => {

        let data = [];

        res.on('data', chunk => {
            data.push(chunk);
        }).on('end', () => {
            console.log('Response ended: ');

            var users = JSON.parse(Buffer.concat(data).toString());
            // console.log(users)
            let parsedData = users.data.split(",")
            // console.log(parsedData)
            
            // let keyArray = [];
            let keyAge = [];
            let count = 0;

            // for (let i = 0; i < parsedData.length; i+=2) {
            //     if (i>=20 && i< 30) {
            //         let keySplit = parsedData[i].trim().split('=');
            //         keyArray.push(keySplit[1]);
            //     }
            // }

            for (let i = 1; i < parsedData.length; i+=2) {
                let keySplit = parsedData[i].trim().split('=');
                if (parseInt(keySplit[1]) === 32){
                    console.log(parseInt(keySplit[1]))
                    keySplit = parsedData[i-1].trim().split('=');
                    console.log(keySplit[1])
                    count++;
                    fs.appendFile('output.txt', `${keySplit[1]}\n`, function (err) {
                        if (err) throw err;
                        console.log('Updated!');
                    });
                }
            }
        });
    })
    .on('error', err => { console.log('Error: ', err.message);
    }); 
    // */
   
    /*
    https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (res) => {
        let bv;
        res.on('data', (d)=> {
            bv = JSON.parse(d.toString());
            console.log("Hobbies", bv.hobbies);
        }).on('error',(e)=> {
            console.error(e);
        });
    });
    */
   
   /*
   https.get('https://coderbyte.com/api/challenges/json/date-list', (res) => {
    let data = [];

    res.on('data', chunk => {
        data.push(chunk);
    }).on('end',(d)=> {
        var users = JSON.parse(Buffer.concat(data).toString());
        console.log("date",typeof(users))
            for( let i=0 ; i<users.length ; i++){
                users[i].toString();
                console.log(users[i].date)
            }
       }).on('error',(e)=> {
           console.error(e);
       });
    });
    */
   
    /*
    https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (res) => {
       let apiData = [];
       let newapiData ;
     
       res.on('data', chunk => {
            apiData.push(chunk);
       }).on('end',(d)=> {
           var users = JSON.parse(Buffer.concat(apiData).toString());
           console.log(users)

           function del(obj) {
               Object.keys(obj).forEach(key => {
                   if (obj[key] === "N/A" || obj[key] === "" || obj[key] === "-") {
                       delete obj[key];
                   }
                   else if (Array.isArray(obj[key])) {
                       let n = obj[key].length;
                       let arr = [];

                       for (let i = 0; i < n; i++) {
                           if (obj[key][i] === "" || obj[key][i] === "-" || obj[key][i] === "N/A")
                               continue;
                           let p = [obj[key][i]];

                           if (typeof (p[0]) === 'object') {
                               p[0] = del(p[0]);
                           }

                           arr = arr.concat(p);
                       }

                       obj[key] = arr;
                   }
                   else if (typeof (obj[key]) === 'object') {
                       obj[key] = del(obj[key]);
                   }
               })

               return obj;
           }

            newapiData = del(users);
            console.log(newapiData)

        }).on('error',(e)=> {
            console.error(e);
        });
    });
   */

})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})