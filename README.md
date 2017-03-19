# PivxMasterNodeObserver

# Setup insructions
1. [Install](https://nodejs.org/en/download/package-manager/) Nodejs 7.* and NPM to your masternode host
2. Install pm2 ang yarn globally `npm install -g yarn pm2`
3. Clone repo `git clone https://github.com/zekchan/PivxMasterNodeObserver.git`
4. CD to project folder `cd PivxMasterNodeObserver`
5. Install dependencies `yarn install`
6. Run server via pm2 `PORT=80 PIVXCLI=<path to your pivx-cli bin> pm2 start index.js`
7. Done. Just go to `http://<your masternode ip>` via browser and check status of node!
