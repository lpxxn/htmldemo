'use strict';
var request = require("request");

//var urlBase = 'http://www.tst.com:8077';
var urlBase = 'https://localhost:44319';
var options = {
    'method': 'POST',
    'url': urlBase + '/Login',
    'content-type': 'multipart/form-data',
    'rejectUnauthorized': false,
    'formData': {Code: '1000', Pwd: '111111'}
};




var crmCookie = '';
request(options, function (error, response, body) {
    if (error) console.log(error);
    else
    {
        var cookie = response.headers["set-cookie"][0];//.split(";")[0];
        console.log(cookie);
        crmCookie = cookie;
        console.log(body);
        userList();
    }

});

function userList() {
    request({method: "GET", url: urlBase + '/User/UserList', headers: {Cookie: crmCookie}}, function (error, response, body) {
        if (error) console.log(error);
        else
        {
            console.log(body);
            var json = JSON.parse(body);

            console.log("over");
        }

    })
}

function mt5Test() {
    request({method: "GET", url: urlBase + '/TestManagerApi', headers: {Cookie: crmCookie}}, function (error, response, body) {
        if (error) console.log(error);
        else
        {
            console.log(body);
            var json = JSON.parse(body);

            console.log("over");
        }
    })
}
setInterval(userList,15000);
setInterval(mt5Test,25000);

console.log("hello");