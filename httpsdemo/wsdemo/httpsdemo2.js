var http = require("https");
var util = require("util");
var options = {
    "method": "POST",
    "hostname": "192.168.0.49",
    "port": "44319",
    "path": "/Login",
    'rejectUnauthorized': false,
    "headers": {
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        "cache-control": "no-cache",
        "postman-token": "131af063-3304-c175-a382-79f3e88b460e"
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

var data = JSON.stringify({Code: '1000', Pwd: '111111'});

req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Code\"\r\n\r\n1000\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Pwd\"\r\n\r\n111111\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
//req.write(data);
req.end();