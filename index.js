const express = require('express');
const exec = require('child_process').exec;
const app = express();
const PORT = process.env.PORT || 3000;
const CMD = `${process.env.PIVXCLI} masternode status`;

app.set('views', './views');
app.enable('view cache');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    exec(CMD, function (error, stdout, stderr) {
        res.render('status', { data: stderr || stdout });
    });
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
});
