const utils = require('rsx-common');

const getInstalledVersion = require('./getInstalledVersion');

const log = utils.log;

module.exports = function status(args, callback) {
    log.heading = 'rsx-status';
    const list = {};

    ['react', 'react-native'].forEach((dependency) => {
        list[dependency] = getInstalledVersion(dependency);
        log.info(dependency + ': ' + getInstalledVersion(dependency));
    });

    if (callback) { callback(list); }
};
