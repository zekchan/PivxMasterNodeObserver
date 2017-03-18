const fetch = require('node-fetch');
const { load } = require('cheerio');

const PIVX_EXPLORER = 'http://www.presstab.pw/phpexplorer/PIVX/index.php';
// '.block:first p:nth(3) a';
// TODO: optimize it
const getCount = $ => $('.block').first().closest('p').next().next().children('a').text();

const getActualBlocksCount = () =>
    fetch(PIVX_EXPLORER)
        .then(response => response.text())
        .then(body => {
            const $ = load(body);

            return getCount($);
        })
        .catch(() => Promise.resolve('Error getting actual blocks count!'));

module.exports = getActualBlocksCount;