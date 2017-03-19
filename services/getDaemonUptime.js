const exec = require('./exec');

module.exports = () => exec('pgrep pivxd')
    .then(pid => {
        if (pid) {
            return exec(`ps -p "${pid.trim()}" -o etime=`);
        }

        return '';
    });
