const express = require('express');
const exec = require('child_process').exec;
const app = express();
const PORT = process.env.PORT || 3000;
const CMD = `${process.env.PIVXCLI} masternode status`;

app.get('/', function (req, res) {
    exec(CMD, function (error, stdout, stderr) {
        res.send(stderr || stdout);
    });
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
});
