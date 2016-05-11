const utils = require('rsx-common');
const chai = require('chai');
const sinon = require('sinon');
const mock = require('mock-require');
const path = require('path');

const expect = chai.expect;
const log = utils.log;

log.level = 'silent';

const command = require('../src/status');

describe('status', () => {

    it('should return dependencies as an object', () => {
        process.env.RN_PROJECT_ROOT = path.join(__dirname, 'fixtures');

        var result;
        command({}, (list) => {
            result = list;
        });
        expect(result).to.deep.equals({
            'react': '0.14.8',
            'react-native': '0.25.1',
        });
    });

    it('should throw an error if the directory is not a React Native project', () => {
        process.env.RN_PROJECT_ROOT = process.cwd();

        const spy = sinon.spy();
        command({}, spy);
        expect(spy.called).to.deep.equals(false);
    });

});
