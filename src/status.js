const utils = require('rsx-common');
const log = utils.log;
const path = require('path');

const appRoot = process.env['RN_PROJECT_ROOT'];

const getInstalledDependencyVersion = (dependency) => {
  return utils.getProjectPackageJson(
    path.join(appRoot, 'node_modules', dependency)
  ).version;
}

const logDependency = (dependency) => {
  log.info(dependency + ': ' + getInstalledDependencyVersion(dependency));
}

module.exports = function status(args, callback) {
  log.heading = 'rsx-status';

  const pjson = utils.getProjectPackageJson(appRoot);
  [
    'react',
    'react-native',
  ].forEach(logDependency);
};
