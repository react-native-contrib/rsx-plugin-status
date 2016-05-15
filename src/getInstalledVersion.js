'use strict';

const utils = require('rsx-common');
const path = require('path');

module.exports = function getInstalledVersion(dependency) {
    return utils.project.getPackageJson(
        path.join(process.env.RN_PROJECT_ROOT, 'node_modules', dependency)
    ).version;
};
