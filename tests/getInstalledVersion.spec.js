'use strict';

let chai = require('chai');
let path = require('path');

let expect = chai.expect;

let getInstalledVersion = require('../src/getInstalledVersion');

describe('#getInstalledVersion', () => {

    it('should return the installed version of a dependency in the node_modules folder', () => {
        process.env.RN_PROJECT_ROOT = path.join(process.cwd());
        expect(getInstalledVersion('rsx-common')).to.eql('0.1.8');
    });

});
