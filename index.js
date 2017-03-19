const express = require('express');
const exec = require('./services/exec');
const getActualBlocksCount = require('./services/getActualBlocksCount');
const getDaemonUptime = require('./services/getDaemonUptime');
const app = express();
const PORT = process.env.PORT || 3000;

const fetchInfo = cmd => exec(`${process.env.PIVXCLI} ${cmd}`);


app.set('views', './views');
app.enable('view cache');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    Promise.all([
        getDaemonUptime(),
        fetchInfo('masternode debug'),
        fetchInfo('getbalance'),
        fetchInfo('getblockcount')
    ])
        .then(([daemonProcessUptime, debug, balance, blockCount]) => (
                res.render('status', {
                    daemonProcessUptime,
                    debug,
                    balance,
                    blockCount
                })
            )
        )
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
});
