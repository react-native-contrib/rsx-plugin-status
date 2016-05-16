'use strict';

let utils = require('rsx-common');
let chai = require('chai');
let sinon = require('sinon');
let path = require('path');

let expect = chai.expect;
let log = utils.log;

log.level = 'silent';

let command = require('../src/status');

describe('status', () => {

    it('should return dependencies as an object', () => {
        process.env.RN_PROJECT_ROOT = path.join(__dirname, 'fixtures');

        let result;
        command({}, (list) => {
            result = list;
        });
        expect(result).to.eql({
            'react': '0.14.8',
            'react-native': '0.25.1',
        });
    });

    it('should throw an error if the directory is not a React Native project', () => {
        process.env.RN_PROJECT_ROOT = process.cwd();

        let spy = sinon.spy();
        command({}, spy);
        expect(spy.called).to.be.false;
    });

});
