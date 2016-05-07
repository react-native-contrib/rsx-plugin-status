const utils = require('rsx-common');
const path = require('path');

const log = utils.log;

const appRoot = process.env.RN_PROJECT_ROOT;
const dependencies = ['react', 'react-native'];

const getInstalledVersion = (dependency) => {
  return utils.project.getPackageJson(
    path.join(appRoot, 'node_modules', dependency)
  ).version;
};

module.exports = function status(args, callback) {
  log.heading = 'rsx-status';

  dependencies.forEach((dependency) => {
    log.info(dependency + ': ' + getInstalledVersion(dependency));
  });
};
