var assert = require('assert');
const fd = require('./../src/format_data');


describe('format data from text to number', function () {
    describe('#fd.formatTaskStatusTextToNumber()', function () {
        it('should return fd.NUM_ONGOING_TASK when the value is fd.TEXTE_ONGOING_TASK', function () {
            assert.equal(fd.formatTaskStatusTextToNumber(fd.TEXTE_ONGOING_TASK), fd.NUM_ONGOING_TASK)
        });
    });
});

describe('format data from text to number', function () {
    describe('#fd.formatTaskStatusTextToNumber()', function () {
        it('should return fd.NUM_DONE_TASK when the value is fd.TEXTE_DONE_TASK', function () {
            assert.equal(fd.formatTaskStatusTextToNumber(fd.TEXTE_DONE_TASK), fd.NUM_DONE_TASK)
        });
    });
});

describe('format data from text to number', function () {
    describe('#fd.formatTaskStatusTextToNumber()', function () {
        it('should return fd.NUM_BLOCKED_TASK when the value is fd.TEXTE_BLOCKED_TASK', function () {
            assert.equal(fd.formatTaskStatusTextToNumber(fd.TEXTE_BLOCKED_TASK), fd.NUM_BLOCKED_TASK)
        });
    });
});

describe('format data from number to text', function () {
    describe('#fd.formatTaskStatusTextToNumber()', function () {
        it('should return fd.TEXTE_BLOCKED_TASK when the value is fd.NUM_BLOCKED_TASK', function () {
            assert.equal(fd.formatTaskStatusNumberToText(fd.NUM_BLOCKED_TASK), fd.TEXTE_BLOCKED_TASK)
        });
    });
});

describe('format data from number to text', function () {
    describe('#fd.formatTaskStatusTextToNumber()', function () {
        it('should return fd.TEXTE_DONE_TASK when the value is fd.NUM_DONE_TASK', function () {
            assert.equal(fd.formatTaskStatusNumberToText(fd.NUM_DONE_TASK), fd.TEXTE_DONE_TASK)
        });
    });
});

describe('format data from number to text', function () {
    describe('#fd.formatTaskStatusTextToNumber()', function () {
        it('should return fd.TEXTE_ONGOING_TASK when the value is fd.NUM_ONGOING_TASK', function () {
            assert.equal(fd.formatTaskStatusNumberToText(fd.NUM_ONGOING_TASK), fd.TEXTE_ONGOING_TASK)
        });
    });
});
