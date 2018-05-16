const http = require('http');
const https = require('https');
let httpRequest = function(url) {
    return new Promise((resolve, reject) => {
        var request;
        if (url.startsWith('https')) {
            request = https.request(url);
        } else {
            request = http.request(url);
        }
        request.on('response', (response) => {
            var c = "";
            response.on('data', (chunk) => {
                c += chunk;
            });
            response.on('end', () => {
                resolve(c);
            });
            response.on('error', () => {
                reject(err);
            })
        });
        request.on('error', (err) => {
            reject(err);
        });
        request.end()
    });
}





//调用

let url = 'http://www.baidu.com';
httpRequest(url).then(data => {
    console.log("success: " + data);
}).catch(err => {
    console.log("failed: " + err);
})