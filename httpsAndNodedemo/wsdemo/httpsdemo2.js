var http = require("https");
var util = require("util");
var querystring = require('querystring');
var options = {
    "method": "POST",
    //"hostname": "192.168.0.49",
    "hostname": "localhost",
    "port": "44379",
    "path": "/Login",
    'rejectUnauthorized': false,
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.on('error', function(e){
    console.error(e);
});

var data = querystring.stringify({Code: 'admin', Pwd: '111111'});

//req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Code\"\r\n\r\nadmin\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Pwd\"\r\n\r\n111111\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
req.write(data);
req.end();