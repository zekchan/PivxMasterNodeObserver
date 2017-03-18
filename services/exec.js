const exec = require('child_process').exec;

module.exports = cmd => new Promise((resolve, reject) => {
    exec(cmd, function (error, stdout, stderr) {
        if (error) {
            return resolve(stderr)
        }
        return resolve(stdout)
    });
});