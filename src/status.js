const utils = require('rsx-common');

const getInstalledVersion = require('./getInstalledVersion');

const log = utils.log;

module.exports = function status(args, callback) {
    log.heading = 'rsx-status';
    const appRoot = process.env.RN_PROJECT_ROOT;

    ['react', 'react-native'].forEach((dependency) => {
        log.info(dependency + ': ' + getInstalledVersion(dependency));
    });
};
