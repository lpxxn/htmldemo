/**
 * Created by admin on 2017/6/14.
 */
var httpsVal = require("https");
//console.log(httpsVal);
//require('ssl-root-cas').inject();

var urlBase = 'https://localhost:44319';
var options = {
    'method': 'POST',

    'hostname': 'localhost',
    'port': 44319,
    'path': '/Login',
    'rejectUnauthorized': false,
    'content-type': 'multipart/form-data',
    'formData': {Code: '1000', Pwd: '111111'}
};

const req = httpsVal.request(options, function(res){
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', function(d) {
        process.stdout.write(d);
    });
});

req.on('error', function(e){
    console.error(e);
});

req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Code\"\r\n\r\n1000\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Pwd\"\r\n\r\n111111\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
req.end();
