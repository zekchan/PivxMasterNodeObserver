const express = require('express');
const exec = require('./services/exec');
const getActualBlocksCount = require('./services/getActualBlocksCount');
const app = express();
const PORT = process.env.PORT || 3000;
const CMD = `${process.env.PIVXCLI} masternode status`;

const fetchInfo = cmd => exec(`${process.env.PIVXCLI} ${cmd}`);


app.set('views', './views');
app.enable('view cache');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    exec(CMD, function (error, stdout, stderr) {
        res.render('status', { data: stderr || stdout });
    });
    Promise.all([
        fetchInfo('masternode debug'),
        fetchInfo('getbalance'),
        fetchInfo('getblockcount'),
        getActualBlocksCount()
    ])
        .then(([debug, balance, blockCount, actualBlocksCount]) => (
                res.render('status', {
                    debug,
                    balance,
                    blockCount,
                    actualBlocksCount
                })
            )
        )
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
});
