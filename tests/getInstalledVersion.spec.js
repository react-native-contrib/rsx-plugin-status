const chai = require('chai');
const path = require('path');

const expect = chai.expect;

const getInstalledVersion = require('../src/getInstalledVersion');

describe('#getInstalledVersion', () => {

    it('should return the installed version of a dependency in the node_modules folder', () => {
        process.env.RN_PROJECT_ROOT = path.join(process.cwd());
        expect(getInstalledVersion('rsx-common')).to.deep.equals('0.1.4');
    });

});
