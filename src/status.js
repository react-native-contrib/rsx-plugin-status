'use strict';

let utils = require('rsx-common');
let getInstalledVersion = require('./getInstalledVersion');

let log = utils.log;

module.exports = function status(args, callback) {
    log.heading = 'rsx-status';
    let list = {};

    if (utils.validate.isProject() === false) {
        log.error(`${process.cwd()} is not a valid React Native project`);
        return 1;
    }

    ['react', 'react-native'].forEach((dependency) => {
        list[dependency] = getInstalledVersion(dependency);
        log.info(dependency + ': ' + getInstalledVersion(dependency));
    });

    if (callback) { callback(list); }
};
