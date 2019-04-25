"use strict";
import express from "express";
import fs from "fs";

var app = express();

app.get("/users", function(req, res) {
    
    fs.readFile(__dirname + "/defaultData/" + "userList.json", "utf-8", function(err, data) {
        data = JSON.parse(data);
        var dateSeconds = new Date();
        var second = 0;
        setInterval(function(intervalSecond, dateSeconds) {
            console.log(dateSeconds.getSeconds() + intervalSecond + second);
            second++;
        }, 1000, 1, dateSeconds);
        console.log(dateSeconds.getSeconds());

        res.send(JSON.stringify(data));
        res.end();
    });
});

var server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("This is the instance for web, the Address is http://%s:%s", host, port);
});
