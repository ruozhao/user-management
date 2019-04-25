"use strict";
import express from "express";
import fs from "fs";

var app = express();

app.get("/users", function(req, res) {
    console.log("req is : ++++ " + req);
    fs.readFile(__dirname + "/defaultData/" + "userList.json", "utf-8", function(err, data) {
        data = JSON.parse(data);
        data.user4 = {
            "name": "Shan zhen lin"
        };
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("This is the instance for web, the Address is http://%s:%s", host, port);
});
